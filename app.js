
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const db = createClient(
  'https://krfphvzbgjkhvwwkmuol.supabase.co',
  'sb_publishable_xv1mdxb9FR_0ldAMCFudiQ__uibMltd'
);

const $ = id => document.getElementById(id);
const site = 'https://western-crush.github.io/Western-Crush/';
const status = m => $('status').textContent = m;

let user = null, revision = 0;

function check(e) {
  if (e) throw e;
}

async function act(fn) {
  try {
    await fn();
  } catch (e) {
    status(e.message || 'Une erreur est survenue.');
  }
}

$('register').onclick = () => act(async () => {
  if (!$('adult').checked)
    throw Error('Vous devez avoir 18 ans ou plus.');

  if (!$('email').value ||
      !$('email').validity.valid ||
      $('password').value.length < 12)
    throw Error('Email valide et 12 caractères minimum requis.');

  const { error } = await db.auth.signUp({
    email: $('email').value.trim(),
    password: $('password').value,
    options: {
      emailRedirectTo: site,
      data: { adult_declared: true }
    }
  });

  check(error);
  $('password').value = '';
  status('Vérifiez votre boîte mail.');
});

$('login').onclick = () => act(async () => {
  const { error } = await db.auth.signInWithPassword({
    email: $('email').value.trim(),
    password: $('password').value
  });

  check(error);
  $('password').value = '';
  status('Connexion réussie.');
});

$('logout').onclick = () => act(async () => {
  const { error } = await db.auth.signOut();
  check(error);
  status('Déconnexion réussie.');
});

const bucket = db.storage.from('profile-photos');

function element(tag, text) {
  const el = document.createElement(tag);
  if (text) el.textContent = text;
  return el;
}

// VERIFICATION DES ABONNEMENTS

async function getSubscriptions(uid) {
  const { data, error } = await db
    .from('subscriptions')
    .select('plan,status,current_period_end')
    .eq('user_id', uid);

  check(error);
  return data || [];
}

function getActiveSubscription(subscriptions) {
  return subscriptions
    .filter(s =>
      ['cowboy', 'vip'].includes(s.plan) &&
      ['active', 'trialing'].includes(s.status) &&
      s.current_period_end &&
      new Date(s.current_period_end).getTime() > Date.now()
    )
    .sort((a, b) =>
      Number(b.plan === 'vip') -
      Number(a.plan === 'vip')
    )[0];
}

function subscriptionBadge(sub) {
  const badge = element('p',
    sub
      ? sub.plan === 'vip'
        ? '⭐ Shérif VIP — Abonnement actif'
        : '🤠 Cowboy Premium — Abonnement actif'
      : 'Membre gratuit'
  );

  badge.style.padding = '12px';
  badge.style.borderRadius = '10px';
  badge.style.fontWeight = 'bold';
  badge.style.border = '1px solid #b98645';
  badge.style.background = '#302116';
  badge.style.color = '#f6c479';

  return badge;
}

// PROFIL UTILISATEUR

