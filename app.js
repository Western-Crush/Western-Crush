
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
  form.append(visibilityLabel, element('p', 'Si vous activez cette option, votre pseudo, âge, ville, département et présentation seront visibles par les membres autorisés. Votre photo reste privée.'));

  const save = element('button', 'Enregistrer mon profil');
  form.append(save);
  view.append(form);

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
  photos.append(element('h2', 'Ma photo privée'));

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

// DECOUVERTE DES MEMBRES
async function discover() {
  const uid = user?.id;
  const rev = ++revision;
  if (!uid) return;
  const view = $('view');
  view.textContent = 'Chargement des membres…';
  const { data, error } = await db.rpc('discover_members');
  if (user?.id !== uid || rev !== revision) return;
  if (error) {
    view.textContent = 'Impossible de charger les membres.';
    check(error);
  }
  view.replaceChildren(element('h2', '🤠 Découvrir les membres'));
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
    view.append(element('p', 'Aucun profil visible pour le moment.'));
    return;
  }
  for (const member of data) {
    const card = element('article');
    card.append(
      element('h2', `${member.pseudo || 'Membre'} — ${member.age} ans`),
      element('p', [member.city, member.department].filter(Boolean).join(' · ')),
      element('p', member.bio || 'Aucune présentation.')
    );
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
    view.append(card);
  }
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