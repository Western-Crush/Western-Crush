import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
const db = createClient('https://krfphvzbgjkhvwwkmuol.supabase.co','sb_publishable_xv1mdxb9FR_0ldAMCFudiQ__uibMltd');
const $ = id => document.getElementById(id);
const site = 'https://western-crush.github.io/Western-Crush/';
const status = msg => $('status').textContent = msg;
let user = null;
async function act(fn){try {await fn()} catch(e){status(e.message || 'Une erreur est survenue.')}}
function check(error){if(error) throw error;}
$('register').onclick = () => act(async()=>{
 if(!$('adult').checked) throw Error('Vous devez avoir 18 ans ou plus.');
 if(!$('email').validity.valid || !$('email').value || $('password').value.length<12) throw Error('Email valide et 12 caractères minimum requis.');
 const {error}=await db.auth.signUp({email:$('email').value.trim(),password:$('password').value,options:{emailRedirectTo:site,data:{adult_declared:true}}});check(error);$('password').value='';status('Vérifiez votre boîte mail pour confirmer votre inscription.');
});
$('login').onclick=()=>act(async()=>{const {error}=await db.auth.signInWithPassword({email:$('email').value.trim(),password:$('password').value});check(error);$('password').value='';status('Connexion réussie.');});
$('logout').onclick=()=>act(async()=>{const {error}=await db.auth.signOut();check(error);status('Déconnexion réussie.');});
async function profile(){
 const view=$('view');view.replaceChildren();
 const {data,error}=await db.from('profiles').select('pseudo,bio').eq('id',user.id).maybeSingle();check(error);
 const title=document.createElement('h2');title.textContent='Mon profil privé';view.append(title);
 const form=document.createElement('form');const p=document.createElement('input');p.placeholder='Pseudo';p.required=true;p.maxLength=60;p.value=data?.pseudo||'';const b=document.createElement('textarea');b.placeholder='Présentation';b.maxLength=1000;b.value=data?.bio||'';const save=document.createElement('button');save.textContent='Enregistrer';form.append('Pseudo',p,'Présentation',b,save);view.append(form);
 form.onsubmit=e=>{e.preventDefault();act(async()=>{if(!p.value.trim())throw Error('Pseudo obligatoire.');const {error}=await db.from('profiles').upsert({id:user.id,pseudo:p.value.trim(),bio:b.value.trim()});check(error);status('Profil enregistré.');});};
}
document.querySelectorAll('[data-tab]').forEach(btn=>btn.onclick=()=>act(async()=>{if(btn.dataset.tab==='profile')await profile();else $('view').textContent='Fonctionnalité en préparation.';}));
db.auth.onAuthStateChange((event,session)=>{user=session?.user||null;$('auth').hidden=!!user;$('app').hidden=!user;if(user)setTimeout(()=>act(profile),0);else $('view').replaceChildren();});
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