async function profile() {
  const uid = user?.id;
  const rev = ++revision;

  if (!uid) return;

  const view = $('view');
  view.textContent = 'Chargement…';

  const { data, error } = await db
    .from('profiles')
    .select('pseudo,bio,age,city,department,gender,looking_for,interests,photo_url,discoverable')
    .eq('id', uid)
    .maybeSingle();

  check(error);

  let subscription = null;
  let subscriptionError = false;

  try {
    subscription = getActiveSubscription(
      await getSubscriptions(uid)
    );
  } catch {
    subscriptionError = true;
  }

  if (user?.id !== uid || rev !== revision) return;

  view.replaceChildren(
    element('h2', 'Mon profil privé')
  );

  view.append(
    subscriptionError
      ? element('p', 'Statut abonnement indisponible.')
      : subscriptionBadge(subscription)
  );

  const form = element('form');
  const fields = {};

  for (const [key, label, max] of [
    ['pseudo', 'Pseudo', 60],
    ['age', 'Âge (18 ans minimum)', 3],
    ['city', 'Ville', 100],
    ['department', 'Département', 100],
    ['gender', 'Genre', 80],
    ['looking_for', 'Personne recherchée', 100],
    ['interests', 'Centres d’intérêt', 500],
    ['bio', 'Présentation', 1000]
  ]) {
    const l = element('label', label);

    const f = element(
      key === 'bio' || key === 'interests'
        ? 'textarea'
        : 'input'
    );

    f.value = data?.[key] ?? '';
    f.maxLength = max;

    if (key === 'age') {
      f.type = 'number';
      f.min = 18;
      f.max = 120;
      f.step = 1;
      f.required = true;
    }

    if (key === 'pseudo') f.required = true;

    fields[key] = f;
    l.append(f);
    form.append(l);
  }

  const visibility = element('input');
  visibility.type = 'checkbox';
  visibility.checked = data?.discoverable === true;
  visibility.style.width = 'auto';
  const visibilityLabel = element('label');
  visibilityLabel.append(visibility, document.createTextNode(' Rendre mon profil visible dans Découvrir'));
  form.append(visibilityLabel, element('p', 'Si vous activez cette option, votre pseudo, âge, ville, département et présentation seront visibles par les membres autorisés. Votre photo peut être consultée par les membres autorisés si votre profil est visible.'));

  const save = element('button', 'Enregistrer mon profil');
  form.append(save);
  view.append(form, locationForm(uid, rev));

  form.onsubmit = e => {
    e.preventDefault();

    act(async () => {
      save.disabled = true;

      try {
        if (user?.id !== uid)
          throw Error('Session expirée.');

        const values = Object.fromEntries(
          Object.entries(fields).map(
            ([k, v]) => [k, v.value.trim()]
          )
        );

        values.age = Number(values.age);

        if (!values.pseudo ||
            !Number.isInteger(values.age) ||
            values.age < 18 ||
            values.age > 120)
          throw Error('Pseudo et âge valide obligatoires.');

        const { error } = await db
          .from('profiles')
          .upsert({
            id: uid,
            ...values,
            discoverable: visibility.checked,
            updated_at: new Date().toISOString()
          });

        check(error);
        status('Profil enregistré.');

      } finally {
        save.disabled = false;
      }
    });
  };

  // PHOTOS

  let path = data?.photo_url || null;

  const photos = element('div');
  photos.append(element('h2', 'Ma photo de profil'));

  const img = element('img');
  img.alt = 'Ma photo de profil';
  img.hidden = true;
  photos.append(img);

  const file = element('input');
  file.type = 'file';
  file.accept = 'image/jpeg,image/png,image/webp';
  photos.append(file);

  const upload = element('button', 'Ajouter / remplacer la photo');
  const remove = element('button', 'Supprimer la photo');

  photos.append(upload, remove);
  view.append(photos);

  async function preview() {
    img.hidden = true;
    img.removeAttribute('src');
    remove.disabled = !path;

    if (path && path.startsWith(uid + '/')) {
      const { data, error } =
        await bucket.createSignedUrl(path, 600);

      check(error);
      img.src = data.signedUrl;
      img.hidden = false;
    }
  }

  upload.onclick = () => act(async () => {
    upload.disabled = remove.disabled = true;

    try {
      if (user?.id !== uid)
        throw Error('Session expirée.');

      const f = file.files[0];

      if (!f ||
          !['image/jpeg','image/png','image/webp'].includes(f.type) ||
          f.size > 5 * 1024 * 1024)
        throw Error('Choisissez une image JPEG, PNG ou WebP de 5 Mo maximum.');

      const ext = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp'
      }[f.type];

      const next = uid + '/' + crypto.randomUUID() + '.' + ext;

      const { error } = await bucket.upload(next, f, {
        contentType: f.type
      });

      check(error);

      const result = await db
        .from('profiles')
        .update({ photo_url: next })
        .eq('id', uid)
        .select('id')
        .single();

      if (result.error) {
        await bucket.remove([next]);
        throw Error('Enregistrez votre profil avant votre photo : ' + result.error.message);
      }

      const old = path;
      path = next;
      file.value = '';

      if (old?.startsWith(uid + '/')) {
        const r = await bucket.remove([old]);

        if (r.error) {
          await preview();
          throw Error('Nouvelle photo enregistrée, mais ancienne photo non supprimée.');
        }
      }

      await preview();
      status('Photo enregistrée.');

    } finally {
      upload.disabled = false;
      remove.disabled = !path;
    }
  });

  remove.onclick = () => act(async () => {
    if (!path || user?.id !== uid) return;

    upload.disabled = remove.disabled = true;

    try {
      const { error } = await bucket.remove([path]);
      check(error);

      const r = await db
        .from('profiles')
        .update({ photo_url: null })
        .eq('id', uid);

      check(r.error);

      path = null;
      await preview();
      status('Photo supprimée.');

    } finally {
      upload.disabled = false;
      remove.disabled = !path;
    }
  });

  await preview();
}

// NOUVEL ESPACE PREMIUM

