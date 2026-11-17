import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const db = createClient(
  'https://krfphvzbgjkhvwwkmuol.supabase.co',
  'sb_publishable_xv1mdxb9FR_0ldAMCFudiQ__uibMltd'
);

const $ = id => document.getElementById(id);
const site = 'https://western-crush.github.io/Western-Crush/';
const status = msg => $('status').textContent = msg;

let user = null;

async function act(fn) {
  try {
    await fn();
  } catch(e) {
    status(e.message || 'Une erreur est survenue.');
  }
}

function check(error) {
  if(error) throw error;
}

$('register').onclick = () => act(async () => {
  if(!$('adult').checked)
    throw Error('Vous devez avoir 18 ans ou plus.');

  if(!$('email').validity.valid ||
     !$('email').value ||
     $('password').value.length < 12)
    throw Error('Email valide et 12 caractères minimum requis.');

  const {error} = await db.auth.signUp({
    email: $('email').value.trim(),
    password: $('password').value,
    options: {
      emailRedirectTo: site,
      data: {adult_declared: true}
    }
  });

  check(error);
  $('password').value = '';
  status('Vérifiez votre boîte mail pour confirmer votre inscription.');
});

$('login').onclick = () => act(async () => {
  const {error} = await db.auth.signInWithPassword({
    email: $('email').value.trim(),
    password: $('password').value
  });

  check(error);
  $('password').value = '';
  status('Connexion réussie.');
});

$('logout').onclick = () => act(async () => {
  const {error} = await db.auth.signOut();
  check(error);
  status('Déconnexion réussie.');
});

async function profile() {
  if(!user) return;

  const uid = user.id;
  const view = $('view');
  view.replaceChildren();

  const {data,error} = await db.from('profiles')
    .select('*')
    .eq('id',uid)
    .maybeSingle();

  check(error);
  if(user?.id !== uid) return;

  view.innerHTML = `
    <h2>🤠 Mon profil Western Crush</h2>

    <p>Complète ton profil pour préparer ton aventure.</p>

    <img id="preview" hidden alt="Ma photo de profil">

    <form id="profileForm">
      <label>📸 Photo de profil
        <input id="photo" type="file"
        accept="image/jpeg,image/png,image/webp">
      </label>

      <label>👤 Pseudo
        <input id="pseudo" required maxlength="60">
      </label>

      <label>🎂 Âge
        <input id="age" type="number"
        min="18" max="120" required>
      </label>

      <label>📍 Ville
        <input id="city" maxlength="100">
      </label>

      <label>🗺️ Département
        <input id="department" maxlength="100">
      </label>

      <label>Genre
        <select id="gender">
          <option value="">Non renseigné</option>
          <option>Homme</option>
          <option>Femme</option>
          <option>Autre</option>
        </select>
      </label>

      <label>❤️ Je recherche
        <select id="looking_for">
          <option value="">Non renseigné</option>
          <option>Homme</option>
          <option>Femme</option>
          <option>Tout le monde</option>
        </select>
      </label>

      <label>🎸 Centres d'intérêt
        <input id="interests" maxlength="300"
        placeholder="Country, danse, chevaux...">
      </label>

      <label>📝 Présentation
        <textarea id="bio" maxlength="1000"
        rows="5"></textarea>
      </label>

      <button type="submit">
        💾 Enregistrer mon profil
      </button>
    </form>
  `;

  const fields = [
    'pseudo','age','city','department',
    'gender','looking_for','interests','bio'
  ];

  fields.forEach(key => {
    $(key).value = data?.[key] ?? '';
  });

  if(data?.photo_url) {
    const {data: signed} = await db.storage
      .from('profile-photos')
      .createSignedUrl(data.photo_url,600);

    if(signed?.signedUrl && $('preview') &&
       user?.id === uid) {
      $('preview').src = signed.signedUrl;
      $('preview').hidden = false;
    }
  }

  if(!$('profileForm') || user?.id !== uid) return;

  $('profileForm').onsubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const button = form.querySelector('button');
    if(button.disabled) return;

    button.disabled = true;

    act(async () => {
      try {
        if(user?.id !== uid)
          throw Error('Session expirée.');

        const age = Number($('age').value);
        const pseudo = $('pseudo').value.trim();

        if(!pseudo)
          throw Error('Pseudo obligatoire.');

        if(!Number.isInteger(age) ||
           age < 18 || age > 120)
          throw Error('Âge invalide.');

        const profileData = {
          id: uid,
          pseudo,
          age,
          city: $('city').value.trim(),
          department: $('department').value.trim(),
          gender: $('gender').value,
          looking_for: $('looking_for').value,
          interests: $('interests').value.trim(),
          bio: $('bio').value.trim(),
          updated_at: new Date().toISOString()
        };

        const file = $('photo').files[0];
        let photoPath = data?.photo_url || null;
        let newPath = null;

        if(file) {
          const formats = {
            'image/jpeg': 'jpg',
            'image/png': 'png',
            'image/webp': 'webp'
          };

          const ext = formats[file.type];

          if(!ext)
            throw Error('Formats JPG, PNG ou WEBP uniquement.');

          if(file.size > 5 * 1024 * 1024)
            throw Error('La photo dépasse 5 Mo.');

          newPath = uid + '/' +
            crypto.randomUUID() + '.' + ext;

          const {error: uploadError} = await db.storage
            .from('profile-photos')
            .upload(newPath,file);

          check(uploadError);
          photoPath = newPath;
        }

        profileData.photo_url = photoPath;

        const {error: saveError} = await db
          .from('profiles')
          .upsert(profileData);

        if(saveError) {
          if(newPath)
            await db.storage.from('profile-photos')
              .remove([newPath]);

          throw saveError;
        }

        if(newPath && data?.photo_url) {
          await db.storage.from('profile-photos')
            .remove([data.photo_url]);
        }

        status('🤠 Ton profil a été enregistré !');
        await profile();

      } finally {
        button.disabled = false;
      }
    });
  };
}

document.querySelectorAll('[data-tab]')
.forEach(btn => {
  btn.onclick = () => act(async () => {
    switch(btn.dataset.tab) {
      case 'profile':
        await profile();
        break;

      case 'discover':
        $('view').textContent =
          'Découverte des célibataires : prochainement.';
        break;

      case 'matches':
        $('view').textContent =
          'Les matchs seront bientôt disponibles.';
        break;

      case 'premium':
        $('view').textContent =
          'Western Crush Premium : prochainement.';
        break;
    }
  });
});

db.auth.onAuthStateChange((event,session) => {
  user = session?.user || null;
  $('auth').hidden = !!user;
  $('app').hidden = !user;

  if(user)
    setTimeout(() => act(profile),0);
  else
    $('view').replaceChildren();
});

if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .catch(() => {});
}
