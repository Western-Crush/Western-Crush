
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
    .select('plan,status,current_period_end,next_plan,next_plan_at,cancel_at_period_end,cancel_at')
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
    .select('pseudo,bio,age,city,department,gender,looking_for,interests,western_style,relationship_goal,photo_url,discoverable')
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
    ['interests', 'Centres d’intérêt (séparés par des virgules)', 500],
    ['western_style', 'Style Country et Western', 100],
    ['relationship_goal', 'Relation recherchée', 100],
    ['bio', 'Présentation', 1000]
  ]) {
    const l = element('label', label);

    const f = element(
      key === 'western_style' || key === 'relationship_goal' ? 'select' : key === 'bio' || key === 'interests' ? 'textarea' : 'input'
    );

    if (f.tagName === 'SELECT') {
      const options = key === 'western_style' ? ['Country traditionnel','Country Line Dance','Ranch et équitation','Country Rock','Western et Far West','Tous les styles'] : ['Relation sérieuse','Amitié','Partenaire de danse','Rencontres'];
      const existing = data?.[key];
      if(existing && !options.includes(existing)) options.push(existing);
      f.append(new Option('Non renseigné',''), ...options.map(v=>new Option(v,v)));
    }
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
    if(key === 'interests') {
      const choices=element('fieldset');choices.className='wc-passions';choices.append(element('legend','Choisir vos passions (ou compléter le texte)'));
      const parse=()=>f.value.split(/[,;]+/).map(v=>v.trim()).filter(Boolean);
      for(const hobby of ['Musique','Danse','Country','Line Dance','Équitation','Rodéo','Nature','Festivals','Guitare','Voyages']){
        const label=element('label'),cb=element('input');cb.type='checkbox';
        const sync=()=>{cb.checked=parse().some(v=>v.toLowerCase()===hobby.toLowerCase());};sync();f.addEventListener('input',sync);
        cb.onchange=()=>{let values=parse().filter(v=>v.toLowerCase()!==hobby.toLowerCase());if(cb.checked)values.push(hobby);const next=values.join(', ');if(next.length<=500)f.value=next;f.dispatchEvent(new Event('input'));};
        label.append(cb,document.createTextNode(hobby));choices.append(label);
      }form.append(choices);
    }
  }

  const visibility = element('input');
  visibility.type = 'checkbox';
  visibility.checked = data?.discoverable === true;
  visibility.style.width = 'auto';
  const visibilityLabel = element('label');
  visibilityLabel.append(visibility, document.createTextNode(' Rendre mon profil visible dans Découvrir'));
  form.append(visibilityLabel, element('p', 'Si vous activez cette option, votre pseudo, âge, ville, département et présentation seront visibles par les membres autorisés. Votre photo peut être consultée par les membres autorisés si votre profil est visible.'));

  const privacy = element('article');
  privacy.className = 'wc-invisible';
  privacy.append(element('h3', '⭐ Mode invisible — Shérif VIP'),
    element('p', 'Masquez votre profil dans Découvrir et les recherches. Vos matchs existants restent accessibles. Ce réglage est indépendant de la visibilité classique.'));
  const privacyState = element('p', 'Vérification du statut…');
  privacyState.setAttribute('role', 'status');
  const privacyButton = element('button', 'Chargement…');
  privacyButton.type = 'button';
  privacyButton.disabled = true;
  const privacyUpgrade = element('button', 'Voir les abonnements');
  privacyUpgrade.type = 'button';
  privacyUpgrade.hidden = true;
  privacyUpgrade.onclick = () => act(async () => {
    if (user?.id === uid && rev === revision) await premium();
  });
  const privacyRetry = element('button', 'Actualiser le statut');
  privacyRetry.type = 'button';
  privacyRetry.hidden = true;
  let profileExists = !!data;
  let privacyBusy = false, privacyEnabled = false, privacyReady = false;
  const privacyCurrent = () => user?.id === uid && rev === revision && privacy.isConnected;

  async function refreshPrivacy() {
    if (!privacyCurrent()) return;
    privacyReady = false;
    privacyButton.disabled = true;
    privacyUpgrade.hidden = true;
    privacyRetry.hidden = true;
    privacyState.textContent = 'Vérification du statut…';
    try {
      const plan = await db.rpc('my_membership_plan');
      if (!privacyCurrent()) return;
      check(plan.error);
      if (plan.data !== 'vip') {
        privacyState.textContent = 'Fonctionnalité réservée aux abonnés Shérif VIP.';
        privacyButton.textContent = '🔒 Mode invisible';
        privacyUpgrade.hidden = false;
        return;
      }
      const result = await db.rpc('get_my_invisible_mode');
      if (!privacyCurrent()) return;
      check(result.error);
      if (typeof result.data !== 'boolean' || !profileExists) {
        privacyState.textContent = 'Enregistrez votre profil avant d’activer le mode invisible.';
        privacyButton.textContent = 'Mode invisible';
        return;
      }
      privacyEnabled = result.data === true;
      privacyReady = true;
      privacyButton.textContent = privacyEnabled ? 'Désactiver le mode invisible' : 'Activer le mode invisible';
      privacyButton.setAttribute('aria-pressed', String(privacyEnabled));
      privacyState.textContent = privacyEnabled
        ? 'Activé — votre profil est masqué dans les recherches.'
        : 'Désactivé — votre visibilité classique s’applique.';
    } catch {
      if (!privacyCurrent()) return;
      privacyState.textContent = 'Statut indisponible. Réessayez pour vérifier votre réglage.';
      privacyButton.textContent = 'Mode invisible';
      privacyRetry.hidden = false;
    } finally {
      if (privacyCurrent()) privacyButton.disabled = privacyBusy || !privacyReady;
    }
  }
  privacyRetry.onclick = () => { if (!privacyBusy) void refreshPrivacy(); };
  privacyButton.onclick = async () => {
    if (!privacyCurrent() || privacyBusy || !privacyReady) return;
    privacyBusy = true;
    privacyButton.disabled = true;
    privacyState.textContent = 'Enregistrement…';
    let failed = false;
    try {
      const result = await db.rpc('set_invisible_mode', { enabled: !privacyEnabled });
      if (!privacyCurrent()) return;
      check(result.error);
      if (typeof result.data !== 'boolean') throw Error('Réponse inattendue');
    } catch {
      failed = true;
    } finally {
      if (privacyCurrent()) {
        privacyBusy = false;
        await refreshPrivacy();
        if (failed && privacyCurrent()) status('Modification non confirmée. Vérifiez le statut du mode invisible ou réessayez.');
      }
    }
  };
  privacy.append(privacyState, privacyButton, privacyUpgrade, privacyRetry,
    element('small', 'Le masquage VIP prend fin lorsque votre abonnement VIP expire.'));

  const save = element('button', 'Enregistrer mon profil');
  form.append(save);
  view.append(form, privacy, locationForm(uid, rev));
  void refreshPrivacy();

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

        const payload = { ...values, discoverable: visibility.checked };
        const result = profileExists
          ? await db.from('profiles').update(payload).eq('id', uid).select('id').single()
          : await db.from('profiles').insert({ id: uid, ...payload }).select('id').single();

        check(result.error);
        profileExists = true;
        status('Profil enregistré.');
        if (privacyCurrent() && !privacyBusy) void refreshPrivacy();

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
  const gallery = element('article'); view.append(gallery);
  void renderGallery(gallery, uid, true, uid, rev).catch(e => { gallery.textContent = e.message; });

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
    const changeAt = new Date(active.next_plan_at || 0);
    const next = {
      cowboy: { name: '🤠 Cowboy Premium', price: '9,99 € / mois' },
      vip: { name: '⭐ Shérif VIP', price: '19,99 € / mois' }
    }[active.next_plan];
    const notice = element('div');
    notice.style.cssText = 'padding:12px;margin:12px 0;border:1px solid #b98645;border-radius:10px;background:#49321f;color:#f6c479';
    if (active.cancel_at_period_end || active.cancel_at) {
      const end = new Date(active.cancel_at || active.current_period_end);
      notice.append(element('strong', '📅 Résiliation programmée'),
        element('p', 'Fin de votre abonnement : ' + end.toLocaleDateString('fr-FR')));
      info.append(notice);
    } else if (next && active.next_plan !== active.plan && changeAt.getTime() > Date.now()) {
      notice.append(
        element('strong', '📅 Changement d’abonnement programmé'),
        element('p', 'Prochaine formule : ' + next.name),
        element('p', 'Date : ' + changeAt.toLocaleDateString('fr-FR', {day:'numeric',month:'long',year:'numeric'})),
        element('p', 'Prochain tarif : ' + next.price),
        element('p', 'Vous conservez vos avantages actuels jusqu’au changement de formule.')
      );
      info.append(notice);
    }
  } else {
    info.append(element('p',
      pending
        ? 'Abonnement en attente ou à vérifier.'
        : 'Vous utilisez actuellement la formule gratuite.'
    ));
  }

  if (active || pending) {
    const manage = element('button', '⚙️ Gérer mon abonnement');
    manage.onclick = () => act(async () => {
      if (manage.disabled || user?.id !== uid || rev !== revision) return;
      manage.disabled = true;
      let navigating = false;
      try {
        status('Ouverture du portail Stripe…');
        const { data: { session }, error: sessionError } = await db.auth.getSession();
        check(sessionError);
        if (!session?.access_token || session.user.id !== uid)
          throw Error('Reconnectez-vous pour gérer votre abonnement.');
        if (user?.id !== uid || rev !== revision) return;
        const { data, error } = await db.functions.invoke('create-portal-session', {
          body: {},
          headers: { Authorization: `Bearer ${session.access_token}` }
        });
        if (error) {
          let message;
          try { message = (await error.context.json()).error; } catch (_) {}
          throw Error(message || 'Impossible d’ouvrir le portail Stripe.');
        }
        if (!data?.url) throw Error('Portail Stripe indisponible.');
        const url = new URL(data.url);
        if (url.origin !== 'https://billing.stripe.com')
          throw Error('Adresse du portail invalide.');
        if (user?.id !== uid || rev !== revision) return;
        window.location.assign(url.href);
        navigating = true;
      } finally {
        if (!navigating) manage.disabled = false;
      }
    });
    info.append(manage, element('p',
      'Accédez directement à votre portail Stripe pour gérer votre offre, vos factures ou votre résiliation. Au retour, actualisez votre abonnement.'
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
    const scheduled = !!active && !active.cancel_at_period_end && !active.cancel_at && active.next_plan === plan.id && !selected && new Date(active.next_plan_at || 0).getTime() > Date.now();

    const btn = element(
      'button',
      selected
        ? '✓ Abonnement actif'
        : scheduled
          ? '📅 Changement programmé'
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
const defaultFilters = () => ({min_age:18,max_age:90,wanted_gender:'',wanted_city:'',wanted_department:'',with_photo:false,radius_km:null,sort_by:'distance'});
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
function searchForm(paid) {
  const form = element('form'); form.className = 'search-filters';
  form.append(element('h2','🔎 Recherche avancée'));
  const fields = {};
  function field(key,label,options) {
    const l=element('label',label), f=element(options?'select':'input');
    if(options) for(const [value,name] of options){const o=element('option',name);o.value=value;f.append(o);}
    f.value=searchFilters[key] ?? ''; fields[key]=f;l.append(f);form.append(l);return f;
  }
  for(const [k,label] of [['min_age','Âge minimum'],['max_age','Âge maximum']]){
    const f=field(k,label);f.type='number';f.min=18;f.max=90;f.required=true;f.defaultValue=String(searchFilters[k] ?? defaultFilters()[k]);f.value=f.defaultValue;
  }
  field('wanted_gender','Genre',[['','Tout le monde'],['femme','Femme'],['homme','Homme'],['autre','Autre']]);
  const city=field('wanted_city','Ville');city.maxLength=100;
  const lookup=element('input');lookup.placeholder='Ville ou code postal';lookup.maxLength=100;
  const choices=element('div');let request=0;const uid=user?.id,rev=revision;
  form.append(lookup,actionButton('Trouver une commune',async()=>{
    const q=lookup.value.trim(); const n=++request; if(q.length<2){choices.textContent='Saisissez au moins deux caractères pour trouver une commune.'; return;}
    choices.textContent='Recherche…';
    const r=await db.rpc('search_communes',{search_text:q});
    if(user?.id!==uid||revision!==rev||n!==request)return;
    if(r.error){choices.textContent=r.error.message || 'Recherche de commune indisponible.';return;}choices.replaceChildren();
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
  if(!paid){fields.radius_km.value='';fields.sort_by.value='newest';photo.checked=false;for(const f of [fields.radius_km,fields.sort_by,photo])f.disabled=true;form.append(element('p','🔒 Filtres avancés réservés aux abonnés Cowboy et Shérif VIP.'),actionButton('Voir les abonnements',premium));}
  const go=element('button','Rechercher');go.type='submit';form.append(go,actionButton('Réinitialiser',async()=>{searchFilters=defaultFilters();status('');await discover();}),actionButton('Choisir ma commune',profile),element('small','Le rayon est calculé autour de votre commune enregistrée. Les distances sont approximatives. La recherche par code postal sélectionne la commune, pas un quartier précis.'));
  form.onsubmit=e=>{e.preventDefault();const min=Number(fields.min_age.value),max=Number(fields.max_age.value);if(!Number.isInteger(min)||!Number.isInteger(max)||min<18||max>90||min>max){status('Tranche d’âge invalide.');return;}searchFilters={min_age:min,max_age:max,wanted_gender:fields.wanted_gender.value,wanted_city:city.value.trim(),wanted_department:dep.value.trim(),with_photo:photo.checked,radius_km:fields.radius_km.value?Number(fields.radius_km.value):null,sort_by:fields.sort_by.value};status('');void act(discover);};
  return form;
}

function showMatchCelebration() {
  document.querySelector('.wc-celebration')?.remove();
  const banner=element('div','💘 C’est un match !'); banner.className='wc-celebration'; banner.setAttribute('role','status'); document.body.append(banner); setTimeout(()=>banner.remove(),3000);
}
// DECOUVERTE DES MEMBRES
async function discover() {
  const uid = user?.id;
  const rev = ++revision;
  if (!uid) return;
  const view = $('view');
  view.textContent = 'Chargement des membres…';
  const membership = await db.rpc('my_membership_plan');
  if(user?.id!==uid || rev!==revision)return;
  const paid = !membership.error && ['cowboy','vip'].includes(membership.data);
  if(!paid)searchFilters={...searchFilters,radius_km:null,with_photo:false,sort_by:'newest'};
  const { data, error } = await db.rpc('search_members_advanced', searchFilters);
  if (user?.id !== uid || rev !== revision) return;
  if (error) {
    view.textContent = 'Impossible de charger les membres.';
    check(error);
  }
  const filters = element('details'); filters.className = 'wc-filters'; filters.open = false; filters.append(element('summary','🔎 Filtres de recherche'), searchForm(paid));
  view.replaceChildren(element('h2', '🤠 Découvrir les membres'), filters);
  const quota = element('p','Chargement des likes…');
  view.prepend(quota);
  async function refreshQuota(){ const r=await db.rpc('my_remaining_likes'); if(user?.id===uid && revision===rev) quota.textContent=r.error?'Compteur indisponible':r.data===-1?'★ Likes illimités Premium':`${r.data} / 10 likes restants aujourd’hui`; }
  void refreshQuota();
  view.append(actionButton('♥ Qui m’aime ?', receivedLikes));
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
  const deck = element('div'); deck.className = 'wc-deck';
  view.append(deck);
  let index = 0;
  function showCard() {
    if (user?.id !== uid || rev !== revision) return;
    deck.replaceChildren();
    if (index >= data.length) {
      deck.append(element('p','Vous avez parcouru tous les profils.'), actionButton('Revoir les profils', discover));
      return;
    }
    const member = data[index];
    deck.append(element('small', `Profil ${index + 1} sur ${data.length}`));
    const card = element('article'); card.className = 'wc-profile-card';
    card.append(
      element('h2', `${member.pseudo || 'Membre'} — ${member.age} ans`),
      element('p', [member.city, member.department].filter(Boolean).join(' · ')),
      element('p', member.bio || 'Aucune présentation.')
    );
    if (Number.isFinite(member.distance)) card.append(element('p', member.distance === 0 ? 'À moins de 5 km environ' : 'À environ ' + member.distance + ' km'));
    const target = member.id;
    const actions = element('div'); actions.className = 'wc-card-actions';
    let busy = false;
    actions.append(actionButton('✕ Passer', async () => { if (busy || !card.isConnected || rev !== revision) return; index++; showCard(); }));
    actions.append(actionButton(ownLikes.has(target) ? 'Retirer mon J’aime' : '❤️ J’aime', async () => {
      if (user?.id !== uid || rev !== revision || !card.isConnected || busy) return;
      busy = true;
      try {
      const result = ownLikes.has(target)
        ? await db.from('likes').delete().eq('sender_id', uid).eq('receiver_id', target)
        : await db.from('likes').insert({sender_id: uid, receiver_id: target});
      void refreshQuota();
      check(result.error);
      const m = await db.rpc('get_matches'); check(m.error);
      if (user?.id !== uid || rev !== revision) return;
      const matched = !ownLikes.has(target) && m.data.some(x => x.match_id === target);
      status(matched ? '💘 C’est un match !' : 'J’aime actualisé.');
      if (matched) showMatchCelebration();
      if (ownLikes.has(target)) { ownLikes.delete(target); showCard(); }
      else { ownLikes.add(target); index++; showCard(); }
      } finally { busy = false; }
    }));
    card.append(actions, actionButton('Voir le profil détaillé', () => detailedProfile(target, member.pseudo, discover)));
    void renderBadge(card, target, uid, rev);
    const safety = element('div'); safety.className = 'wc-card-safety';
    safety.append(actionButton('🚫 Bloquer', async () => {
      if (user?.id !== uid || !confirm('Bloquer ce membre ?')) return;
      check((await db.from('blocks').insert({blocker_id: uid, blocked_id: target})).error);
      if (user?.id === uid && rev === revision) await discover();
    }));
    safety.append(actionButton('🚩 Signaler', () => reportMember(target, member.pseudo || 'Membre', discover)));
    card.append(safety);
    deck.append(card);
    let start = null;
    card.addEventListener('pointerdown', e => { if (busy || e.button !== 0 || e.target.closest('button')) return; start = {x:e.clientX,y:e.clientY,id:e.pointerId}; card.setPointerCapture(e.pointerId); });
    card.addEventListener('pointermove', e => { if (start?.id !== e.pointerId) return; const dx=e.clientX-start.x; card.style.transform = `translateX(${Math.max(-100,Math.min(100,dx))}px) rotate(${Math.max(-8,Math.min(8,dx/15))}deg)`; });
    function resetSwipe(){start=null;card.style.transform='';}
    card.addEventListener('pointercancel',resetSwipe);
    card.addEventListener('pointerup', e => { if(start?.id!==e.pointerId)return; const dx=e.clientX-start.x,dy=e.clientY-start.y;resetSwipe();if(busy || Math.abs(dx)<85 || Math.abs(dx)<Math.abs(dy)*1.5)return; if(dx<0)actions.children[0].click(); else if(!ownLikes.has(target))actions.children[1].click(); });
    void memberPhoto(card, target, uid, rev);
  }
  showCard();
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
  const ids = m.data.map(x => x.match_id);
  const d = ids.length ? await db.from('profiles').select('id,pseudo').in('id', ids) : {data:[],error:null};
  if (user?.id !== uid || rev !== revision) return;
  view.replaceChildren(element('h2', '💘 Mes matchs'), actionButton('Actualiser', matches), actionButton('Découvrir', discover));
  if (!m.data.length) view.append(element('p', 'Aucun match pour le moment.'));
  for (const x of m.data) {
    const name = d.data?.find(p => p.id === x.match_id)?.pseudo || 'Membre compatible';
    const card = element('article');
    const presence = element('small','Présence inconnue');
    const preview = element('p','Chargement du dernier message…');
    card.append(element('h2', name), presence, preview, actionButton('💬 Envoyer un message', () => conversation(x.match_id, name))); view.append(card);
    void Promise.all([db.rpc('is_member_online',{other_user:x.match_id}),db.rpc('last_message',{other_user:x.match_id})]).then(([o,l])=>{
      if(user?.id!==uid || rev!==revision) return;
      showPresence(presence,o);
      const msg=l.data?.[0]; preview.textContent=l.error?'Aperçu indisponible':msg?(msg.sender_id===uid?'Vous : ':'')+msg.content.slice(0,150):'Aucun message';
    }).catch(()=>{preview.textContent='Aperçu indisponible';});
    card.append(actionButton('Voir le profil détaillé', () => detailedProfile(x.match_id, name, matches)));
    void renderBadge(card, x.match_id, uid, rev);
    void memberPhoto(card, x.match_id, uid, rev);
  }
}
async function conversation(target, name) {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  const current = () => user?.id === uid && revision === rev;
  view.textContent = 'Chargement de la conversation…';
  const m = await db.rpc('get_matches'); check(m.error);
  if (!current()) return;
  if (!m.data.some(x => x.match_id === target)) { await matches(); return; }
  const thread = element('div'); thread.className = 'wc-thread'; thread.setAttribute('role','log'); thread.setAttribute('aria-label','Messages');
  const info = element('small','Connexion au temps réel…');
  const presence = element('p','Présence inconnue');
  const typing = element('p'); typing.className='wc-typing';
  let typingSent=0, typingTimer;
  function stopTyping(){ clearTimeout(typingTimer); typingSent=0; if(user?.id===uid) void db.rpc('update_typing',{other_user:target,is_typing:false}); }
  async function refreshIndicators(){
    const [o,t]=await Promise.all([db.rpc('is_member_online',{other_user:target}),db.rpc('is_member_typing',{other_user:target})]);
    if(!current())return; showPresence(presence,o); typing.textContent=!t.error&&t.data?name+' est en train d’écrire…':'';
  }
  const input = element('textarea'); input.maxLength = 1000; input.placeholder = 'Votre message'; input.setAttribute('aria-label','Votre message');
  input.addEventListener('input',()=>{
    if(!current())return;
    if(!input.value.trim()){stopTyping();return;}
    if(Date.now()-typingSent>2000){typingSent=Date.now();void db.rpc('update_typing',{other_user:target,is_typing:true});}
    clearTimeout(typingTimer);typingTimer=setTimeout(stopTyping,3500);
  });
  input.addEventListener('blur',stopTyping);
  let busy = false, reading = false, last = null;
  let live = false, pending = false;
  const mode = () => live ? '● Messagerie en temps réel' : 'Actualisation de secours toutes les 3 secondes';
  async function refresh() {
    if (!current()) return;
    if (reading) { pending = true; return; }
    reading = true;
    try {
      const match = await db.rpc('get_matches'); check(match.error);
      if (!current()) return;
      if (!match.data.some(x => x.match_id === target)) { thread.replaceChildren(); await matches(); return; }
      const r = await db.from('messages').select('id,sender_id,content,created_at,read_at').or(`and(sender_id.eq.${uid},receiver_id.eq.${target}),and(sender_id.eq.${target},receiver_id.eq.${uid})`).order('created_at',{ascending:false}).order('id',{ascending:false}).limit(100);
      check(r.error); if (!current()) return;
      if(!document.hidden && r.data.some(msg=>msg.sender_id!==uid&&!msg.read_at)){
        const result=await db.rpc('mark_messages_read',{other_user:target});
        if(!current())return;
        if(!result.error)void refreshUnread();
      }
      const signature = JSON.stringify(r.data);
      if (signature !== last) {
        const bottom = last === null || thread.scrollHeight - thread.scrollTop - thread.clientHeight < 80;
        const oldTop = thread.scrollTop;
        thread.replaceChildren();
        if (!r.data.length) thread.append(element('p','Aucun message. Lancez la conversation !'));
        for (const msg of r.data.slice().reverse()) {
          const bubble = element('div'); bubble.className = 'wc-bubble ' + (msg.sender_id === uid ? 'wc-mine' : 'wc-theirs');
          bubble.append(element('div',msg.content),element('small',new Date(msg.created_at).toLocaleString('fr-FR',{dateStyle:'short',timeStyle:'short'}) + (msg.sender_id===uid?(msg.read_at?' · ✓✓ Lu':' · ✓ Envoyé'):''))); thread.append(bubble);
        }
        thread.scrollTop = bottom ? thread.scrollHeight : oldTop; last = signature;
      }
      info.textContent = mode();
    } catch(e) { if(current()){ thread.replaceChildren(); last=null; info.textContent = 'Actualisation impossible. Nouvelle tentative automatique.'; } }
    finally { reading = false; if (pending && current()) { pending = false; queueMicrotask(refresh); } }
  }
  const send = actionButton('Envoyer ➤', async () => {
    if (!current() || busy || !input.value.trim()) return;
    busy = true; send.disabled = true;
    const content = input.value.trim(); input.disabled = true;
    try {
      check((await db.from('messages').insert({sender_id:uid,receiver_id:target,content})).error);
      if(current()){input.value=''; stopTyping(); await refresh(); thread.scrollTop=thread.scrollHeight;}
    } finally { busy=false; send.disabled=false; input.disabled=false; if(current()) input.focus(); }
  });
  const composer = element('div'); composer.className='wc-composer'; composer.append(input,send);
  view.replaceChildren(element('h2','💬 '+name),actionButton('Retour aux matchs',matches),actionButton('Actualiser',refresh),presence,info,thread,typing,composer,actionButton('🚩 Signaler ce membre',()=>reportMember(target,name,()=>conversation(target,name))));
  const channel = db.channel('wc-chat-' + crypto.randomUUID());
  const onMessage = ({new: row}) => {
    if (!current() || !row) return;
    if ((row.sender_id === uid && row.receiver_id === target) ||
        (row.sender_id === target && row.receiver_id === uid)) void refresh();
  };
  channel.on('postgres_changes', {event:'INSERT',schema:'public',table:'messages',filter:'receiver_id=eq.'+uid}, onMessage)
    .on('postgres_changes', {event:'INSERT',schema:'public',table:'messages',filter:'sender_id=eq.'+uid}, onMessage)
    .on('postgres_changes', {event:'UPDATE',schema:'public',table:'messages',filter:'sender_id=eq.'+uid}, onMessage)
    .subscribe(state => {
      if (!current()) return;
      live = state === 'SUBSCRIBED';
      info.textContent = mode();
      if (live) void refresh();
    });
  let lastCheck = Date.now();
  const onVisible = () => { if (current() && !document.hidden) void refresh(); };
  document.addEventListener('visibilitychange', onVisible);
  const tick = () => {
    if (!current()) {
      document.removeEventListener('visibilitychange', onVisible); clearTimeout(typingTimer);
      void db.removeChannel(channel);
      return;
    }
    // Periodic authorization and missed-event check even when subscribed.
    if (!document.hidden) {
      void refreshIndicators().catch(()=>{});
      lastCheck = Date.now(); void refresh();
    }
    setTimeout(tick, 3000);
  };
  setTimeout(tick, 3000);
  await refresh(); void refreshIndicators().catch(()=>{});
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
      const cert = await db.rpc('is_profile_verified',{other_user:m.id});
      if (!current()) return;
      if (!cert.error) card.append(element('p',cert.data?'✓ Profil vérifié':'Profil non vérifié'),actionButton(cert.data?'Retirer la certification':'Certifier le profil',async()=>{
        if(!current() || !confirm(cert.data?'Retirer le badge ?':'Confirmer que ce profil a été contrôlé ?'))return;
        await requireAdmin(uid); if(!current())return;
        check((await db.rpc('set_profile_verified',{target_user:m.id,verified:!cert.data})).error);
        if(current())await administration();
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
    const r = await db.rpc('get_my_notifications');
    if (user?.id !== uid) return;
    notificationButton.textContent = r.error ? '🔔 Notifications' : `🔔 Notifications${r.data?.some(n=>!n.is_read) ? ' ('+r.data.filter(n=>!n.is_read).length+')' : ''}`;
  } catch { /* Nouvelle tentative au prochain rafraîchissement. */ }
  finally { notificationBusy = false; }
}
async function notifications() {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  const current = () => user?.id === uid && revision === rev;
  view.textContent = 'Chargement des notifications…';
  const r = await db.rpc('get_my_notifications');
  if (!current()) return;
  if (r.error) { view.textContent = 'Notifications indisponibles.'; check(r.error); }
  view.replaceChildren(element('h2','🔔 Mes notifications'),actionButton('Actualiser',notifications),actionButton('Tout marquer comme lu',async()=>{
    if (!current()) return;
    check((await db.rpc('mark_notifications_read',{p_id:null})).error);
    await refreshNotificationCount(); if(current()) await notifications();
  }));
  const labels = {like:'❤️ Un membre apprécie votre profil.',match:'💘 Vous avez un nouveau match !',message:'💬 Vous avez reçu un message.'};
  if (!r.data.length) view.append(element('p','Aucune notification pour le moment.'));
  for (const n of r.data.slice(0,100)) {
    const card = element('article');
    card.append(element('h3',(n.is_read?'':'● ')+(labels[n.type] || 'Nouvelle notification')),element('small',new Date(n.created_at).toLocaleString('fr-FR')));
    if (!n.is_read) card.append(actionButton('Marquer comme lue',async()=>{
      if (!current()) return;
      check((await db.rpc('mark_notifications_read',{p_id:n.id})).error);
      await refreshNotificationCount(); if(current()) await notifications();
    }));
    if(n.type==='like') card.append(actionButton(n.actor_id?'Voir mes likes reçus':'Découvrir avec Premium',n.actor_id?receivedLikes:premium));
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
// V14 : présence et compteur de messages privés.
function showPresence(node,result){node.textContent=result.error?'Présence indisponible':result.data?'● En ligne':'● Hors ligne';node.className=result.data&&!result.error?'wc-online':'wc-offline';}
const unreadButton=document.querySelector('[data-tab="matches"]');
let unreadBusy=false;
async function refreshUnread(){const uid=user?.id;if(!uid){unreadButton.textContent='Matchs';return;}if(unreadBusy)return;unreadBusy=true;try{const r=await db.rpc('unread_messages_count');if(user?.id===uid)unreadButton.textContent='Matchs'+(!r.error&&Number(r.data)>0?' · 💬 '+r.data:'');}finally{unreadBusy=false;}}
async function heartbeat(){if(user&&!document.hidden)await db.rpc('update_presence');}
setInterval(()=>{void heartbeat().catch(()=>{});},30000);
setInterval(()=>{void refreshUnread().catch(()=>{});},5000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){void heartbeat().catch(()=>{});void refreshUnread().catch(()=>{});}});
db.auth.onAuthStateChange(()=>{setTimeout(()=>{void heartbeat().catch(()=>{});void refreshUnread().catch(()=>{});},0);});

// V15 — galleries and detailed profiles
async function renderVipBadge(card,target,uid,rev){
  try {
    const r=await db.rpc('get_vip_badges',{p_user_ids:[target]});
    if(r.error || !r.data?.some(x=>x.profile_id===target && x.is_vip===true) || user?.id!==uid || revision!==rev || !card.isConnected)return;
    const heading=card.querySelector('h2,h3');
    if(!heading || heading.querySelector('.wc-vip-badge'))return;
    const b=element('span','★ SHÉRIF VIP');b.className='wc-vip-badge';
    b.style.cssText='display:inline-block;margin:4px 0 4px 8px;padding:4px 9px;border:1px solid #eac16d;border-radius:999px;background:#78501e;color:#ffe1a0;font-size:12px;font-weight:700;vertical-align:middle;white-space:nowrap;';
    heading.append(b);
  } catch(e) { console.warn('Badge VIP indisponible',e); }
}
async function renderBadge(card,target,uid,rev){
  void renderVipBadge(card,target,uid,rev);
  try { const r=await db.rpc('is_profile_verified',{other_user:target});
    if(!r.error && r.data && user?.id===uid && revision===rev && card.isConnected){const b=element('span',' ✓ Vérifié par la modération');b.className='wc-verified';card.querySelector('h2')?.append(b);}
  } catch {}
}
async function renderGallery(panel,target,own,uid,rev){
  const current=()=>user?.id===uid && revision===rev && panel.isConnected;
  const storage=db.storage.from('profile-gallery');
  const r=await db.from('profile_photos').select('id,photo_url,position').eq('user_id',target).order('position');
  if(!current())return; check(r.error);
  panel.replaceChildren(element('h2',own?'Ma galerie (6 photos supplémentaires)':'Galerie privée'));
  panel.append(element('small',own?'Visible par vos matchs autorisés. JPEG, PNG ou WebP, 5 Mo maximum.':'Photos accessibles uniquement aux matchs autorisés.'));
  const grid=element('div');grid.className='wc-gallery';panel.append(grid);
  for(let pos=1;pos<=6;pos++){
    const row=r.data.find(x=>x.position===pos); if(!row&&!own)continue;
    const cell=element('div');grid.append(cell);
    if(row){
      const pic=element('img');pic.alt='Photo '+pos;pic.referrerPolicy='no-referrer';
      const signed=await storage.createSignedUrl(row.photo_url,60);if(!current())return;
      if(!signed.error){pic.src=signed.data.signedUrl;const zoom=element('button');zoom.type='button';zoom.className='wc-photo-zoom';zoom.setAttribute('aria-label','Agrandir la photo '+pos);zoom.append(pic);zoom.onclick=()=>{if(current())openGalleryZoom(pic);};cell.append(zoom);}else cell.append(element('p','Photo indisponible'));
      if(own)cell.append(actionButton('Supprimer',async()=>{
        const feedback=element('p','Vérification de la session…'); feedback.setAttribute('role','status');cell.append(feedback);
        status('Suppression de la photo : vérification…');
        try {
          if(!panel.isConnected || !own || target!==uid || user?.id!==uid)throw Error('Session ou galerie inactive. Ouvrez de nouveau votre profil.');
          if(!confirm('Supprimer cette photo ?')){feedback.textContent='Suppression annulée.';status('Suppression annulée.');return;}
          const session=await db.auth.getSession();
          if(session.error)throw Error('Session : '+session.error.message);
          if(session.data.session?.user.id!==uid || user?.id!==uid || !panel.isConnected)throw Error('Session expirée ou profil fermé. Reconnectez-vous.');
          feedback.textContent='Suppression du fichier…';
          const removed=await storage.remove([row.photo_url]);
          if(removed.error)throw Error('Stockage : '+removed.error.message);
          if(!removed.data?.length){
            const parts=row.photo_url.split('/');
            const filename=parts.pop();
            const listing=await storage.list(parts.join('/'),{search:filename});
            if(listing.error)throw Error('Vérification du stockage : '+listing.error.message);
            if(listing.data?.some(x=>x.name===filename))throw Error('Le stockage n’a pas supprimé le fichier.');
          }
          const deleted=await db.from('profile_photos').delete().eq('id',row.id).eq('user_id',uid).select('id');
          if(deleted.error)throw Error('Base de données : '+deleted.error.message);
          if(!deleted.data?.some(x=>x.id===row.id))throw Error('La base de données n’a supprimé aucun enregistrement.');
          status('Photo supprimée avec succès.');
          if(panel.isConnected && user?.id===uid){
            await renderGallery(panel,target,own,uid,revision);
            const done=element('p','Photo supprimée avec succès.');done.setAttribute('role','status');panel.prepend(done);
          }
        }catch(e){
          feedback.textContent=e.message||'Échec de la suppression.';
          throw e;
        }
      }));
    }else{
      const input=element('input');input.type='file';input.accept='image/jpeg,image/png,image/webp';input.setAttribute('aria-label','Photo '+pos);
      cell.append(element('small','Photo '+pos),input,actionButton('Ajouter',async()=>{
        if(!current())return;const f=input.files[0];const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[f?.type];
        if(!f||!ext||f.size>5242880)throw Error('Choisissez une image JPEG, PNG ou WebP de 5 Mo maximum.');
        const path=uid+'/'+crypto.randomUUID()+'.'+ext;
        check((await storage.upload(path,f,{contentType:f.type,upsert:false})).error);
        const result=await db.from('profile_photos').insert({user_id:uid,photo_url:path,position:pos});
        if(result.error){await storage.remove([path]);check(result.error);}
        if(current())await renderGallery(panel,target,own,uid,rev);
      }));
    }
  }
  if(!own&&!r.data.length)panel.append(element('p','Aucune photo supplémentaire accessible.'));
}
function openGalleryZoom(pic){
  const dialog=element('dialog');dialog.className='wc-lightbox';const close=element('button','Fermer ×');close.type='button';close.onclick=()=>dialog.close();const img=element('img');img.src=pic.src;img.alt=pic.alt;img.referrerPolicy='no-referrer';dialog.append(close,img);dialog.addEventListener('close',()=>dialog.remove());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});document.body.append(dialog);dialog.showModal();
}
async function detailedProfile(target,name,back){
  const uid=user?.id,rev=++revision,view=$('view');if(!uid)return;
  const current=()=>user?.id===uid && revision===rev;
  view.replaceChildren(actionButton('← Retour',back),element('p','Chargement du profil…'));
  const [p,c,m,me]=await Promise.all([db.from('profiles').select('pseudo,age,city,department,bio,interests,western_style,relationship_goal').eq('id',target).maybeSingle(),db.rpc('compatibility_score',{other_user:target}),db.rpc('get_matches'),db.from('profiles').select('interests,western_style,relationship_goal').eq('id',uid).maybeSingle()]);
  if(!current())return;
  view.replaceChildren(actionButton('← Retour',back));
  if(p.error||!p.data){view.append(element('p','Profil détaillé indisponible selon les autorisations.'));return;}
  const x=p.data,card=element('article');card.className='wc-detail';card.append(element('h2',`${x.pseudo||name} — ${x.age} ans`),element('p',[x.city,x.department].filter(Boolean).join(' · ')),element('p',x.bio||'Aucune présentation.'));
  for(const [label,value] of [['Passions',x.interests],['Style Western',x.western_style],['Relation recherchée',x.relationship_goal]])card.append(element('p',label+' : '+(value||'Non renseigné')));
  const complete=v=>v&&['interests','western_style','relationship_goal'].every(k=>String(v[k]??'').trim());
  if(!me.error&&complete(me.data)&&complete(x)&&!c.error&&c.data!==null){card.append(element('h3',c.data+' % de compatibilité'),element('small','Score indicatif fondé sur les préférences déclarées.'));const bar=element('progress');bar.max=100;bar.value=c.data;card.append(bar);}else card.append(element('p','Compatibilité non calculée : préférences incomplètes ou score indisponible.'));
  view.append(card);void memberPhoto(card,target,uid,rev);void renderBadge(card,target,uid,rev);
  if(!m.error&&m.data.some(x=>x.match_id===target)){const panel=element('article');view.append(panel);await renderGallery(panel,target,false,uid,rev);}else view.append(element('p','Galerie supplémentaire réservée aux matchs.'));
}

// V16 — likes reçus
async function receivedLikes(){
  const uid=user?.id, rev=++revision, view=$('view'); if(!uid)return;
  const current=()=>user?.id===uid && revision===rev;
  view.replaceChildren(element('h2','♥ Qui m’aime ?'),actionButton('Retour',discover));
  const plan=await db.rpc('my_membership_plan'); if(!current())return; check(plan.error);
  if(!['cowboy','vip'].includes(plan.data)){view.append(element('p','Découvrez les personnes qui aiment votre profil avec Cowboy ou Shérif VIP.'),actionButton('Voir les abonnements',premium));return;}
  const r=await db.rpc('get_received_likes'); if(!current())return; check(r.error);
  if(!r.data.length){view.append(element('p','Aucun like reçu disponible.'));return;}
  const profiles=await db.rpc('discover_members'); if(!current())return; check(profiles.error);
  const members=new Map((profiles.data||[]).map(p=>[p.id,p]));
  for(const like of r.data){const p=members.get(like.profile_id); if(!p)continue; const card=element('article'); card.append(element('h3',p.pseudo||'Membre'),element('small',new Date(like.liked_at).toLocaleString('fr-FR')),actionButton('Voir le profil',()=>detailedProfile(like.profile_id,p.pseudo,receivedLikes)));view.append(card);void renderVipBadge(card,like.profile_id,uid,rev);}
}