async function premium() {
  const uid = user?.id;
  const rev = ++revision;

  if (!uid) return;

  const view = $('view');
  view.textContent = 'Chargement des abonnements…';

  let subscriptions;

  try {
    subscriptions = await getSubscriptions(uid);
  } catch (error) {
    if (user?.id === uid && rev === revision) {
      view.textContent = 'Impossible de vérifier votre abonnement.';
      throw error;
    }
    return;
  }

  if (user?.id !== uid || rev !== revision) return;

  const active = getActiveSubscription(subscriptions);

  const pending = subscriptions.some(s =>
    !['canceled', 'incomplete_expired'].includes(s.status)
  );

  view.replaceChildren();

  view.append(
    element('h2', '★ Western Crush Premium'),
    element('p', 'Abonnements en mode test.')
  );

  const info = element('article');
  info.style.border = '2px solid #c28b48';
  info.style.background = '#302116';

  info.append(element('h2', 'Mon abonnement'));

  if (active) {
    info.append(
      subscriptionBadge(active),
      element('p',
        'Fin de période actuelle : ' +
        new Date(active.current_period_end)
          .toLocaleDateString('fr-FR')
      )
    );
  } else {
    info.append(element('p',
      pending
        ? 'Abonnement en attente ou à vérifier.'
        : 'Vous utilisez actuellement la formule gratuite.'
    ));
  }

  view.append(info);

  const plans = [
    {
      id: 'cowboy',
      name: '🤠 Cowboy Premium',
      price: '9,99 € / mois'
    },
    {
      id: 'vip',
      name: '⭐ Shérif VIP',
      price: '19,99 € / mois'
    }
  ];

  const buttons = [];

  for (const plan of plans) {
    const card = element('article');

    card.append(
      element('h2', plan.name),
      element('h3', plan.price)
    );

    const selected = active?.plan === plan.id;

    const btn = element(
      'button',
      selected
        ? '✓ Abonnement actif'
        : active || pending
          ? 'Abonnement déjà enregistré'
          : "S'abonner — Test"
    );

    btn.disabled = !!active || pending;
    buttons.push(btn);

    if (selected) {
      btn.style.background = '#287b42';
      card.style.border = '2px solid #d4a84f';
    }

    btn.onclick = () => act(async () => {
      if (active || pending || user?.id !== uid) return;

      buttons.forEach(b => b.disabled = true);
      let navigating = false;

      try {
        const latest = await getSubscriptions(uid);

        if (user?.id !== uid || rev !== revision) return;

        if (latest.some(s =>
          !['canceled', 'incomplete_expired'].includes(s.status)
        )) {
          await premium();
          return;
        }

        status('Ouverture du paiement Stripe…');

        const { data, error } =
          await db.functions.invoke('create-checkout', {
            body: { plan: plan.id }
          });

        check(error);

        if (!data?.url)
          throw Error(data?.error || 'Paiement indisponible.');

        const url = new URL(data.url);

        if (url.origin !== 'https://checkout.stripe.com')
          throw Error('Adresse de paiement invalide.');

        if (user?.id !== uid || rev !== revision) return;

        window.location.assign(url.href);
        navigating = true;

      } finally {
        if (!navigating) {
          buttons.forEach(b => {
            b.disabled = !!active || pending;
          });
        }
      }
    });

    card.append(btn);
    view.append(card);
  }

  const refresh = element('button', 'Actualiser mon abonnement');
  refresh.onclick = () => act(premium);

  view.append(
    refresh,
    element('p', '🔒 Paiement sécurisé par Stripe — Mode test.')
  );
}

// Photos des membres : la règle Storage contrôle chaque accès.
async function memberPhoto(card, target, uid, rev) {
  const placeholder = element('div', '🤠 Aucune photo disponible');
  placeholder.className = 'member-placeholder';
  card.prepend(placeholder);
  try {
    const r = await bucket.list(target, {limit: 100});
    if (r.error || user?.id !== uid || revision !== rev) return;
    const file = (r.data || []).find(f => f.id && /^[0-9a-f-]+\.(jpg|png|webp)$/i.test(f.name));
    if (!file) return;
    const signed = await bucket.createSignedUrl(target + '/' + file.name, 60);
    if (signed.error || !signed.data?.signedUrl || user?.id !== uid || revision !== rev) return;
    const img = element('img');
    img.alt = 'Photo de profil du membre';
    img.className = 'member-photo';
    img.referrerPolicy = 'no-referrer';
    img.onerror = () => { img.remove(); placeholder.hidden = false; };
    img.onload = () => { placeholder.hidden = true; };
    card.prepend(img);
    img.src = signed.data.signedUrl;
  } catch (_) { /* Le profil reste disponible sans photo. */ }
}

// Filtres propres à la session, sans stockage persistant.
const defaultFilters = () => ({min_age:18,max_age:120,wanted_gender:'',wanted_city:'',wanted_department:'',with_photo:false,radius_km:null,sort_by:'distance'});
let searchFilters = defaultFilters();
let nearbyMode = false, nearbyRadius = 50;
function locationForm(uid, rev) {
  const form = element('form');
  form.append(element('h2', '📍 Ma commune'), element('p', 'Choisissez votre commune pour activer la recherche à proximité. Seul le centre de la commune est enregistré, sans GPS.'));
  const input = element('input'); input.placeholder = 'Ville ou code postal'; input.required = true; input.minLength = 2; input.maxLength = 100;
  const go = element('button', 'Chercher une commune'); go.type = 'submit';
  const results = element('div'); form.append(input, go, results);
  let request = 0;
  form.onsubmit = e => { e.preventDefault(); void act(async () => {
    const n = ++request; results.textContent = 'Recherche…';
    const r = await db.rpc('search_communes', {search_text:input.value.trim()});
    if (user?.id !== uid || revision !== rev || n !== request) return;
    check(r.error); results.replaceChildren();
    if (!r.data?.length) results.append(element('p','Aucune commune trouvée.'));
    for (const c of r.data || []) results.append(actionButton(c.nom + ' (' + c.code_postal + ')', async () => {
      if (user?.id !== uid || revision !== rev || n !== request) return;
      if (!confirm('Enregistrer cette commune sur votre profil ?')) return;
      check((await db.rpc('set_member_location',{commune_code:c.code_insee})).error);
      if (user?.id === uid && revision === rev) {status('Commune enregistrée.'); await profile();}
    }));
  }); };
  return form;
}
function searchForm() {
  const form = element('form'); form.className = 'search-filters';
  form.append(element('h2','🔎 Recherche avancée'));
  const fields = {};
  function field(key,label,options) {
    const l=element('label',label), f=element(options?'select':'input');
    if(options) for(const [value,name] of options){const o=element('option',name);o.value=value;f.append(o);}
    f.value=searchFilters[key] ?? ''; fields[key]=f;l.append(f);form.append(l);return f;
  }
  for(const [k,label] of [['min_age','Âge minimum'],['max_age','Âge maximum']]){
    const f=field(k,label);f.type='number';f.min=18;f.max=120;f.required=true;f.value=searchFilters[k];
  }
  field('wanted_gender','Genre',[['','Tout le monde'],['femme','Femme'],['homme','Homme'],['autre','Autre']]);
  const city=field('wanted_city','Ville');city.maxLength=100;
  const lookup=element('input');lookup.placeholder='Ville ou code postal';lookup.maxLength=100;
  const choices=element('div');let request=0;const uid=user?.id,rev=revision;
  form.append(lookup,actionButton('Trouver une commune',async()=>{
    const q=lookup.value.trim();if(q.length<2)throw Error('Saisissez au moins deux caractères.');
    const n=++request;choices.textContent='Recherche…';
    const r=await db.rpc('search_communes',{search_text:q});
    if(user?.id!==uid||revision!==rev||n!==request)return;
    check(r.error);choices.replaceChildren();
    if(!r.data?.length)choices.textContent='Aucune commune trouvée.';
    for(const c of r.data||[])choices.append(actionButton(c.nom+' ('+c.code_postal+')',async()=>{
      if(user?.id!==uid||revision!==rev||n!==request)return;
      city.value=c.nom;const code=String(c.code_insee);fields.wanted_department.value=code.startsWith('97')||code.startsWith('98')?code.slice(0,3):code.slice(0,2);choices.replaceChildren();
    }));
  }),choices);
  const dep=field('wanted_department','Département (code)');dep.maxLength=100;
  field('radius_km','Rayon autour de ma commune',[['','Toute la France'],...Array.from({length:20},(_,i)=>[String((i+1)*10),((i+1)*10)+' km'])]);
  field('sort_by','Trier par',[['distance','Du plus proche au plus éloigné'],['newest','Nouveaux membres']]);
  const photo=field('with_photo','Uniquement avec photo');photo.type='checkbox';photo.checked=searchFilters.with_photo;
  const go=element('button','Rechercher');go.type='submit';form.append(go,actionButton('Réinitialiser',async()=>{searchFilters=defaultFilters();await discover();}),actionButton('Choisir ma commune',profile),element('small','Le rayon est calculé autour de votre commune enregistrée. Les distances sont approximatives. La recherche par code postal sélectionne la commune, pas un quartier précis.'));
  form.onsubmit=e=>{e.preventDefault();const min=Number(fields.min_age.value),max=Number(fields.max_age.value);if(min>max){status('Tranche d’âge invalide.');return;}searchFilters={min_age:min,max_age:max,wanted_gender:fields.wanted_gender.value,wanted_city:city.value.trim(),wanted_department:dep.value.trim(),with_photo:photo.checked,radius_km:fields.radius_km.value?Number(fields.radius_km.value):null,sort_by:fields.sort_by.value};void act(discover);};
  return form;
}

// DECOUVERTE DES MEMBRES
async function discover() {
  const uid = user?.id;
  const rev = ++revision;
  if (!uid) return;
  const view = $('view');
  view.textContent = 'Chargement des membres…';
  const { data, error } = await db.rpc('search_members_advanced', searchFilters);
  if (user?.id !== uid || rev !== revision) return;
  if (error) {
    view.textContent = 'Impossible de charger les membres.';
    check(error);
  }
  view.replaceChildren(element('h2', '🤠 Découvrir les membres'), searchForm());
  const refresh = element('button', 'Actualiser les profils');
  refresh.onclick = () => act(discover);
  const settings = element('button', 'Modifier ma visibilité');
  settings.onclick = () => act(profile);
  view.append(refresh, settings, actionButton('💘 Mes matchs', matches), actionButton('🚫 Mes blocages', blocked));
  const liked = await db.from('likes').select('receiver_id').eq('sender_id', uid);
  check(liked.error);
  if (user?.id !== uid || rev !== revision) return;
  const ownLikes = new Set(liked.data.map(x => x.receiver_id));
  if (!data?.length) {
    view.append(element('p', searchFilters.radius_km !== null ? 'Aucun membre localisé dans ce rayon. Vérifiez votre commune et élargissez le rayon.' : 'Aucun profil correspondant. Modifiez les filtres.'));
    return;
  }
  for (const member of data) {
    const card = element('article');
    card.append(
      element('h2', `${member.pseudo || 'Membre'} — ${member.age} ans`),
      element('p', [member.city, member.department].filter(Boolean).join(' · ')),
      element('p', member.bio || 'Aucune présentation.')
    );
    if (Number.isFinite(member.distance)) card.append(element('p', member.distance === 0 ? 'À moins de 5 km environ' : 'À environ ' + member.distance + ' km'));
    const target = member.id;
    card.append(actionButton(ownLikes.has(target) ? 'Retirer mon J’aime' : '❤️ J’aime', async () => {
      if (user?.id !== uid) return;
      const result = ownLikes.has(target)
        ? await db.from('likes').delete().eq('sender_id', uid).eq('receiver_id', target)
        : await db.from('likes').insert({sender_id: uid, receiver_id: target});
      check(result.error);
      const m = await db.rpc('get_matches'); check(m.error);
      if (user?.id !== uid || rev !== revision) return;
      status(m.data.some(x => x.match_id === target) ? '💘 C’est un match !' : 'J’aime actualisé.');
      await discover();
    }), actionButton('🚫 Bloquer', async () => {
      if (user?.id !== uid || !confirm('Bloquer ce membre ?')) return;
      check((await db.from('blocks').insert({blocker_id: uid, blocked_id: target})).error);
      if (user?.id === uid && rev === revision) await discover();
    }));
    card.append(actionButton('🚩 Signaler', () => reportMember(target, member.pseudo || 'Membre', discover)));
    view.append(card);
    void memberPhoto(card, target, uid, rev);
  }
}

async function reportMember(target, name, back) {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid || !target || uid === target) return;
  view.replaceChildren(element('h2', '🚩 Signaler ' + name));
  view.append(element('p', 'Le signalement est transmis à la modération, pas au membre signalé.'));
  const form = element('form');
  const label = element('label', 'Motif du signalement');
  const select = element('select'); select.required = true;
  select.style.cssText = 'display:block;width:100%;padding:11px;border-radius:9px;margin:8px 0;font:inherit';
  const placeholder = element('option', 'Choisir un motif'); placeholder.value = ''; select.append(placeholder);
  for (const reason of ['Faux profil','Harcèlement ou insultes','Suspicion de compte mineur','Arnaque ou escroquerie','Comportement inapproprié','Autre raison']) {
    const option = element('option', reason); option.value = reason; select.append(option);
  }
  label.append(select); form.append(label);
  const detailsLabel = element('label', 'Informations complémentaires (facultatif)');
  const details = element('textarea'); details.maxLength = 1000; details.rows = 4; detailsLabel.append(details); form.append(detailsLabel);
  const send = element('button', 'Envoyer le signalement'); send.type = 'submit'; form.append(send);
  form.onsubmit = e => { e.preventDefault(); act(async () => {
    if (user?.id !== uid || rev !== revision || !select.value || send.disabled) return;
    send.disabled = true;
    try {
      const reason = select.value + (details.value.trim() ? ' — ' + details.value.trim() : '');
      const result = await db.from('reports').insert({reporter_id:uid, reported_id:target, reason});
      check(result.error);
      if (user?.id !== uid || rev !== revision) return;
      view.replaceChildren(element('h2','Signalement envoyé'), element('p','Merci. Votre signalement a été transmis à la modération.'), actionButton('Retour',back));
      status('Signalement enregistré.');
    } finally { send.disabled = false; }
  }); };
  view.append(form, actionButton('Annuler',back));
}

function actionButton(label, fn) {
  const b = element('button', label); b.type = 'button';
  b.onclick = () => act(async () => { b.disabled = true; try { await fn(); } finally { b.disabled = false; } });
  return b;
}

async function matches() {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  view.textContent = 'Chargement des matchs…';
  const m = await db.rpc('get_matches'); check(m.error);
  const d = await db.rpc('discover_members'); check(d.error);
  if (user?.id !== uid || rev !== revision) return;
  view.replaceChildren(element('h2', '💘 Mes matchs'), actionButton('Actualiser', matches), actionButton('Découvrir', discover));
  if (!m.data.length) view.append(element('p', 'Aucun match pour le moment.'));
  for (const x of m.data) {
    const name = d.data.find(p => p.id === x.match_id)?.pseudo || 'Membre compatible';
    const card = element('article'); card.append(element('h2', name), actionButton('💬 Envoyer un message', () => conversation(x.match_id, name))); view.append(card);
    void memberPhoto(card, x.match_id, uid, rev);
  }
}
async function conversation(target, name) {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  view.textContent = 'Chargement de la conversation…';
  const m = await db.rpc('get_matches'); check(m.error);
  if (user?.id !== uid || rev !== revision) return;
  if (!m.data.some(x => x.match_id === target)) { await matches(); return; }
  const r = await db.from('messages').select('sender_id,content,created_at').or(`and(sender_id.eq.${uid},receiver_id.eq.${target}),and(sender_id.eq.${target},receiver_id.eq.${uid})`).order('created_at', {ascending:false}).limit(100);
  check(r.error);
  if (user?.id !== uid || rev !== revision) return;
  view.replaceChildren(element('h2', '💬 ' + name), actionButton('Retour aux matchs', matches), actionButton('Actualiser', () => conversation(target,name)));
  for (const msg of r.data.reverse()) view.append(element('p', (msg.sender_id === uid ? 'Moi : ' : name + ' : ') + msg.content));
  view.append(actionButton('🚩 Signaler ce membre', () => reportMember(target, name, () => conversation(target,name))));
  const input = element('textarea'); input.maxLength = 1000; input.placeholder = 'Votre message';
  view.append(input, actionButton('Envoyer', async () => {
    if (user?.id !== uid || rev !== revision || !input.value.trim()) return;
    check((await db.from('messages').insert({sender_id:uid,receiver_id:target,content:input.value.trim()})).error);
    if (user?.id === uid && rev === revision) await conversation(target,name);
  }));
}
async function blocked() {
  const uid = user?.id, rev = ++revision, view = $('view'); if (!uid) return;
  view.textContent = 'Chargement…';
  const r = await db.from('blocks').select('blocked_id').eq('blocker_id',uid); check(r.error);
  if (user?.id !== uid || rev !== revision) return;
  view.replaceChildren(element('h2','Membres bloqués'), actionButton('Retour',discover));
  if (!r.data.length) view.append(element('p','Aucun membre bloqué.'));
  r.data.forEach((x,i) => view.append(element('p', 'Membre bloqué ' + (i+1) + ' — ' + x.blocked_id), actionButton('Débloquer', async () => {
    if (user?.id !== uid || rev !== revision) return;
    check((await db.from('blocks').delete().eq('blocker_id',uid).eq('blocked_id',x.blocked_id)).error);
    if (user?.id === uid && rev === revision) await blocked();
  })));
}


// ADMINISTRATION : autorisations vérifiées par Supabase (RLS).
const adminButton = actionButton('🛡️ Administration', administration);
adminButton.hidden = true;
$('logout').before(adminButton);
let adminCheck = 0;
async function syncAdmin() {
  const uid = user?.id, token = ++adminCheck;
  adminButton.hidden = true;
  if (!uid) return;
  const r = await db.rpc('is_admin');
  if (token === adminCheck && user?.id === uid && !r.error && r.data === true) adminButton.hidden = false;
}
async function requireAdmin(uid) {
  if (!uid || user?.id !== uid) throw Error('Session expirée.');
  const r = await db.rpc('is_admin'); check(r.error);
  if (r.data !== true || user?.id !== uid) throw Error('Accès administrateur refusé.');
}
async function adminRows(table, columns) {
  const rows = [];
  for (let start = 0; ; start += 100) {
    const r = await db.from(table).select(columns).order(table === 'suspended_users' ? 'user_id' : 'id').range(start, start + 99);
    check(r.error); rows.push(...r.data);
    if (r.data.length < 100) return rows;
  }
}
async function administration() {
  const uid = user?.id, rev = ++revision, view = $('view');
  const current = () => user?.id === uid && rev === revision;
  view.textContent = 'Vérification des droits administrateur…';
  try {
    await requireAdmin(uid);
    const [members, reports, suspensions, subscriptions] = await Promise.all([
      adminRows('profiles','id,pseudo,age,city,discoverable'),
      adminRows('reports','id,reporter_id,reported_id,reason,created_at,reviewed'),
      adminRows('suspended_users','user_id,reason,suspended_at'),
      adminRows('subscriptions','id,user_id,plan,status,current_period_end')
    ]);
    await requireAdmin(uid);
    if (!current()) return;
    const names = new Map(members.map(m => [m.id,m.pseudo || 'Membre']));
    const name = id => names.get(id) || id;
    const suspended = new Map(suspensions.map(x => [x.user_id,x]));
    const active = new Set(subscriptions.filter(x => getActiveSubscription([x])).map(x => x.user_id));
    view.replaceChildren(element('h2','🛡️ Administration Western Crush'), actionButton('Actualiser', administration));
    const stats = element('article');
    stats.append(element('p', `Profils enregistrés : ${members.length}`), element('p', `Membres Premium actifs : ${active.size}`), element('p', `Signalements à traiter : ${reports.filter(x => !x.reviewed).length}`), element('p', `Comptes suspendus : ${suspensions.length}`));
    view.append(stats, element('h2','Gestion des membres'));
    for (const m of members) {
      const card = element('article');
      card.append(element('h3', name(m.id)), element('p', `${m.age ?? '—'} ans · ${m.city || 'Ville non renseignée'}`), element('p', m.id === uid ? 'Votre compte administrateur' : suspended.has(m.id) ? 'Suspendu : '+suspended.get(m.id).reason : 'Non suspendu'));
      if (m.id !== uid && !suspended.has(m.id)) card.append(actionButton('Suspendre', async () => {
        if (!current()) return;
        const reason = prompt('Motif de suspension (obligatoire) :');
        if (!reason?.trim() || !confirm('Confirmer la suspension de '+name(m.id)+' ?')) return;
        await requireAdmin(uid); if (!current()) return;
        check((await db.from('suspended_users').insert({user_id:m.id,reason:reason.trim().slice(0,500)})).error);
        if (current()) await administration();
      }));
      view.append(card);
    }
    view.append(element('h2','Comptes suspendus'));
    if (!suspensions.length) view.append(element('p','Aucun compte suspendu.'));
    for (const x of suspensions) {
      const card = element('article'); card.append(element('p',name(x.user_id)+' — '+x.reason),actionButton('Réactiver', async () => {
        if (!current() || !confirm('Réactiver ce compte ?')) return;
        await requireAdmin(uid); if (!current()) return;
        const r = await db.from('suspended_users').delete().eq('user_id',x.user_id).select('user_id'); check(r.error);
        if (!r.data.length) throw Error('Aucune suspension supprimée.');
        if (current()) await administration();
      })); view.append(card);
    }
    view.append(element('h2','Signalements'));
    if (!reports.length) view.append(element('p','Aucun signalement.'));
    for (const x of reports) {
      const card = element('article'); card.append(element('p','Membre signalé : '+name(x.reported_id)),element('p','Auteur : '+name(x.reporter_id)),element('p',x.reason),element('p',x.reviewed?'Traité':'À traiter'));
      if (!x.reviewed) card.append(actionButton('Marquer comme traité',async () => {
        if (!current()) return; await requireAdmin(uid); if (!current()) return;
        const r = await db.from('reports').update({reviewed:true}).eq('id',x.id).select('id'); check(r.error); if (!r.data.length) throw Error('Signalement non modifié.');
        if (current()) await administration();
      })); view.append(card);
    }
    view.append(element('h2','Abonnements — consultation uniquement'));
    for (const x of subscriptions) view.append(element('p',`${name(x.user_id)} · ${x.plan} · ${x.status} · ${x.current_period_end ? new Date(x.current_period_end).toLocaleDateString('fr-FR') : '—'}`));
    if (!subscriptions.length) view.append(element('p','Aucun abonnement.'));
  } catch (e) { if (current()) view.textContent = 'Administration indisponible.'; throw e; }
}

// NOTIFICATIONS PRIVEES
const notificationButton = $('notifications');
let notificationBusy = false;
async function refreshNotificationCount() {
  const uid = user?.id;
  if (!uid || notificationBusy) return;
  notificationBusy = true;
  try {
    const r = await db.from('notifications').select('id', {count:'exact',head:true}).eq('user_id',uid).eq('is_read',false);
    if (user?.id !== uid) return;
    notificationButton.textContent = r.error ? '🔔 Notifications' : `🔔 Notifications${r.count ? ' ('+r.count+')' : ''}`;
  } catch { /* Nouvelle tentative au prochain rafraîchissement. */ }
  finally { notificationBusy = false; }
}
async function notifications() {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  const current = () => user?.id === uid && revision === rev;
  view.textContent = 'Chargement des notifications…';
  const r = await db.from('notifications').select('id,type,is_read,created_at').eq('user_id',uid).order('created_at',{ascending:false}).limit(100);
  if (!current()) return;
  if (r.error) { view.textContent = 'Notifications indisponibles.'; check(r.error); }
  view.replaceChildren(element('h2','🔔 Mes notifications'),actionButton('Actualiser',notifications),actionButton('Tout marquer comme lu',async()=>{
    if (!current()) return;
    check((await db.from('notifications').update({is_read:true}).eq('user_id',uid).eq('is_read',false)).error);
    await refreshNotificationCount(); if(current()) await notifications();
  }));
  const labels = {like:'❤️ Un membre apprécie votre profil.',match:'💘 Vous avez un nouveau match !',message:'💬 Vous avez reçu un message.'};
  if (!r.data.length) view.append(element('p','Aucune notification pour le moment.'));
  for (const n of r.data) {
    const card = element('article');
    card.append(element('h3',(n.is_read?'':'● ')+(labels[n.type] || 'Nouvelle notification')),element('small',new Date(n.created_at).toLocaleString('fr-FR')));
    if (!n.is_read) card.append(actionButton('Marquer comme lue',async()=>{
      if (!current()) return;
      check((await db.from('notifications').update({is_read:true}).eq('user_id',uid).eq('id',n.id)).error);
      await refreshNotificationCount(); if(current()) await notifications();
    }));
    if(n.type==='match'||n.type==='message') card.append(actionButton('Ouvrir mes matchs',matches));
    view.append(card);
  }
  await refreshNotificationCount();
}
notificationButton.onclick = () => act(notifications);
setInterval(refreshNotificationCount, 15000);
window.addEventListener('focus',refreshNotificationCount);

// NAVIGATION

document.querySelectorAll('[data-tab]').forEach(btn => {
  btn.onclick = () => act(async () => {
    if (btn.dataset.tab === 'profile') {
      await profile();
    } else if (btn.dataset.tab === 'premium') {
      await premium();
    } else if (['discover', 'decouvrir'].includes(btn.dataset.tab)) {
      await discover();
    } else if (['matches','match','messages','chat','messagerie'].includes(btn.dataset.tab)) {
      await matches();
    } else {
      revision++;
      $('view').textContent = 'Fonctionnalité en préparation.';
    }
  });
});

// APPLICATION MOBILE

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// AUTHENTIFICATION

db.auth.onAuthStateChange((event, session) => {
  const previous = user?.id;
  user = session?.user || null;
  adminButton.hidden = true;
  if (previous !== user?.id) { notificationButton.textContent = '🔔 Notifications'; searchFilters = defaultFilters(); nearbyMode=false; nearbyRadius=50; }
  setTimeout(refreshNotificationCount, 0);
  setTimeout(() => act(syncAdmin), 0);

  $('auth').hidden = !!user;
  $('app').hidden = !user;

  if (user) {
    if (previous !== user.id || event === 'INITIAL_SESSION') {
      setTimeout(() => act(async () => {
        const payment = new URLSearchParams(
          window.location.search
        ).get('payment');

        if (payment === 'success' || payment === 'cancelled') {
          await premium();

          status(
            payment === 'success'
              ? 'Retour du paiement. Actualisez votre abonnement si nécessaire.'
              : 'Paiement annulé.'
          );

          const cleanUrl = new URL(window.location.href);
          cleanUrl.searchParams.delete('payment');

          history.replaceState(null, '', cleanUrl.href);
        } else {
          await profile();
        }
      }), 0);
    }
  } else {
    revision++;
    $('view').replaceChildren();
  }
});