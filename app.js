
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const db = createClient(
  'https://krfphvzbgjkhvwwkmuol.supabase.co',
  'sb_publishable_xv1mdxb9FR_0ldAMCFudiQ__uibMltd'
);


const WC_I18N={"Connexion requise":"Sign in required","Photo refusée":"Photo rejected","Une erreur est survenue.":"Something went wrong.","Vous devez avoir 18 ans ou plus.":"You must be 18 or older.","Email valide et 12 caractères minimum requis.":"A valid email and at least 12 password characters are required.","Vérifiez votre boîte mail.":"Check your inbox.","Connexion réussie.":"Signed in successfully.","Mot de passe oublié":"Forgot password","Saisissez votre adresse email.":"Enter your email address.","Trop de demandes. Réessayez plus tard.":"Too many requests. Try again later.","Service email indisponible.":"Email service unavailable.","Si votre compte existe, vous recevrez un lien de réinitialisation.":"If your account exists, you will receive a reset link.","Nouveau mot de passe":"New password","12 caractères minimum":"At least 12 characters","Confirmez le mot de passe":"Confirm password","Enregistrer le nouveau mot de passe":"Save new password","Annuler":"Cancel","Les mots de passe doivent correspondre et contenir 12 caractères minimum.":"Passwords must match and contain at least 12 characters.","Mot de passe modifié. Reconnectez-vous.":"Password changed. Sign in again.","Déconnexion réussie.":"Signed out successfully.","⭐ Shérif VIP — Abonnement actif":"⭐ Sheriff VIP — Active subscription","🤠 Cowboy Premium — Abonnement actif":"🤠 Cowboy Premium — Active subscription","Membre gratuit":"Free member","Mon profil privé":"My private profile","Statut abonnement indisponible.":"Subscription status unavailable.","Chargement…":"Loading…","Pseudo":"Nickname","Âge (18 ans minimum)":"Age (18 or older)","Ville":"City","Département / État (State)":"Department / State","Genre":"Gender","Personne recherchée":"Looking for","Centres d’intérêt (séparés par des virgules)":"Interests (comma separated)","Style Country et Western":"Country and Western style","Relation recherchée":"Relationship goal","Présentation":"About me","Non renseigné":"Not specified","Choisir vos passions (ou compléter le texte)":"Choose your interests (or add your own)"," Rendre mon profil visible dans Découvrir":" Make my profile visible in Discover","Si vous activez cette option, votre pseudo, âge, ville, département et présentation seront visibles par les membres autorisés. Votre photo peut être consultée par les membres autorisés si votre profil est visible.":"If enabled, authorized members can see your nickname, age, city, region, bio and profile photo.","⭐ Mode invisible — Shérif VIP":"⭐ Invisible mode — Sheriff VIP","Masquez votre profil dans Découvrir et les recherches. Vos matchs existants restent accessibles. Ce réglage est indépendant de la visibilité classique.":"Hide your profile from Discover and search. Existing matches remain accessible. This setting is separate from standard visibility.","Vérification du statut…":"Checking status…","Voir les abonnements":"View plans","Actualiser le statut":"Refresh status","Fonctionnalité réservée aux abonnés Shérif VIP.":"Available to Sheriff VIP members only.","🔒 Mode invisible":"🔒 Invisible mode","Enregistrez votre profil avant d’activer le mode invisible.":"Save your profile before enabling invisible mode.","Mode invisible":"Invisible mode","Désactiver le mode invisible":"Disable invisible mode","Activer le mode invisible":"Enable invisible mode","Activé — votre profil est masqué dans les recherches.":"Enabled — your profile is hidden from search.","Désactivé — votre visibilité classique s’applique.":"Disabled — standard visibility applies.","Statut indisponible. Réessayez pour vérifier votre réglage.":"Status unavailable. Try again.","Réponse inattendue":"Unexpected response","Modification non confirmée. Vérifiez le statut du mode invisible ou réessayez.":"Change not confirmed. Check invisible mode status or try again.","Le masquage VIP prend fin lorsque votre abonnement VIP expire.":"VIP hiding ends when your VIP subscription expires.","Enregistrer mon profil":"Save my profile","Session expirée.":"Session expired.","Pseudo et âge valide obligatoires.":"A nickname and valid age are required.","Profil enregistré.":"Profile saved.","Ma photo de profil":"My profile photo","Ajouter / remplacer la photo":"Add / replace photo","Supprimer la photo":"Delete photo","Choisissez une image JPEG, PNG ou WebP de 5 Mo maximum.":"Choose a JPEG, PNG or WebP image up to 5 MB.","Photo enregistrée.":"Photo saved.","Photo supprimée.":"Photo deleted.","Chargement des abonnements…":"Loading subscriptions…","Impossible de vérifier votre abonnement.":"Unable to verify your subscription.","Abonnements en mode test.":"Subscriptions in test mode.","Mon abonnement":"My subscription","Fin de période actuelle : ":"Current period ends: ","⭐ Shérif VIP":"⭐ Sheriff VIP","📅 Résiliation programmée":"📅 Cancellation scheduled","Fin de votre abonnement : ":"Subscription ends: ","📅 Changement d’abonnement programmé":"📅 Plan change scheduled","Prochaine formule : ":"Next plan: ","Prochain tarif : ":"Next price: ","Vous conservez vos avantages actuels jusqu’au changement de formule.":"Your current benefits remain until the plan changes.","Abonnement en attente ou à vérifier.":"Subscription pending or needs verification.","Vous utilisez actuellement la formule gratuite.":"You are currently on the free plan.","⚙️ Gérer mon abonnement":"⚙️ Manage my subscription","Ouverture du portail Stripe…":"Opening Stripe portal…","Reconnectez-vous pour gérer votre abonnement.":"Sign in again to manage your subscription.","Impossible d’ouvrir le portail Stripe.":"Unable to open Stripe portal.","Portail Stripe indisponible.":"Stripe portal unavailable.","Adresse du portail invalide.":"Invalid portal URL.","✓ Abonnement actif":"✓ Active subscription","📅 Changement programmé":"📅 Change scheduled","Abonnement déjà enregistré":"Subscription already registered","Ouverture du paiement Stripe…":"Opening Stripe checkout…","Paiement indisponible.":"Payment unavailable.","Adresse de paiement invalide.":"Invalid checkout URL.","Actualiser mon abonnement":"Refresh my subscription","🔒 Paiement sécurisé par Stripe — Mode test.":"🔒 Secure Stripe payment — Test mode.","🤠 Aucune photo disponible":"🤠 No photo available","Photo de profil du membre":"Member profile photo","📍 Ma commune (France uniquement)":"📍 My city (France only)","Choisissez votre commune pour activer la recherche à proximité. Seul le centre de la commune est enregistré, sans GPS.":"Choose your city to enable nearby search. Only the city center is stored, without GPS.","Ville ou code postal":"City or postal code","Chercher une commune":"Find a city","Aucune commune trouvée.":"No city found.","Enregistrer cette commune sur votre profil ?":"Save this city to your profile?","Commune enregistrée.":"City saved.","🔎 Recherche avancée":"🔎 Advanced search","Âge minimum":"Minimum age","Âge maximum":"Maximum age","Tout le monde":"Everyone","Femme":"Woman","Homme":"Man","Autre":"Other","Tous les pays":"All countries","Trouver une commune":"Find a city","Saisissez au moins deux caractères pour trouver une commune.":"Enter at least two characters to find a city.","Recherche de commune indisponible.":"City search unavailable.","Rayon autour de ma commune":"Radius around my city","Trier par":"Sort by","Du plus proche au plus éloigné":"Nearest first","Nouveaux membres":"Newest members","Uniquement avec photo":"With photo only","🔒 Filtres avancés réservés aux abonnés Cowboy et Shérif VIP.":"🔒 Advanced filters require Cowboy or Sheriff VIP.","Réinitialiser":"Reset","Choisir ma commune":"Choose my city","Tranche d’âge invalide.":"Invalid age range.","Chargement des membres…":"Loading members…","Impossible de charger les membres.":"Unable to load members.","🔎 Filtres de recherche":"🔎 Search filters","🤠 Découvrir les membres":"🤠 Discover members","Chargement des likes…":"Loading likes…","Compteur indisponible":"Counter unavailable","★ Likes illimités Premium":"★ Unlimited Premium likes","♥ Qui m’aime ?":"♥ Who likes me?","Actualiser les profils":"Refresh profiles","Modifier ma visibilité":"Change my visibility","💘 Mes matchs":"💘 My matches","🚫 Mes blocages":"🚫 Blocked members","Aucun membre localisé dans ce rayon. Vérifiez votre commune et élargissez le rayon.":"No members found within this radius. Check your city and increase the radius.","Aucun profil correspondant. Modifiez les filtres.":"No matching profiles. Change the filters.","Vous avez parcouru tous les profils.":"You have viewed all profiles.","Revoir les profils":"Review profiles","Aucune présentation.":"No bio.","Retirer mon J’aime":"Unlike","J’aime actualisé.":"Like updated.","Voir le profil détaillé":"View full profile","Bloquer ce membre ?":"Block this member?","Le signalement est transmis à la modération, pas au membre signalé.":"Reports go to moderators, not to the reported member.","Motif du signalement":"Report reason","Choisir un motif":"Choose a reason","Informations complémentaires (facultatif)":"Additional details (optional)","Envoyer le signalement":"Submit report","Signalement envoyé":"Report sent","Merci. Votre signalement a été transmis à la modération.":"Thank you. Your report has been sent to moderation.","Signalement enregistré.":"Report saved.","Chargement des matchs…":"Loading matches…","Découvrir":"Discover","Aucun match pour le moment.":"No matches yet.","Membre compatible":"Compatible member","Présence inconnue":"Presence unknown","Chargement du dernier message…":"Loading latest message…","💬 Envoyer un message":"💬 Send a message","Aperçu indisponible":"Preview unavailable","Aucun message":"No messages","Chargement de la conversation…":"Loading conversation…","Connexion au temps réel…":"Connecting to live chat…"," est en train d’écrire…":" is typing…","Votre message":"Your message","● Messagerie en temps réel":"● Live messaging","Actualisation de secours toutes les 3 secondes":"Fallback refresh every 3 seconds","Aucun message. Lancez la conversation !":"No messages. Start the conversation!"," · ✓ Envoyé":" · ✓ Sent"," · ✓✓ Lu":" · ✓✓ Read","Actualisation impossible. Nouvelle tentative automatique.":"Unable to refresh. Retrying automatically.","Retour aux matchs":"Back to matches","🚩 Signaler ce membre":"🚩 Report this member","Membres bloqués":"Blocked members","Aucun membre bloqué.":"No blocked members.","Débloquer":"Unblock","Accès administrateur refusé.":"Administrator access denied.","Motif obligatoire":"Reason required","Motif de suspension":"Suspension reason","Vérification des droits administrateur…":"Checking administrator permissions…","Gestion des membres":"Manage members","Ville non renseignée":"City not specified","Votre compte administrateur":"Your administrator account","Non suspendu":"Not suspended","Suspension annulée.":"Suspension cancelled.","Compte suspendu.":"Account suspended.","✓ Profil vérifié":"✓ Verified profile","Profil non vérifié":"Unverified profile","Retirer la certification":"Remove verification","Certifier le profil":"Verify profile","Retirer le badge ?":"Remove badge?","Confirmer que ce profil a été contrôlé ?":"Confirm this profile was checked?","Action annulée.":"Action cancelled.","Certification retirée.":"Verification removed.","Profil certifié.":"Profile verified.","Comptes suspendus":"Suspended accounts","Aucun compte suspendu.":"No suspended accounts.","Réactiver":"Reactivate","Réactivation annulée.":"Reactivation cancelled.","Aucune suspension supprimée.":"No suspension removed.","Compte réactivé avec succès.":"Account reactivated successfully.","Aucun signalement.":"No reports.","Traité":"Reviewed","À traiter":"Pending review","Marquer comme traité":"Mark reviewed","Signalement non modifié.":"Report unchanged.","Aucun abonnement.":"No subscriptions.","Administration indisponible.":"Administration unavailable.","Chargement des notifications…":"Loading notifications…","Notifications indisponibles.":"Notifications unavailable.","🔔 Mes notifications":"🔔 My notifications","Tout marquer comme lu":"Mark all as read","❤️ Un membre apprécie votre profil.":"❤️ A member likes your profile.","💘 Vous avez un nouveau match !":"💘 You have a new match!","💬 Vous avez reçu un message.":"💬 You received a message.","Aucune notification pour le moment.":"No notifications yet.","Nouvelle notification":"New notification","Marquer comme lue":"Mark as read","Voir mes likes reçus":"View received likes","Découvrir avec Premium":"Discover with Premium","Ouvrir mes matchs":"Open my matches","Fonctionnalité en préparation.":"Feature in development.","Retour du paiement. Actualisez votre abonnement si nécessaire.":"Returned from checkout. Refresh your subscription if needed.","Paiement annulé.":"Payment cancelled.","Présence indisponible":"Presence unavailable","● En ligne":"● Online","● Hors ligne":"● Offline","★ SHÉRIF VIP":"★ SHERIFF VIP"," ✓ Vérifié par la modération":" ✓ Verified by moderation","Ma galerie (6 photos supplémentaires)":"My gallery (6 extra photos)","Galerie privée":"Private gallery","Visible par vos matchs autorisés. JPEG, PNG ou WebP, 5 Mo maximum.":"Visible to authorized matches. JPEG, PNG or WebP, up to 5 MB.","Photos accessibles uniquement aux matchs autorisés.":"Photos accessible only to authorized matches.","Agrandir la photo ":"Enlarge photo ","Photo indisponible":"Photo unavailable","Vérification de la session…":"Checking session…","Suppression de la photo : vérification…":"Deleting photo: checking…","Session ou galerie inactive. Ouvrez de nouveau votre profil.":"Session or gallery inactive. Open your profile again.","Confirmer la suppression":"Confirm deletion","Supprimer cette photo ?":"Delete this photo?","Cette photo sera définitivement supprimée de votre galerie.":"This photo will be permanently deleted from your gallery.","Suppression annulée.":"Deletion cancelled.","Session expirée ou profil fermé. Reconnectez-vous.":"Session expired or profile closed. Sign in again.","Suppression du fichier…":"Deleting file…","Photo supprimée avec succès.":"Photo deleted successfully.","Échec de la suppression.":"Deletion failed.","Aucune photo supplémentaire accessible.":"No additional photos available.","Chargement du profil…":"Loading profile…","Profil détaillé indisponible selon les autorisations.":"Full profile unavailable due to permissions."," % de compatibilité":"% compatibility","Score indicatif fondé sur les préférences déclarées.":"Indicative score based on stated preferences.","Compatibilité non calculée : préférences incomplètes ou score indisponible.":"Compatibility unavailable: incomplete preferences or score unavailable.","Galerie supplémentaire réservée aux matchs.":"Extra gallery available to matches only.","Découvrez les personnes qui aiment votre profil avec Cowboy ou Shérif VIP.":"See who likes your profile with Cowboy or Sheriff VIP.","Aucun like reçu disponible.":"No received likes available.","Voir le profil":"View profile","Retour":"Back","← Retour":"← Back","Ajouter":"Add","Supprimer":"Delete","Fermer ×":"Close ×","Membre":"Member","Rechercher":"Search","Recherche…":"Searching…","Enregistrement…":"Saving…","Matchs":"Matches","🔔 Notifications":"🔔 Notifications","Déconnexion":"Sign out","Administration":"Admin","Profil":"Profile","Passions":"Interests","Envoyer":"Send","Bloquer":"Block","Signaler":"Report","Passer":"Skip","J’aime":"Like","💘 C’est un match !":"💘 It's a match!","États-Unis : saisissez votre ville et votre État dans les champs suivants. La localisation automatique est actuellement réservée à la France.":"United States: enter your city and state below. Automatic location is currently available in France only.","Le rayon est calculé autour de votre commune enregistrée. Les distances sont approximatives. La recherche par code postal sélectionne la commune, pas un quartier précis.":"The radius uses your saved city. Distances are approximate. Postal code search selects the city, not a specific neighborhood."};
Object.assign(WC_I18N,{"Date : ":"Date: ","9,99 € / mois":"€9.99 / month","19,99 € / mois":"€19.99 / month","✕ Passer":"✕ Skip","🚫 Bloquer":"🚫 Block","🚩 Signaler":"🚩 Report","🚩 Signaler ":"🚩 Report ","Envoyer ➤":"Send ➤","🛡️ Administration":"🛡️ Admin","Confirmer":"Confirm","🛡️ Administration Western Crush":"🛡️ Western Crush administration","Actualiser":"Refresh","Suspendre":"Suspend","Signalements":"Reports","Abonnements — consultation uniquement":"Subscriptions — read only","Country traditionnel":"Traditional Country","Ranch et équitation":"Ranch and horseback riding","Western et Far West":"Western and Wild West","Tous les styles":"All styles","Relation sérieuse":"Serious relationship","Amitié":"Friendship","Partenaire de danse":"Dance partner","Rencontres":"Dating"});
let wcLang='fr',wcUnit='km';
try{wcLang=localStorage.getItem('wc-language')||(navigator.language?.startsWith('en')?'en':'fr');wcUnit=localStorage.getItem('wc-unit')||(wcLang==='en'?'mi':'km');}catch{}
const tr=s=>wcLang==='en'?(WC_I18N[s]??s):s;
const wcLocale=()=>wcLang==='en'?'en-US':'fr-FR';
const wcDistance=n=>Math.round(wcUnit==='mi'?n/1.609344:n);
function wcSetPreferences(lang,unit){wcLang=lang==='en'?'en':'fr';wcUnit=unit==='mi'?'mi':'km';try{localStorage.setItem('wc-language',wcLang);localStorage.setItem('wc-unit',wcUnit);}catch{}document.documentElement.lang=wcLang;}

const $ = id => document.getElementById(id);
const site = 'https://western-crush.github.io/Western-Crush/';
wcSetPreferences(wcLang,wcUnit);
const langPicker=$('wc-language');if(langPicker){langPicker.value=wcLang;langPicker.onchange=()=>act(async()=>{const next=langPicker.value==='en'?'en':'fr';if(user){const result=await db.from('profiles').update({preferred_language:next}).eq('id',user.id);check(result.error);}wcSetPreferences(next,wcUnit);location.reload();});}

const status = m => $('status').textContent = m;

let user = null, revision = 0;
let recovering = false;

function check(e) {
  if (e) throw e;
}

async function uploadValidatedPhoto(bucket, file) {
  const {data,error}=await db.auth.getSession();
  check(error);
  if(!data.session) throw Error(tr('Connexion requise'));
  const response=await fetch('https://krfphvzbgjkhvwwkmuol.supabase.co/functions/v1/validate-photo?bucket='+encodeURIComponent(bucket),{method:'POST',headers:{Authorization:'Bearer '+data.session.access_token,'Content-Type':file.type},body:file});
  const result=await response.json();
  if(!response.ok||!result.valid||typeof result.path!=='string') throw Error(result.error||tr('Photo refusée'));
  return result.path;
}

async function act(fn) {
  try {
    await fn();
  } catch (e) {
    status(e.message || tr('Une erreur est survenue.'));
  }
}

// V18.5: interface safeguards; Supabase Auth remains the authority.
const authTr=(fr,en)=>wcLang==='en'?en:fr;
// Public Turnstile site key only. Empty until a real widget is configured.
// The secret key must be configured exclusively in Supabase Auth.
const WC_TURNSTILE_SITE_KEY='0x4AAAAAAGSRmUUaaSuyxpdE';
let wcCaptchaToken='',wcCaptchaWidget=null;
function initAuthCaptcha(){
 if(!WC_TURNSTILE_SITE_KEY)return;
 const holder=element('div');holder.id='wc-auth-captcha';
 $('login').before(holder);
 const info=element('p',authTr('Vérification anti-robot requise.','Bot verification required.'));holder.before(info);
 const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';script.async=true;
 script.onload=()=>{
 try{wcCaptchaWidget=window.turnstile.render(holder,{sitekey:WC_TURNSTILE_SITE_KEY,language:wcLang==='en'?'en':'fr',callback:token=>{wcCaptchaToken=token;info.textContent=authTr('Vérification effectuée.','Verification complete.');},'expired-callback':()=>{wcCaptchaToken='';info.textContent=authTr('Vérification expirée.','Verification expired.');},'error-callback':()=>{wcCaptchaToken='';info.textContent=authTr('Vérification indisponible.','Verification unavailable.');}});}catch{info.textContent=authTr('Vérification indisponible.','Verification unavailable.');}
 };
 script.onerror=()=>{info.textContent=authTr('Vérification indisponible.','Verification unavailable.');};document.head.append(script);
}
function captchaOptions(){
 if(!WC_TURNSTILE_SITE_KEY)return {};
 if(!wcCaptchaToken)throw Error(authTr('Termine la vérification anti-robot.','Complete the bot verification.'));
 return {captchaToken:wcCaptchaToken};
}
function resetAuthCaptcha(){
 wcCaptchaToken='';
 if(wcCaptchaWidget!==null){try{window.turnstile.reset(wcCaptchaWidget);}catch{}}
}
let authBusy=false;
let authTimes={login:0,register:0,recovery:0};
let failedLogins=0;
const authWait=()=>Error(authTr('Patiente quelques instants avant de réessayer.','Wait a moment before trying again.'));
function authDeadline(kind){
 let saved=0;try{saved=Number(sessionStorage.getItem('wc-auth-'+kind))||0;}catch{}
 return Math.max(authTimes[kind]||0,Math.min(saved,Date.now()+300000));
}
function authDelay(kind,ms){
 authTimes[kind]=Date.now()+ms;
 try{sessionStorage.setItem('wc-auth-'+kind,String(authTimes[kind]));}catch{}
}
async function guardedAuth(kind,fn){
 if(authBusy||Date.now()<authDeadline(kind))throw authWait();
 authBusy=true;
 const buttons=[$('login'),$('register'),forgot];
 for(const b of buttons)b.disabled=true;
 try{await fn();}finally{resetAuthCaptcha();authBusy=false;for(const b of buttons)b.disabled=false;}
}
function validAuthEmail(){
 const e=$('email');if(!e.value.trim()||!e.validity.valid)throw Error(tr('Saisissez votre adresse email.'));
 return e.value.trim();
}
function authErrorMessage(error){
 if(error?.status===429)return tr('Trop de demandes. Réessayez plus tard.');
 if(error?.status>=500)return authTr('Service de connexion indisponible.','Authentication service unavailable.');
 return authTr('Impossible de poursuivre. Vérifie tes informations ou réessaie plus tard.','Unable to continue. Check your details or try again later.');
}
$('register').onclick = () => act(async () => {
 if(!$('wc-beta-rules')?.checked)throw Error(authTr('Veuillez lire et reconnaître les règles provisoires de la bêta.','Please read and acknowledge the draft beta rules.'));
 if(!$('adult').checked)throw Error(tr('Vous devez avoir 18 ans ou plus.'));
 const email=validAuthEmail(),password=$('password').value;
 if(password.length<12)throw Error(tr('Email valide et 12 caractères minimum requis.'));
 await guardedAuth('register',async()=>{
 const captcha=captchaOptions();authDelay('register',60000);
 const {error}=await db.auth.signUp({email,password,options:{emailRedirectTo:site,data:{adult_declared:true},...captcha}});
 $('password').value='';
 if(error)throw Error(authErrorMessage(error));
 status(tr('Vérifiez votre boîte mail.'));
 });
});
$('login').onclick=()=>act(async()=>{
 const email=validAuthEmail(),password=$('password').value;
 if(!password)throw Error(authTr('Saisis ton mot de passe.','Enter your password.'));
 await guardedAuth('login',async()=>{
 const captcha=captchaOptions();authDelay('login',2000);
 const {error}=await db.auth.signInWithPassword({email,password,options:captcha});
 $('password').value='';
 if(error){
 failedLogins++;
 authDelay('login',error.status===429?60000:Math.min(30000,2000*2**Math.min(failedLogins,4)));
 throw Error(authErrorMessage(error));
 }
 failedLogins=0;authDelay('login',0);
 status(tr('Connexion réussie.'));
 });
});
const forgot=document.createElement('button');
forgot.type='button';forgot.textContent=tr('Mot de passe oublié');
$('login').after(forgot);
forgot.onclick=()=>act(async()=>{
 const email=validAuthEmail();
 await guardedAuth('recovery',async()=>{
 const captcha=captchaOptions();authDelay('recovery',60000);
 const {error}=await db.auth.resetPasswordForEmail(email,{redirectTo:site,...captcha});
 if(error?.status===429||error?.status>=500)throw Error(authErrorMessage(error));
 status(tr('Si votre compte existe, vous recevrez un lien de réinitialisation.'));
 });
});
initAuthCaptcha();
function showRecovery(){
 const auth=$('auth'), app=$('app');
 auth.hidden=true;app.hidden=true;
 if($('wc-recovery'))return;
 const form=document.createElement('form');form.id='wc-recovery';
 const title=element('h2',tr('Nouveau mot de passe'));
 const p=document.createElement('input');p.type='password';p.autocomplete='new-password';p.minLength=12;p.required=true;p.placeholder=tr('12 caractères minimum');
 const q=p.cloneNode();q.placeholder=tr('Confirmez le mot de passe');
 const save=element('button',tr('Enregistrer le nouveau mot de passe'));save.type='submit';
 const cancel=element('button',tr('Annuler'));cancel.type='button';
 cancel.onclick=()=>act(async()=>{check((await db.auth.signOut()).error);recovering=false;form.remove();auth.hidden=false;});
 form.append(title,p,q,save,cancel);auth.after(form);
 form.onsubmit=e=>{e.preventDefault();void act(async()=>{
 if(p.value.length<12||p.value!==q.value)throw Error(tr('Les mots de passe doivent correspondre et contenir 12 caractères minimum.'));
 save.disabled=true;
 try{
 const initial=await db.auth.getUser();check(initial.error);const recoveryUid=initial.data.user?.id;
 if(!recovering||!recoveryUid||!form.isConnected)throw Error(authTr('Lien de récupération invalide.','Invalid recovery link.'));
 const factors=await db.auth.mfa.listFactors();check(factors.error);
 const verified=(factors.data.totp||[]).filter(x=>x.status==='verified');
 const aal=await db.auth.mfa.getAuthenticatorAssuranceLevel();check(aal.error);
 if(aal.data.nextLevel==='aal2'&&aal.data.currentLevel!=='aal2'){
 if(!verified.length)throw Error(authTr('Second facteur indisponible. Contacte le support.','Second factor unavailable. Contact support.'));
 let chosen=verified[0];
 if(verified.length>1){
 const selection=prompt(authTr('Choisis ton appareil : ','Choose your device: ')+verified.map((x,i)=>(i+1)+'. '+(x.friendly_name||'Authenticator')).join(' / '));
 if(selection===null)return;
 const ix=Number(selection)-1;if(!Number.isInteger(ix)||!verified[ix])throw Error(authTr('Appareil invalide.','Invalid device.'));
 chosen=verified[ix];
 }
 const code=prompt(authTr('Code Authenticator à six chiffres :','Six-digit authenticator code:'));
 if(code===null)return;
 if(!/^\d{6}$/.test(code.trim()))throw Error(authTr('Code invalide.','Invalid code.'));
 const ch=await db.auth.mfa.challenge({factorId:chosen.id});check(ch.error);
 const v=await db.auth.mfa.verify({factorId:chosen.id,challengeId:ch.data.id,code:code.trim()});
 if(v.error)throw Error(authTr('Code refusé. Réessaie avec un nouveau code.','Code rejected. Try a new code.'));
 }
 const now=await db.auth.getUser();check(now.error);
 if(now.data.user?.id!==recoveryUid||!recovering||!form.isConnected)throw Error(authTr('Session expirée.','Session expired.'));
 const finalAal=await db.auth.mfa.getAuthenticatorAssuranceLevel();check(finalAal.error);
 if(finalAal.data.nextLevel==='aal2'&&finalAal.data.currentLevel!=='aal2')throw Error(authTr('Second facteur requis.','Second factor required.'));
 const changed=await db.auth.updateUser({password:p.value});if(changed.error)throw Error(authErrorMessage(changed.error));
 p.value=q.value='';
 check((await db.auth.signOut({scope:'global'})).error);
 recovering=false;form.remove();auth.hidden=false;status(tr('Mot de passe modifié. Reconnectez-vous.'));
 }finally{save.disabled=false;}
 });};
}

$('logout').onclick = () => act(async () => {
  const { error } = await db.auth.signOut();
  check(error);
  status(tr('Déconnexion réussie.'));
});


async function recordLegalEvent(eventType){
  const uid=user?.id;if(!uid)throw Error(wcLang==='en'?'Sign in required':'Connexion obligatoire');
  const result=await db.from('beta_legal_events').insert({user_id:uid,document_version:'beta-0.1',event_type:eventType,language:wcLang});
  check(result.error);
}
async function legalSettings(){
 const uid=user?.id,rev=++revision,view=$('view');if(!uid)return;
 const t=(fr,en)=>wcLang==='en'?en:fr;
 view.replaceChildren(element('h2',t('Confidentialité et droits','Privacy and rights')));
 const link=element('a',t('Documents juridiques provisoires','Draft legal documents'));link.href='legal.html';link.target='_blank';link.rel='noopener';view.append(link);
 const [events,requests]=await Promise.all([db.from('beta_legal_events').select('event_type,recorded_at').eq('user_id',uid).eq('event_type','beta_terms_acknowledged').limit(1),db.from('privacy_requests').select('id,kind,status,created_at').eq('user_id',uid).order('created_at',{ascending:false}).limit(50)]);
 if(user?.id!==uid||rev!==revision)return;check(events.error);check(requests.error);
 const panel=element('article');
 panel.append(element('p',t('Documents provisoires.','Draft documents.')));
 if(!events.data?.length)panel.append(actionButton(t('Confirmer la lecture des règles bêta','Acknowledge beta rules'),async()=>{await recordLegalEvent('beta_terms_acknowledged');if(user?.id===uid&&rev===revision)await legalSettings();}));
 else panel.append(element('p',t('Lecture enregistrée.','Acknowledgement recorded.')));
 async function request(kind){const r=await db.from('privacy_requests').insert({user_id:uid,kind,language:wcLang});if(r.error?.code!=='23505')check(r.error);}
 panel.append(element('h3',t('Préférences sensibles','Sensitive preferences')),element('p',t('Les nouvelles préférences sensibles sont désactivées pendant la bêta. Vous pouvez effacer votre champ de préférence et demander un examen des autres données.','New sensitive preferences are disabled during beta. You can clear your preference field and request review of other data.')));
 panel.append(actionButton(t('Effacer ma préférence et retirer mon accord','Clear my preference and withdraw consent'),async()=>{if(!confirm(t('Effacer le champ de préférence enregistré ?','Clear the saved preference field?')))return;check((await db.rpc('withdraw_beta_sensitive_preferences')).error);await recordLegalEvent('sensitive_withdrawn');await request('withdrawal');if(user?.id===uid&&rev===revision)await legalSettings();}));
 panel.append(element('h3',t('Mes données','My data')),element('p',t('Export JSON partiel : les fichiers photo et certaines données de tiers nécessitent une demande complémentaire.','Partial JSON export: photo files and some third-party data require a separate request.')));
 panel.append(actionButton(t('Télécharger mes données (JSON)','Download my data (JSON)'),async()=>{const r=await db.functions.invoke('export-my-data',{body:{}});check(r.error);if(user?.id!==uid||rev!==revision)return;const url=URL.createObjectURL(new Blob([JSON.stringify(r.data,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='western-crush-my-data.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}));
 for(const [kind,fr,en] of [['access','Demander un export complet','Request full data export'],['erasure','Demander la suppression de mon compte','Request account deletion']])panel.append(actionButton(t(fr,en),async()=>{if(!confirm(t('Enregistrer cette demande pour examen ? Aucun compte ne sera automatiquement supprimé.','Submit for review? No account will be automatically deleted.')))return;await request(kind);if(user?.id===uid&&rev===revision)await legalSettings();}));
 panel.append(element('h3',t('Suivi des demandes','Request history')));
 const kinds={access:t('Accès','Access'),erasure:t('Suppression','Erasure'),withdrawal:t('Retrait','Withdrawal')},states={pending:t('En attente','Pending'),reviewing:t('En cours','Reviewing'),completed:t('Traitée','Completed'),rejected:t('Refusée','Rejected')};
 for(const r of requests.data||[])panel.append(element('p',kinds[r.kind]+' — '+states[r.status]+' — '+new Date(r.created_at).toLocaleString(wcLocale())));
 view.append(panel);
}
const legalButton=$('wc-privacy');if(legalButton)legalButton.onclick=()=>act(legalSettings);

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
    .select('plan,status,current_period_end,next_plan,next_plan_at,cancel_at_period_end,cancel_at,currency')
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
        ? tr('⭐ Shérif VIP — Abonnement actif')
        : tr('🤠 Cowboy Premium — Abonnement actif')
      : tr('Membre gratuit')
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
  view.textContent = tr('Chargement…');

  const { data, error } = await db
    .from('profiles')
    .select('pseudo,bio,age,city,department,gender,looking_for,interests,western_style,relationship_goal,photo_url,discoverable,country_code,preferred_language,distance_unit')
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
    element('h2', tr('Mon profil privé'))
  );

  view.append(
    subscriptionError
      ? element('p', tr('Statut abonnement indisponible.'))
      : subscriptionBadge(subscription)
  );

  const form = element('form');
  const fields = {};

  for(const [key,label,options,fallback] of [
    ['country_code','Pays / Country',[['FR','France'],['US','United States']], 'FR'],
    ['preferred_language','Langue préférée / Preferred language',[['fr','Français'],['en','English']], 'fr'],
    ['distance_unit','Unité de distance / Distance unit',[['km','Kilomètres'],['mi','Miles']], 'km']
  ]){
    const l=element('label',label), f=element('select');
    for(const [value,name] of options) f.append(new Option(name,value));
    f.value=(key==='preferred_language'?wcLang:key==='distance_unit'?wcUnit:data?.[key]) || fallback;if(key==='country_code')f.id='wc-profile-country'; fields[key]=f; l.append(f); form.append(l);
  }
  form.append(element('small',wcLang==='en'?'US city lookup is available for 42 pilot locations below.':'La recherche américaine est disponible pour 42 villes pilotes ci-dessous.'));
  for (const [key, label, max] of [
    ['pseudo', tr('Pseudo'), 60],
    ['age', tr('Âge (18 ans minimum)'), 3],
    ['city', tr('Ville'), 100],
    ['department', tr('Département / État (State)'), 100],
    ['gender', tr('Genre'), 80],
    ['looking_for', tr('Personne recherchée'), 100],
    ['interests', tr('Centres d’intérêt (séparés par des virgules)'), 500],
    ['western_style', tr('Style Country et Western'), 100],
    ['relationship_goal', tr('Relation recherchée'), 100],
    ['bio', tr('Présentation'), 1000]
  ]) {
    const l = element('label', label);

    const f = element(
      key === 'western_style' || key === 'relationship_goal' ? 'select' : key === 'bio' || key === 'interests' ? 'textarea' : 'input'
    );

    if (f.tagName === 'SELECT') {
      const options = key === 'western_style' ? ['Country traditionnel','Country Line Dance','Ranch et équitation','Country Rock','Western et Far West','Tous les styles'] : ['Relation sérieuse','Amitié','Partenaire de danse','Rencontres'];
      const existing = data?.[key];
      if(existing && !options.includes(existing)) options.push(existing);
      f.append(new Option(tr('Non renseigné'),''), ...options.map(v=>new Option(tr(v),v)));
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

    if(key==='looking_for'){f.readOnly=true;f.placeholder=wcLang==='en'?'Unavailable during beta':'Indisponible pendant la bêta';}
    fields[key] = f;
    l.append(f);
    form.append(l);
    if(key === 'interests') {
      const choices=element('fieldset');choices.className='wc-passions';choices.append(element('legend',tr('Choisir vos passions (ou compléter le texte)')));
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
  visibilityLabel.append(visibility, document.createTextNode(tr(' Rendre mon profil visible dans Découvrir')));
  form.append(visibilityLabel, element('p', tr('Si vous activez cette option, votre pseudo, âge, ville, département et présentation seront visibles par les membres autorisés. Votre photo peut être consultée par les membres autorisés si votre profil est visible.')));

  const privacy = element('article');
  privacy.className = 'wc-invisible';
  privacy.append(element('h3', tr('⭐ Mode invisible — Shérif VIP')),
    element('p', tr('Masquez votre profil dans Découvrir et les recherches. Vos matchs existants restent accessibles. Ce réglage est indépendant de la visibilité classique.')));
  const privacyState = element('p', tr('Vérification du statut…'));
  privacyState.setAttribute('role', 'status');
  const privacyButton = element('button', tr('Chargement…'));
  privacyButton.type = 'button';
  privacyButton.disabled = true;
  const privacyUpgrade = element('button', tr('Voir les abonnements'));
  privacyUpgrade.type = 'button';
  privacyUpgrade.hidden = true;
  privacyUpgrade.onclick = () => act(async () => {
    if (user?.id === uid && rev === revision) await premium();
  });
  const privacyRetry = element('button', tr('Actualiser le statut'));
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
    privacyState.textContent = tr('Vérification du statut…');
    try {
      const plan = await db.rpc('my_membership_plan');
      if (!privacyCurrent()) return;
      check(plan.error);
      if (plan.data !== 'vip') {
        privacyState.textContent = tr('Fonctionnalité réservée aux abonnés Shérif VIP.');
        privacyButton.textContent = tr('🔒 Mode invisible');
        privacyUpgrade.hidden = false;
        return;
      }
      const result = await db.rpc('get_my_invisible_mode');
      if (!privacyCurrent()) return;
      check(result.error);
      if (typeof result.data !== 'boolean' || !profileExists) {
        privacyState.textContent = tr('Enregistrez votre profil avant d’activer le mode invisible.');
        privacyButton.textContent = tr('Mode invisible');
        return;
      }
      privacyEnabled = result.data === true;
      privacyReady = true;
      privacyButton.textContent = privacyEnabled ? tr('Désactiver le mode invisible') : tr('Activer le mode invisible');
      privacyButton.setAttribute('aria-pressed', String(privacyEnabled));
      privacyState.textContent = privacyEnabled
        ? tr('Activé — votre profil est masqué dans les recherches.')
        : tr('Désactivé — votre visibilité classique s’applique.');
    } catch {
      if (!privacyCurrent()) return;
      privacyState.textContent = tr('Statut indisponible. Réessayez pour vérifier votre réglage.');
      privacyButton.textContent = tr('Mode invisible');
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
    privacyState.textContent = tr('Enregistrement…');
    let failed = false;
    try {
      const result = await db.rpc('set_invisible_mode', { enabled: !privacyEnabled });
      if (!privacyCurrent()) return;
      check(result.error);
      if (typeof result.data !== 'boolean') throw Error(tr('Réponse inattendue'));
    } catch {
      failed = true;
    } finally {
      if (privacyCurrent()) {
        privacyBusy = false;
        await refreshPrivacy();
        if (failed && privacyCurrent()) status(tr('Modification non confirmée. Vérifiez le statut du mode invisible ou réessayez.'));
      }
    }
  };
  privacy.append(privacyState, privacyButton, privacyUpgrade, privacyRetry,
    element('small', tr('Le masquage VIP prend fin lorsque votre abonnement VIP expire.')));

  const save = element('button', tr('Enregistrer mon profil'));
  form.append(save);
  view.append(form, privacy, locationForm(uid, rev));
  void refreshPrivacy();

  form.onsubmit = e => {
    e.preventDefault();

    act(async () => {
      save.disabled = true;

      try {
        if (user?.id !== uid)
          throw Error(tr('Session expirée.'));

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
          throw Error(tr('Pseudo et âge valide obligatoires.'));

        const payload = { ...values, discoverable: visibility.checked };
        const result = profileExists
          ? await db.from('profiles').update(payload).eq('id', uid).select('id').single()
          : await db.from('profiles').insert({ id: uid, ...payload }).select('id').single();

        check(result.error);
        profileExists = true;
        const languageChanged=wcLang!==values.preferred_language;
        wcSetPreferences(values.preferred_language,values.distance_unit);
        if(languageChanged){location.reload();return;}
        if($('wc-language')) $('wc-language').value=wcLang;
        status(tr('Profil enregistré.'));
        if (privacyCurrent() && !privacyBusy) void refreshPrivacy();

      } finally {
        save.disabled = false;
      }
    });
  };

  // PHOTOS

  let path = data?.photo_url || null;

  const photos = element('div');
  photos.append(element('h2', tr('Ma photo de profil')));

  const img = element('img');
  img.alt = tr('Ma photo de profil');
  img.hidden = true;
  photos.append(img);

  const file = element('input');
  file.type = 'file';
  file.accept = 'image/jpeg,image/png,image/webp';
  photos.append(file);

  const upload = element('button', tr('Ajouter / remplacer la photo'));
  const remove = element('button', tr('Supprimer la photo'));

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
        throw Error(tr('Session expirée.'));

      const f = file.files[0];

      if (!f ||
          !['image/jpeg','image/png','image/webp'].includes(f.type) ||
          f.size > 5 * 1024 * 1024)
        throw Error(tr('Choisissez une image JPEG, PNG ou WebP de 5 Mo maximum.'));

      const ext = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/webp': 'webp'
      }[f.type];

      const next = await uploadValidatedPhoto('profile-photos', f);

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
      status(tr('Photo enregistrée.'));

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
      status(tr('Photo supprimée.'));

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
  view.textContent = tr('Chargement des abonnements…');

  let subscriptions;

  try {
    subscriptions = await getSubscriptions(uid);
  } catch (error) {
    if (user?.id === uid && rev === revision) {
      view.textContent = tr('Impossible de vérifier votre abonnement.');
      throw error;
    }
    return;
  }

  if (user?.id !== uid || rev !== revision) return;

  const profileResult=await db.from('profiles').select('country_code').eq('id',uid).maybeSingle();
  if(user?.id!==uid || rev!==revision)return;
  check(profileResult.error);
  if(!profileResult.data){view.replaceChildren(element('p',wcLang==='en'?'Save your profile before subscribing.':'Enregistrez votre profil avant de vous abonner.'),actionButton(wcLang==='en'?'My profile':'Mon profil',profile));return;}
  const active = getActiveSubscription(subscriptions);
  const currency=active?.currency || subscriptions.find(x=>!['canceled','incomplete_expired'].includes(x.status))?.currency || (profileResult.data.country_code==='US'?'usd':'eur');
  const formatPrice=amount=>new Intl.NumberFormat(wcLocale(),{style:'currency',currency:currency.toUpperCase()}).format(amount/100)+(wcLang==='en'?' / month':' / mois');

  const pending = subscriptions.some(s =>
    !['canceled', 'incomplete_expired'].includes(s.status)
  );

  view.replaceChildren();

  view.append(
    element('h2', '★ Western Crush Premium'),
    element('p', tr('Abonnements en mode test.'))
  );

  const info = element('article');
  info.style.border = '2px solid #c28b48';
  info.style.background = '#302116';

  info.append(element('h2', tr('Mon abonnement')));

  if (active) {
    info.append(
      subscriptionBadge(active),
      element('p',
        tr('Fin de période actuelle : ') +
        new Date(active.current_period_end)
          .toLocaleDateString(wcLocale())
      )
    );
    const changeAt = new Date(active.next_plan_at || 0);
    const next = {
      cowboy: { name: '🤠 Cowboy Premium', price: formatPrice(999) },
      vip: { name: tr('⭐ Shérif VIP'), price: formatPrice(1999) }
    }[active.next_plan];
    const notice = element('div');
    notice.style.cssText = 'padding:12px;margin:12px 0;border:1px solid #b98645;border-radius:10px;background:#49321f;color:#f6c479';
    if (active.cancel_at_period_end || active.cancel_at) {
      const end = new Date(active.cancel_at || active.current_period_end);
      notice.append(element('strong', tr('📅 Résiliation programmée')),
        element('p', tr('Fin de votre abonnement : ') + end.toLocaleDateString(wcLocale())));
      info.append(notice);
    } else if (next && active.next_plan !== active.plan && changeAt.getTime() > Date.now()) {
      notice.append(
        element('strong', tr('📅 Changement d’abonnement programmé')),
        element('p', tr('Prochaine formule : ') + next.name),
        element('p', tr('Date : ') + changeAt.toLocaleDateString(wcLocale(), {day:'numeric',month:'long',year:'numeric'})),
        element('p', tr('Prochain tarif : ') + next.price),
        element('p', tr('Vous conservez vos avantages actuels jusqu’au changement de formule.'))
      );
      info.append(notice);
    }
  } else {
    info.append(element('p',
      pending
        ? tr('Abonnement en attente ou à vérifier.')
        : tr('Vous utilisez actuellement la formule gratuite.')
    ));
  }

  if (active || pending) {
    const manage = element('button', tr('⚙️ Gérer mon abonnement'));
    manage.onclick = () => act(async () => {
      if (manage.disabled || user?.id !== uid || rev !== revision) return;
      manage.disabled = true;
      let navigating = false;
      try {
        status(tr('Ouverture du portail Stripe…'));
        const { data: { session }, error: sessionError } = await db.auth.getSession();
        check(sessionError);
        if (!session?.access_token || session.user.id !== uid)
          throw Error(tr('Reconnectez-vous pour gérer votre abonnement.'));
        if (user?.id !== uid || rev !== revision) return;
        const { data, error } = await db.functions.invoke('create-portal-session', {
          body: {},
          headers: { Authorization: `Bearer ${session.access_token}` }
        });
        if (error) {
          let message;
          try { message = (await error.context.json()).error; } catch (_) {}
          throw Error(message || tr('Impossible d’ouvrir le portail Stripe.'));
        }
        if (!data?.url) throw Error(tr('Portail Stripe indisponible.'));
        const url = new URL(data.url);
        if (url.origin !== 'https://billing.stripe.com')
          throw Error(tr('Adresse du portail invalide.'));
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
      price: formatPrice(999)
    },
    {
      id: 'vip',
      name: tr('⭐ Shérif VIP'),
      price: formatPrice(1999)
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
        ? tr('✓ Abonnement actif')
        : scheduled
          ? tr('📅 Changement programmé')
          : active || pending
          ? tr('Abonnement déjà enregistré')
          : (wcLang==='en'?'Subscribe — Test':"S'abonner — Test")
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

        status(tr('Ouverture du paiement Stripe…'));

        const { data, error } =
          await db.functions.invoke('create-checkout', {
            body: { plan: plan.id }
          });

        check(error);

        if (!data?.url)
          throw Error(data?.error || tr('Paiement indisponible.'));

        const url = new URL(data.url);

        if (url.origin !== 'https://checkout.stripe.com')
          throw Error(tr('Adresse de paiement invalide.'));

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

  const refresh = element('button', tr('Actualiser mon abonnement'));
  refresh.onclick = () => act(premium);

  view.append(
    refresh,
    element('p', tr('🔒 Paiement sécurisé par Stripe — Mode test.'))
  );
}

// Photos des membres : la règle Storage contrôle chaque accès.
async function memberPhoto(card, target, uid, rev) {
  const placeholder = element('div', tr('🤠 Aucune photo disponible'));
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
    img.alt = tr('Photo de profil du membre');
    img.className = 'member-photo';
    img.referrerPolicy = 'no-referrer';
    img.onerror = () => { img.remove(); placeholder.hidden = false; };
    img.onload = () => { placeholder.hidden = true; };
    card.prepend(img);
    img.src = signed.data.signedUrl;
  } catch (_) { /* Le profil reste disponible sans photo. */ }
}

// Filtres propres à la session, sans stockage persistant.
const defaultFilters = () => ({wanted_country:'',min_age:18,max_age:90,wanted_gender:'',wanted_city:'',wanted_department:'',with_photo:false,radius_km:null,sort_by:'distance'});
let searchFilters = defaultFilters();
let nearbyMode = false, nearbyRadius = 50;
function locationForm(uid, rev) {
  const form=element('form'), en=wcLang==='en';
  form.append(element('h2',en?'📍 My city':'📍 Ma ville'),element('p',en?'Choose a city or ZIP/postal code. US coverage is currently a 42-city pilot. No GPS.':'Choisissez une ville ou un code postal / ZIP. Couverture américaine pilote de 42 villes. Sans GPS.'));
  const country=element('select');country.append(new Option('France','FR'),new Option('United States','US'));
  const profileCountry=document.querySelector('#wc-profile-country');country.value=profileCountry?.value==='US'?'US':'FR';
  const input=element('input');input.placeholder=en?'City or ZIP / postal code':'Ville ou code postal / ZIP';input.required=true;input.minLength=2;input.maxLength=100;
  const go=element('button',tr('Rechercher'));go.type='submit';
  const results=element('div');form.append(country,input,go,results);
  let request=0;country.onchange=()=>{request++;results.replaceChildren();};
  form.onsubmit=e=>{e.preventDefault();void act(async()=>{
    const n=++request,us=country.value==='US';results.textContent=tr('Recherche…');
    const r=await db.rpc(us?'search_us_locations':'search_communes',{search_text:input.value.trim()});
    if(user?.id!==uid||revision!==rev||n!==request)return;
    check(r.error);results.replaceChildren();
    if(!r.data?.length)results.append(element('p',tr('Aucune commune trouvée.')));
    for(const c of r.data||[])results.append(actionButton(us?c.city+' — '+c.state+' ('+c.zip+')':c.nom+' ('+c.code_postal+')',async()=>{
      if(user?.id!==uid||revision!==rev||n!==request)return;
      if(!confirm(tr('Enregistrer cette commune sur votre profil ?')))return;
      check((await db.rpc(us?'set_us_location':'set_member_location',us?{zip_code:c.zip}:{commune_code:c.code_insee})).error);
      if(user?.id===uid&&revision===rev){status(tr('Commune enregistrée.'));await profile();}
    }));
  });};return form;
}
function searchForm(paid) {
  const form = element('form'); form.className = 'search-filters';
  form.append(element('h2',tr('🔎 Recherche avancée')));
  const fields = {};
  function field(key,label,options) {
    const l=element('label',label), f=element(options?'select':'input');
    if(options) for(const [value,name] of options){const o=element('option',name);o.value=value;f.append(o);}
    f.value=searchFilters[key] ?? ''; fields[key]=f;l.append(f);form.append(l);return f;
  }
  for(const [k,label] of [['min_age',tr('Âge minimum')],['max_age',tr('Âge maximum')]]){
    const f=field(k,label);f.type='number';f.min=18;f.max=90;f.required=true;f.defaultValue=String(searchFilters[k] ?? defaultFilters()[k]);f.value=f.defaultValue;
  }
  field('wanted_gender',tr('Genre'),[['',tr('Tout le monde')],['femme',tr('Femme')],['homme',tr('Homme')],['autre',tr('Autre')]]);
  field('wanted_country','Pays / Country',[['',tr('Tous les pays')],['FR','France'],['US','United States']]);
  const city=field('wanted_city','Ville / City');city.maxLength=100;
  const lookup=element('input');lookup.placeholder=tr('Ville ou code postal');lookup.maxLength=100;
  const choices=element('div');let request=0;const uid=user?.id,rev=revision;
  form.append(lookup,actionButton(tr('Trouver une commune'),async()=>{
    const q=lookup.value.trim(); const n=++request; if(q.length<2){choices.textContent=tr('Saisissez au moins deux caractères pour trouver une commune.'); return;}
    choices.textContent=tr('Recherche…');
    const us=fields.wanted_country.value==='US';const r=await db.rpc(us?'search_us_locations':'search_communes',{search_text:q});
    if(user?.id!==uid||revision!==rev||n!==request)return;
    if(r.error){choices.textContent=r.error.message || tr('Recherche de commune indisponible.');return;}choices.replaceChildren();
    if(!r.data?.length)choices.textContent=tr('Aucune commune trouvée.');
    for(const c of r.data||[])choices.append(actionButton(us?c.city+' — '+c.state+' ('+c.zip+')':c.nom+' ('+c.code_postal+')',async()=>{
      if(user?.id!==uid||revision!==rev||n!==request)return;
      if(us){fields.wanted_country.value='US';city.value=c.city;fields.wanted_department.value=c.state;choices.replaceChildren();return;}fields.wanted_country.value='FR';city.value=c.nom;const code=String(c.code_insee);fields.wanted_department.value=code.startsWith('97')||code.startsWith('98')?code.slice(0,3):code.slice(0,2);choices.replaceChildren();
    }));
  }),choices);
  const dep=field('wanted_department',tr('Département / État (State)'));dep.maxLength=100;
  field('radius_km',tr('Rayon autour de ma commune'),[['',tr('Tous les pays')],...Array.from({length:20},(_,i)=>[String((i+1)*10),wcDistance((i+1)*10)+' '+wcUnit])]);
  field('sort_by',tr('Trier par'),[['distance',tr('Du plus proche au plus éloigné')],['newest',tr('Nouveaux membres')]]);
  const photo=field('with_photo',tr('Uniquement avec photo'));photo.type='checkbox';photo.checked=searchFilters.with_photo;
  if(!paid){fields.radius_km.value='';fields.sort_by.value='newest';photo.checked=false;for(const f of [fields.radius_km,fields.sort_by,photo])f.disabled=true;form.append(element('p',tr('🔒 Filtres avancés réservés aux abonnés Cowboy et Shérif VIP.')),actionButton(tr('Voir les abonnements'),premium));}
  const go=element('button',tr('Rechercher'));go.type='submit';form.append(go,actionButton(tr('Réinitialiser'),async()=>{searchFilters=defaultFilters();status('');await discover();}),actionButton(tr('Choisir ma commune'),profile),element('small',tr('Le rayon est calculé autour de votre commune enregistrée. Les distances sont approximatives. La recherche par code postal sélectionne la commune, pas un quartier précis.')));
  form.onsubmit=e=>{e.preventDefault();const min=Number(fields.min_age.value),max=Number(fields.max_age.value);if(!Number.isInteger(min)||!Number.isInteger(max)||min<18||max>90||min>max){status(tr('Tranche d’âge invalide.'));return;}searchFilters={wanted_country:fields.wanted_country.value,min_age:min,max_age:max,wanted_gender:fields.wanted_gender.value,wanted_city:city.value.trim(),wanted_department:dep.value.trim(),with_photo:photo.checked,radius_km:fields.radius_km.value?Number(fields.radius_km.value):null,sort_by:fields.sort_by.value};status('');void act(discover);};
  return form;
}

function showMatchCelebration() {
  document.querySelector('.wc-celebration')?.remove();
  const banner=element('div',tr('💘 C’est un match !')); banner.className='wc-celebration'; banner.setAttribute('role','status'); document.body.append(banner); setTimeout(()=>banner.remove(),3000);
}
// DECOUVERTE DES MEMBRES
async function discover() {
  const uid = user?.id;
  const rev = ++revision;
  if (!uid) return;
  const view = $('view');
  view.textContent = tr('Chargement des membres…');
  const membership = await db.rpc('my_membership_plan');
  if(user?.id!==uid || rev!==revision)return;
  const paid = !membership.error && ['cowboy','vip'].includes(membership.data);
  if(!paid)searchFilters={...searchFilters,radius_km:null,with_photo:false,sort_by:'newest'};
  const { data, error } = await db.rpc('search_members_international', searchFilters);
  if (user?.id !== uid || rev !== revision) return;
  if (error) {
    view.textContent = tr('Impossible de charger les membres.');
    check(error);
  }
  const filters = element('details'); filters.className = 'wc-filters'; filters.open = false; filters.append(element('summary',tr('🔎 Filtres de recherche')), searchForm(paid));
  view.replaceChildren(element('h2', tr('🤠 Découvrir les membres')), filters);
  const quota = element('p',tr('Chargement des likes…'));
  view.prepend(quota);
  async function refreshQuota(){ const r=await db.rpc('my_remaining_likes'); if(user?.id===uid && revision===rev) quota.textContent=r.error?tr('Compteur indisponible'):r.data===-1?tr('★ Likes illimités Premium'):`${r.data} / 10 ${wcLang==='en'?'likes left today':'likes restants aujourd’hui'}`; }
  void refreshQuota();
  view.append(actionButton(tr('♥ Qui m’aime ?'), receivedLikes));
  const refresh = element('button', tr('Actualiser les profils'));
  refresh.onclick = () => act(discover);
  const settings = element('button', tr('Modifier ma visibilité'));
  settings.onclick = () => act(profile);
  view.append(refresh, settings, actionButton(tr('💘 Mes matchs'), matches), actionButton(tr('🚫 Mes blocages'), blocked));
  const liked = await db.from('likes').select('receiver_id').eq('sender_id', uid);
  check(liked.error);
  if (user?.id !== uid || rev !== revision) return;
  const ownLikes = new Set(liked.data.map(x => x.receiver_id));
  if (!data?.length) {
    view.append(element('p', searchFilters.radius_km !== null ? tr('Aucun membre localisé dans ce rayon. Vérifiez votre commune et élargissez le rayon.') : tr('Aucun profil correspondant. Modifiez les filtres.')));
    return;
  }
  const deck = element('div'); deck.className = 'wc-deck';
  view.append(deck);
  let index = 0;
  function showCard() {
    if (user?.id !== uid || rev !== revision) return;
    deck.replaceChildren();
    if (index >= data.length) {
      deck.append(element('p',tr('Vous avez parcouru tous les profils.')), actionButton(tr('Revoir les profils'), discover));
      return;
    }
    const member = data[index];
    deck.append(element('small', `Profil ${index + 1} sur ${data.length}`));
    const card = element('article'); card.className = 'wc-profile-card';
    card.append(
      element('h2', `${member.pseudo || tr('Membre')} — ${member.age} ${wcLang==='en'?'years old':'ans'}`),
      element('p', [member.city, member.department, member.country_code === 'US' ? 'United States' : 'France'].filter(Boolean).join(' · ')),
      element('p', member.bio || tr('Aucune présentation.'))
    );
    if (Number.isFinite(member.distance)) card.append(element('p', member.distance === 0 ? (wcLang==='en'?'Within about ':'À moins de ') + wcDistance(5)+' '+wcUnit : (wcLang==='en'?'About ':'À environ ')+wcDistance(member.distance)+' '+wcUnit));
    const target = member.id;
    const actions = element('div'); actions.className = 'wc-card-actions';
    let busy = false;
    actions.append(actionButton(tr('✕ Passer'), async () => { if (busy || !card.isConnected || rev !== revision) return; index++; showCard(); }));
    actions.append(actionButton(ownLikes.has(target) ? tr('Retirer mon J’aime') : '❤️ J’aime', async () => {
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
      status(matched ? tr('💘 C’est un match !') : tr('J’aime actualisé.'));
      if (matched) showMatchCelebration();
      if (ownLikes.has(target)) { ownLikes.delete(target); showCard(); }
      else { ownLikes.add(target); index++; showCard(); }
      } finally { busy = false; }
    }));
    card.append(actions, actionButton(tr('Voir le profil détaillé'), () => detailedProfile(target, member.pseudo, discover)));
    void renderBadge(card, target, uid, rev);
    const safety = element('div'); safety.className = 'wc-card-safety';
    safety.append(actionButton(tr('🚫 Bloquer'), async () => {
      if (user?.id !== uid || !confirm(tr('Bloquer ce membre ?'))) return;
      check((await db.from('blocks').insert({blocker_id: uid, blocked_id: target})).error);
      if (user?.id === uid && rev === revision) await discover();
    }));
    safety.append(actionButton(tr('🚩 Signaler'), () => reportMember(target, member.pseudo || tr('Membre'), discover)));
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
  view.replaceChildren(element('h2', tr('🚩 Signaler ') + name));
  view.append(element('p', tr('Le signalement est transmis à la modération, pas au membre signalé.')));
  const form = element('form');
  const label = element('label', tr('Motif du signalement'));
  const select = element('select'); select.required = true;
  select.style.cssText = 'display:block;width:100%;padding:11px;border-radius:9px;margin:8px 0;font:inherit';
  const placeholder = element('option', tr('Choisir un motif')); placeholder.value = ''; select.append(placeholder);
  for (const reason of ['Faux profil','Harcèlement ou insultes','Suspicion de compte mineur','Arnaque ou escroquerie','Comportement inapproprié','Autre raison']) {
    const option = element('option', reason); option.value = reason; select.append(option);
  }
  label.append(select); form.append(label);
  const detailsLabel = element('label', tr('Informations complémentaires (facultatif)'));
  const details = element('textarea'); details.maxLength = 1000; details.rows = 4; detailsLabel.append(details); form.append(detailsLabel);
  const send = element('button', tr('Envoyer le signalement')); send.type = 'submit'; form.append(send);
  form.onsubmit = e => { e.preventDefault(); act(async () => {
    if (user?.id !== uid || rev !== revision || !select.value || send.disabled) return;
    send.disabled = true;
    try {
      const reason = select.value + (details.value.trim() ? ' — ' + details.value.trim() : '');
      const result = await db.from('reports').insert({reporter_id:uid, reported_id:target, reason});
      check(result.error);
      if (user?.id !== uid || rev !== revision) return;
      view.replaceChildren(element('h2',tr('Signalement envoyé')), element('p',tr('Merci. Votre signalement a été transmis à la modération.')), actionButton(tr('Retour'),back));
      status(tr('Signalement enregistré.'));
    } finally { send.disabled = false; }
  }); };
  view.append(form, actionButton(tr('Annuler'),back));
}

function actionButton(label, fn) {
  const b = element('button', label); b.type = 'button';
  b.onclick = () => { if (b.disabled) return; return act(async () => { if (b.disabled) return; b.disabled = true; try { await fn(); } finally { b.disabled = false; } }); };
  return b;
}

async function matches() {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  view.textContent = tr('Chargement des matchs…');
  const m = await db.rpc('get_matches'); check(m.error);
  const ids = m.data.map(x => x.match_id);
  const d = ids.length ? await db.from('profiles').select('id,pseudo').in('id', ids) : {data:[],error:null};
  if (user?.id !== uid || rev !== revision) return;
  view.replaceChildren(element('h2', tr('💘 Mes matchs')), actionButton(tr('Actualiser'), matches), actionButton(tr('Découvrir'), discover));
  if (!m.data.length) view.append(element('p', tr('Aucun match pour le moment.')));
  for (const x of m.data) {
    const name = d.data?.find(p => p.id === x.match_id)?.pseudo || tr('Membre compatible');
    const card = element('article');
    const presence = element('small',tr('Présence inconnue'));
    const preview = element('p',tr('Chargement du dernier message…'));
    card.append(element('h2', name), presence, preview, actionButton(tr('💬 Envoyer un message'), () => conversation(x.match_id, name))); view.append(card);
    void Promise.all([db.rpc('is_member_online',{other_user:x.match_id}),db.rpc('last_message',{other_user:x.match_id})]).then(([o,l])=>{
      if(user?.id!==uid || rev!==revision) return;
      showPresence(presence,o);
      const msg=l.data?.[0]; preview.textContent=l.error?tr('Aperçu indisponible'):msg?(msg.sender_id===uid?'Vous : ':'')+msg.content.slice(0,150):tr('Aucun message');
    }).catch(()=>{preview.textContent=tr('Aperçu indisponible');});
    card.append(actionButton(tr('Voir le profil détaillé'), () => detailedProfile(x.match_id, name, matches)));
    void renderBadge(card, x.match_id, uid, rev);
    void memberPhoto(card, x.match_id, uid, rev);
  }
}
async function conversation(target, name) {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  const current = () => user?.id === uid && revision === rev;
  view.textContent = tr('Chargement de la conversation…');
  const m = await db.rpc('get_matches'); check(m.error);
  if (!current()) return;
  if (!m.data.some(x => x.match_id === target)) { await matches(); return; }
  const thread = element('div'); thread.className = 'wc-thread'; thread.setAttribute('role','log'); thread.setAttribute('aria-label','Messages');
  const info = element('small',tr('Connexion au temps réel…'));
  const presence = element('p',tr('Présence inconnue'));
  const typing = element('p'); typing.className='wc-typing';
  let typingSent=0, typingTimer;
  function stopTyping(){ clearTimeout(typingTimer); typingSent=0; if(user?.id===uid) void db.rpc('update_typing',{other_user:target,is_typing:false}); }
  async function refreshIndicators(){
    const [o,t]=await Promise.all([db.rpc('is_member_online',{other_user:target}),db.rpc('is_member_typing',{other_user:target})]);
    if(!current())return; showPresence(presence,o); typing.textContent=!t.error&&t.data?name+tr(' est en train d’écrire…'):'';
  }
  const input = element('textarea'); input.maxLength = 1000; input.placeholder = tr('Votre message'); input.setAttribute('aria-label',tr('Votre message'));
  input.addEventListener('input',()=>{
    if(!current())return;
    if(!input.value.trim()){stopTyping();return;}
    if(Date.now()-typingSent>2000){typingSent=Date.now();void db.rpc('update_typing',{other_user:target,is_typing:true});}
    clearTimeout(typingTimer);typingTimer=setTimeout(stopTyping,3500);
  });
  input.addEventListener('blur',stopTyping);
  let busy = false, reading = false, last = null;
  let live = false, pending = false;
  const mode = () => live ? tr('● Messagerie en temps réel') : tr('Actualisation de secours toutes les 3 secondes');
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
        if (!r.data.length) thread.append(element('p',tr('Aucun message. Lancez la conversation !')));
        for (const msg of r.data.slice().reverse()) {
          const bubble = element('div'); bubble.className = 'wc-bubble ' + (msg.sender_id === uid ? 'wc-mine' : 'wc-theirs');
          bubble.append(element('div',msg.content),element('small',new Date(msg.created_at).toLocaleString(wcLocale(),{dateStyle:'short',timeStyle:'short'}) + (msg.sender_id===uid?(msg.read_at?tr(' · ✓✓ Lu'):tr(' · ✓ Envoyé')):''))); thread.append(bubble);
        }
        thread.scrollTop = bottom ? thread.scrollHeight : oldTop; last = signature;
      }
      info.textContent = mode();
    } catch(e) { if(current()){ thread.replaceChildren(); last=null; info.textContent = tr('Actualisation impossible. Nouvelle tentative automatique.'); } }
    finally { reading = false; if (pending && current()) { pending = false; queueMicrotask(refresh); } }
  }
  const send = actionButton(tr('Envoyer ➤'), async () => {
    if (!current() || busy || !input.value.trim()) return;
    busy = true; send.disabled = true;
    const content = input.value.trim(); input.disabled = true;
    try {
      check((await db.from('messages').insert({sender_id:uid,receiver_id:target,content})).error);
      if(current()){input.value=''; stopTyping(); await refresh(); thread.scrollTop=thread.scrollHeight;}
    } finally { busy=false; send.disabled=false; input.disabled=false; if(current()) input.focus(); }
  });
  const composer = element('div'); composer.className='wc-composer'; composer.append(input,send);
  view.replaceChildren(element('h2','💬 '+name),actionButton(tr('Retour aux matchs'),matches),actionButton(tr('Actualiser'),refresh),presence,info,thread,typing,composer,actionButton(tr('🚩 Signaler ce membre'),()=>reportMember(target,name,()=>conversation(target,name))));
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
  view.textContent = tr('Chargement…');
  const r = await db.from('blocks').select('blocked_id').eq('blocker_id',uid); check(r.error);
  if (user?.id !== uid || rev !== revision) return;
  view.replaceChildren(element('h2',tr('Membres bloqués')), actionButton(tr('Retour'),discover));
  if (!r.data.length) view.append(element('p',tr('Aucun membre bloqué.')));
  r.data.forEach((x,i) => view.append(element('p', 'Membre bloqué ' + (i+1) + ' — ' + x.blocked_id), actionButton(tr('Débloquer'), async () => {
    if (user?.id !== uid || rev !== revision) return;
    check((await db.from('blocks').delete().eq('blocker_id',uid).eq('blocked_id',x.blocked_id)).error);
    if (user?.id === uid && rev === revision) await blocked();
  })));
}


// ADMINISTRATION : autorisations vérifiées par Supabase (RLS).
const adminButton = actionButton(tr('🛡️ Administration'), administration);
adminButton.hidden = true;
$('logout').before(adminButton);
let adminCheck = 0;
async function syncAdmin() {
  const uid = user?.id, token = ++adminCheck;
  adminButton.hidden = true;
  if (!uid) return;
  const r = await db.rpc('admin_mfa_status');
  if (token === adminCheck && user?.id === uid && !r.error && r.data?.administrator === true) adminButton.hidden = false;
}
async function requireAdmin(uid) {
  if (!uid || user?.id !== uid) throw Error(tr('Session expirée.'));
  const r = await db.rpc('is_admin'); check(r.error);
  if (r.data !== true || user?.id !== uid) throw Error(tr('Accès administrateur refusé.'));
}
async function adminRows(table, columns) {
  const rows = [];
  for (let start = 0; ; start += 100) {
    const r = await db.from(table).select(columns).order(table === 'suspended_users' ? 'user_id' : 'id').range(start, start + 99);
    check(r.error); rows.push(...r.data);
    if (r.data.length < 100) return rows;
  }
}
function adminConfirmation(message, needsReason=false) {
  return new Promise(resolve=>{
    const dialog=element('dialog'); dialog.className='wc-lightbox';
    const yes=element('button',tr('Confirmer'));yes.type='button';
    const no=element('button',tr('Annuler'));no.type='button';
    dialog.append(element('h2',message));
    const reason=element('textarea');reason.maxLength=500;reason.placeholder=tr('Motif obligatoire');reason.setAttribute('aria-label',tr('Motif de suspension'));
    if(needsReason){dialog.append(reason);yes.disabled=true;reason.oninput=()=>{yes.disabled=!reason.value.trim();};}
    dialog.append(yes,no);
    yes.onclick=()=>dialog.close('yes');no.onclick=()=>dialog.close('no');
    dialog.addEventListener('close',()=>{const result=dialog.returnValue==='yes'?(needsReason?reason.value.trim():true):false;dialog.remove();resolve(result);},{once:true});
    document.body.append(dialog);try{dialog.showModal();no.focus();}catch(e){dialog.remove();resolve(false);}
  });
}

async function administration() {
  const uid = user?.id, rev = ++revision, view = $('view');
  const current = () => user?.id === uid && rev === revision;
  view.textContent = tr('Vérification des droits administrateur…');
  try {
    const mfa=await db.rpc('admin_mfa_status');check(mfa.error);if(!current())return;
    if(mfa.data?.administrator!==true)throw Error(tr('Accès administrateur refusé.'));
    if(mfa.data.recovery_hold||((mfa.data.required||mfa.data.verified_factors>0)&&!mfa.data.aal2)){await adminSecurity();return;}
    await requireAdmin(uid);
    const [members, reports, suspensions, subscriptions] = await Promise.all([
      adminRows('profiles','id,pseudo,age,city,discoverable'),
      adminRows('reports','id,reporter_id,reported_id,reason,created_at,reviewed'),
      adminRows('suspended_users','user_id,reason,suspended_at'),
      adminRows('subscriptions','id,user_id,plan,status,current_period_end')
    ]);
    await requireAdmin(uid);
    if (!current()) return;
    const names = new Map(members.map(m => [m.id,m.pseudo || tr('Membre')]));
    const name = id => names.get(id) || id;
    const suspended = new Map(suspensions.map(x => [x.user_id,x]));
    const active = new Set(subscriptions.filter(x => getActiveSubscription([x])).map(x => x.user_id));
    view.replaceChildren(element('h2',tr('🛡️ Administration Western Crush')), actionButton(tr('Actualiser'), administration));
    const stats = element('article');
    stats.append(element('p', `Profils enregistrés : ${members.length}`), element('p', `Membres Premium actifs : ${active.size}`), element('p', `Signalements à traiter : ${reports.filter(x => !x.reviewed).length}`), element('p', `Comptes suspendus : ${suspensions.length}`));
    view.append(stats,actionButton(wcLang==='en'?'Security / 2FA':'Sécurité / 2FA',adminSecurity),actionButton(wcLang==='en'?'Privacy requests':'Demandes RGPD',adminPrivacyRequests),actionButton(wcLang==='en'?'Security monitoring':'Surveillance sécurité',adminSecurityMonitoring), element('h2',tr('Gestion des membres')));
    for (const m of members) {
      const card = element('article');
      card.append(element('h3', name(m.id)), element('p', `${m.age ?? '—'} ans · ${m.city || tr('Ville non renseignée')}`), element('p', m.id === uid ? tr('Votre compte administrateur') : suspended.has(m.id) ? 'Suspendu : '+suspended.get(m.id).reason : tr('Non suspendu')));
      if (m.id !== uid && !suspended.has(m.id)) card.append(actionButton(tr('Suspendre'), async () => {
        if (!current()) return;
        const reason = await adminConfirmation('Suspendre '+name(m.id)+' ?',true);
        if (!reason) {status(tr('Suspension annulée.'));return;}
        await requireAdmin(uid); if (!current()) return;
        check((await db.from('suspended_users').insert({user_id:m.id,reason:reason.trim().slice(0,500)})).error);
        status(tr('Compte suspendu.'));
        if (current()) await administration();
      }));
      const cert = await db.rpc('is_profile_verified',{other_user:m.id});
      if (!current()) return;
      if (!cert.error) card.append(element('p',cert.data?tr('✓ Profil vérifié'):tr('Profil non vérifié')),actionButton(cert.data?tr('Retirer la certification'):tr('Certifier le profil'),async()=>{
        if(!current())return;
        if(!await adminConfirmation(cert.data?tr('Retirer le badge ?'):tr('Confirmer que ce profil a été contrôlé ?'))){status(tr('Action annulée.'));return;}
        await requireAdmin(uid); if(!current())return;
        check((await db.rpc('set_profile_verified',{target_user:m.id,verified:!cert.data})).error);
        status(cert.data?tr('Certification retirée.'):tr('Profil certifié.'));
        if(current())await administration();
      }));
      view.append(card);
    }
    view.append(element('h2',tr('Comptes suspendus')));
    if (!suspensions.length) view.append(element('p',tr('Aucun compte suspendu.')));
    for (const x of suspensions) {
      const card = element('article'); card.append(element('p',name(x.user_id)+' — '+x.reason),actionButton(tr('Réactiver'), async () => {
        if (!current())return;
        if (!await adminConfirmation('Réactiver '+name(x.user_id)+' ?')){status(tr('Réactivation annulée.'));return;}
        await requireAdmin(uid); if (!current()) return;
        const r = await db.rpc('reactivate_member',{target_id:x.user_id});check(r.error);
        if(r.data!==true)throw Error(tr('Aucune suspension supprimée.'));
        status(tr('Compte réactivé avec succès.'));
        if (current()) await administration();
      })); view.append(card);
    }
    view.append(element('h2',tr('Signalements')));
    if (!reports.length) view.append(element('p',tr('Aucun signalement.')));
    for (const x of reports) {
      const card = element('article'); card.append(element('p','Membre signalé : '+name(x.reported_id)),element('p','Auteur : '+name(x.reporter_id)),element('p',x.reason),element('p',x.reviewed?tr('Traité'):tr('À traiter')));
      if (!x.reviewed) card.append(actionButton(tr('Marquer comme traité'),async () => {
        if (!current()) return; await requireAdmin(uid); if (!current()) return;
        const r = await db.from('reports').update({reviewed:true}).eq('id',x.id).select('id'); check(r.error); if (!r.data.length) throw Error(tr('Signalement non modifié.'));
        if (current()) await administration();
      })); view.append(card);
    }
    view.append(element('h2',tr('Abonnements — consultation uniquement')));
    for (const x of subscriptions) view.append(element('p',`${name(x.user_id)} · ${x.plan} · ${x.status} · ${x.current_period_end ? new Date(x.current_period_end).toLocaleDateString(wcLocale()) : '—'}`));
    if (!subscriptions.length) view.append(element('p',tr('Aucun abonnement.')));
  } catch (e) { if (current()) view.textContent = tr('Administration indisponible.'); throw e; }
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
    notificationButton.textContent = r.error ? tr('🔔 Notifications') : `🔔 Notifications${r.data?.some(n=>!n.is_read) ? ' ('+r.data.filter(n=>!n.is_read).length+')' : ''}`;
  } catch { /* Nouvelle tentative au prochain rafraîchissement. */ }
  finally { notificationBusy = false; }
}
async function notifications() {
  const uid = user?.id, rev = ++revision, view = $('view');
  if (!uid) return;
  const current = () => user?.id === uid && revision === rev;
  view.textContent = tr('Chargement des notifications…');
  const r = await db.rpc('get_my_notifications');
  if (!current()) return;
  if (r.error) { view.textContent = tr('Notifications indisponibles.'); check(r.error); }
  view.replaceChildren(element('h2',tr('🔔 Mes notifications')),actionButton(tr('Actualiser'),notifications),actionButton(tr('Tout marquer comme lu'),async()=>{
    if (!current()) return;
    check((await db.rpc('mark_notifications_read',{p_id:null})).error);
    await refreshNotificationCount(); if(current()) await notifications();
  }));
  const labels = {like:tr('❤️ Un membre apprécie votre profil.'),match:tr('💘 Vous avez un nouveau match !'),message:tr('💬 Vous avez reçu un message.')};
  if (!r.data.length) view.append(element('p',tr('Aucune notification pour le moment.')));
  for (const n of r.data.slice(0,100)) {
    const card = element('article');
    card.append(element('h3',(n.is_read?'':'● ')+(labels[n.type] || tr('Nouvelle notification'))),element('small',new Date(n.created_at).toLocaleString(wcLocale())));
    if (!n.is_read) card.append(actionButton(tr('Marquer comme lue'),async()=>{
      if (!current()) return;
      check((await db.rpc('mark_notifications_read',{p_id:n.id})).error);
      await refreshNotificationCount(); if(current()) await notifications();
    }));
    if(n.type==='like') card.append(actionButton(n.actor_id?tr('Voir mes likes reçus'):tr('Découvrir avec Premium'),n.actor_id?receivedLikes:premium));
    if(n.type==='match'||n.type==='message') card.append(actionButton(tr('Ouvrir mes matchs'),matches));
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
      $('view').textContent = tr('Fonctionnalité en préparation.');
    }
  });
});

// APPLICATION MOBILE

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

// AUTHENTIFICATION

db.auth.onAuthStateChange((event, session) => {
  if(event==='PASSWORD_RECOVERY') recovering=true;
  if(recovering){user=null;revision++;if(session)showRecovery();return;}
  const previous = user?.id;
  user = session?.user || null;
  adminButton.hidden = true;
  if (previous !== user?.id) { notificationButton.textContent = tr('🔔 Notifications'); searchFilters = defaultFilters(); nearbyMode=false; nearbyRadius=50; }
  setTimeout(refreshNotificationCount, 0);
  setTimeout(() => act(syncAdmin), 0);

  $('auth').hidden = !!user;
  $('app').hidden = !user;

  if (user) {
    if (previous !== user.id || event === 'INITIAL_SESSION') {
      setTimeout(() => act(async () => {
        const prefs=await db.from('profiles').select('preferred_language,distance_unit').eq('id',user.id).maybeSingle();
        if(!prefs.error&&prefs.data){const changed=wcLang!==prefs.data.preferred_language;wcSetPreferences(prefs.data.preferred_language,prefs.data.distance_unit);if(changed){try{if(localStorage.getItem('wc-language')===wcLang){location.reload();return;}}catch{}}}
        const payment = new URLSearchParams(
          window.location.search
        ).get('payment');

        if (payment === 'success' || payment === 'cancelled') {
          await premium();

          status(
            payment === 'success'
              ? tr('Retour du paiement. Actualisez votre abonnement si nécessaire.')
              : tr('Paiement annulé.')
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
function showPresence(node,result){node.textContent=result.error?tr('Présence indisponible'):result.data?tr('● En ligne'):tr('● Hors ligne');node.className=result.data&&!result.error?'wc-online':'wc-offline';}
const unreadButton=document.querySelector('[data-tab="matches"]');
let unreadBusy=false;
async function refreshUnread(){const uid=user?.id;if(!uid){unreadButton.textContent=tr('Matchs');return;}if(unreadBusy)return;unreadBusy=true;try{const r=await db.rpc('unread_messages_count');if(user?.id===uid)unreadButton.textContent=tr('Matchs')+(!r.error&&Number(r.data)>0?' · 💬 '+r.data:'');}finally{unreadBusy=false;}}
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
    const b=element('span',tr('★ SHÉRIF VIP'));b.className='wc-vip-badge';
    b.style.cssText='display:inline-block;margin:4px 0 4px 8px;padding:4px 9px;border:1px solid #eac16d;border-radius:999px;background:#78501e;color:#ffe1a0;font-size:12px;font-weight:700;vertical-align:middle;white-space:nowrap;';
    heading.append(b);
  } catch(e) { console.warn('Badge VIP indisponible',e); }
}
async function renderBadge(card,target,uid,rev){
  void renderVipBadge(card,target,uid,rev);
  try { const r=await db.rpc('is_profile_verified',{other_user:target});
    if(!r.error && r.data && user?.id===uid && revision===rev && card.isConnected){const b=element('span',tr(' ✓ Vérifié par la modération'));b.className='wc-verified';card.querySelector('h2')?.append(b);}
  } catch {}
}
async function renderGallery(panel,target,own,uid,rev){
  const current=()=>user?.id===uid && revision===rev && panel.isConnected;
  const storage=db.storage.from('profile-gallery');
  const r=await db.from('profile_photos').select('id,photo_url,position').eq('user_id',target).order('position');
  if(!current())return; check(r.error);
  panel.replaceChildren(element('h2',own?tr('Ma galerie (6 photos supplémentaires)'):tr('Galerie privée')));
  panel.append(element('small',own?tr('Visible par vos matchs autorisés. JPEG, PNG ou WebP, 5 Mo maximum.'):tr('Photos accessibles uniquement aux matchs autorisés.')));
  const grid=element('div');grid.className='wc-gallery';panel.append(grid);
  for(let pos=1;pos<=6;pos++){
    const row=r.data.find(x=>x.position===pos); if(!row&&!own)continue;
    const cell=element('div');grid.append(cell);
    if(row){
      const pic=element('img');pic.alt='Photo '+pos;pic.referrerPolicy='no-referrer';
      const signed=await storage.createSignedUrl(row.photo_url,60);if(!current())return;
      if(!signed.error){pic.src=signed.data.signedUrl;const zoom=element('button');zoom.type='button';zoom.className='wc-photo-zoom';zoom.setAttribute('aria-label',tr('Agrandir la photo ')+pos);zoom.append(pic);zoom.onclick=()=>{if(current())openGalleryZoom(pic);};cell.append(zoom);}else cell.append(element('p',tr('Photo indisponible')));
      if(own)cell.append(actionButton(tr('Supprimer'),async()=>{
        const feedback=element('p',tr('Vérification de la session…')); feedback.setAttribute('role','status');cell.append(feedback);
        status(tr('Suppression de la photo : vérification…'));
        try {
          if(!panel.isConnected || !own || target!==uid || user?.id!==uid)throw Error(tr('Session ou galerie inactive. Ouvrez de nouveau votre profil.'));
          const confirmed=await new Promise(resolve=>{
            const dialog=element('dialog');dialog.className='wc-lightbox';
            const yes=element('button',tr('Confirmer la suppression'));yes.type='button';
            const no=element('button',tr('Annuler'));no.type='button';
            dialog.append(element('h2',tr('Supprimer cette photo ?')),element('p',tr('Cette photo sera définitivement supprimée de votre galerie.')),yes,no);
            yes.onclick=()=>dialog.close('yes');no.onclick=()=>dialog.close('no');
            dialog.addEventListener('close',()=>{const ok=dialog.returnValue==='yes';dialog.remove();resolve(ok);},{once:true});
            document.body.append(dialog);try{dialog.showModal();no.focus();}catch(e){dialog.remove();resolve(false);}
          });
          if(!confirmed){feedback.textContent=tr('Suppression annulée.');status(tr('Suppression annulée.'));return;}
          const session=await db.auth.getSession();
          if(session.error)throw Error('Session : '+session.error.message);
          if(session.data.session?.user.id!==uid || user?.id!==uid || !panel.isConnected)throw Error(tr('Session expirée ou profil fermé. Reconnectez-vous.'));
          feedback.textContent=tr('Suppression du fichier…');
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
          status(tr('Photo supprimée avec succès.'));
          if(panel.isConnected && user?.id===uid){
            await renderGallery(panel,target,own,uid,revision);
            const done=element('p',tr('Photo supprimée avec succès.'));done.setAttribute('role','status');panel.prepend(done);
          }
        }catch(e){
          feedback.textContent=e.message||tr('Échec de la suppression.');
          throw e;
        }
      }));
    }else{
      const input=element('input');input.type='file';input.accept='image/jpeg,image/png,image/webp';input.setAttribute('aria-label','Photo '+pos);
      cell.append(element('small','Photo '+pos),input,actionButton(tr('Ajouter'),async()=>{
        if(!current())return;const f=input.files[0];const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[f?.type];
        if(!f||!ext||f.size>5242880)throw Error(tr('Choisissez une image JPEG, PNG ou WebP de 5 Mo maximum.'));
        const path=await uploadValidatedPhoto('profile-gallery',f);
        const result=await db.from('profile_photos').insert({user_id:uid,photo_url:path,position:pos});
        if(result.error){await storage.remove([path]);check(result.error);}
        if(current())await renderGallery(panel,target,own,uid,rev);
      }));
    }
  }
  if(!own&&!r.data.length)panel.append(element('p',tr('Aucune photo supplémentaire accessible.')));
}
function openGalleryZoom(pic){
  const dialog=element('dialog');dialog.className='wc-lightbox';const close=element('button',tr('Fermer ×'));close.type='button';close.onclick=()=>dialog.close();const img=element('img');img.src=pic.src;img.alt=pic.alt;img.referrerPolicy='no-referrer';dialog.append(close,img);dialog.addEventListener('close',()=>dialog.remove());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});document.body.append(dialog);dialog.showModal();
}
async function detailedProfile(target,name,back){
  const uid=user?.id,rev=++revision,view=$('view');if(!uid)return;
  const current=()=>user?.id===uid && revision===rev;
  view.replaceChildren(actionButton(tr('← Retour'),back),element('p',tr('Chargement du profil…')));
  const [p,c,m,me]=await Promise.all([db.from('profiles').select('pseudo,age,city,department,bio,interests,western_style,relationship_goal').eq('id',target).maybeSingle(),db.rpc('compatibility_score',{other_user:target}),db.rpc('get_matches'),db.from('profiles').select('interests,western_style,relationship_goal').eq('id',uid).maybeSingle()]);
  if(!current())return;
  view.replaceChildren(actionButton(tr('← Retour'),back));
  if(p.error||!p.data){view.append(element('p',tr('Profil détaillé indisponible selon les autorisations.')));return;}
  const x=p.data,card=element('article');card.className='wc-detail';card.append(element('h2',`${x.pseudo||name} — ${x.age} ${wcLang==='en'?'years old':'ans'}`),element('p',[x.city,x.department].filter(Boolean).join(' · ')),element('p',x.bio||tr('Aucune présentation.')));
  for(const [label,value] of [[tr('Passions'),x.interests],['Style Western',x.western_style],[tr('Relation recherchée'),x.relationship_goal]])card.append(element('p',label+' : '+(value||tr('Non renseigné'))));
  const complete=v=>v&&['interests','western_style','relationship_goal'].every(k=>String(v[k]??'').trim());
  if(!me.error&&complete(me.data)&&complete(x)&&!c.error&&c.data!==null){card.append(element('h3',c.data+tr(' % de compatibilité')),element('small',tr('Score indicatif fondé sur les préférences déclarées.')));const bar=element('progress');bar.max=100;bar.value=c.data;card.append(bar);}else card.append(element('p',tr('Compatibilité non calculée : préférences incomplètes ou score indisponible.')));
  view.append(card);void memberPhoto(card,target,uid,rev);void renderBadge(card,target,uid,rev);
  if(!m.error&&m.data.some(x=>x.match_id===target)){const panel=element('article');view.append(panel);await renderGallery(panel,target,false,uid,rev);}else view.append(element('p',tr('Galerie supplémentaire réservée aux matchs.')));
}

// V16 — likes reçus
async function receivedLikes(){
  const uid=user?.id, rev=++revision, view=$('view'); if(!uid)return;
  const current=()=>user?.id===uid && revision===rev;
  view.replaceChildren(element('h2',tr('♥ Qui m’aime ?')),actionButton(tr('Retour'),discover));
  const plan=await db.rpc('my_membership_plan'); if(!current())return; check(plan.error);
  if(!['cowboy','vip'].includes(plan.data)){view.append(element('p',tr('Découvrez les personnes qui aiment votre profil avec Cowboy ou Shérif VIP.')),actionButton(tr('Voir les abonnements'),premium));return;}
  const r=await db.rpc('get_received_likes'); if(!current())return; check(r.error);
  if(!r.data.length){view.append(element('p',tr('Aucun like reçu disponible.')));return;}
  const profiles=await db.rpc('discover_members'); if(!current())return; check(profiles.error);
  const members=new Map((profiles.data||[]).map(p=>[p.id,p]));
  for(const like of r.data){const p=members.get(like.profile_id); if(!p)continue; const card=element('article'); card.append(element('h3',p.pseudo||tr('Membre')),element('small',new Date(like.liked_at).toLocaleString(wcLocale())),actionButton(tr('Voir le profil'),()=>detailedProfile(like.profile_id,p.pseudo,receivedLikes)));view.append(card);void renderVipBadge(card,like.profile_id,uid,rev);}
}

async function adminPrivacyRequests(){
 const uid=user?.id,rev=++revision,view=$('view'),current=()=>user?.id===uid&&rev===revision;
 const t=(fr,en)=>wcLang==='en'?en:fr;
 await requireAdmin(uid);if(!current())return;
 const rows=await adminRows('privacy_requests','id,user_id,kind,status,created_at,reviewed_at,language');
 await requireAdmin(uid);if(!current())return;
 view.replaceChildren(element('h2',t('Demandes RGPD','Privacy requests')),actionButton(t('Retour administration','Back to administration'),administration),actionButton(t('Actualiser','Refresh'),adminPrivacyRequests));
 const kinds={access:t('Accès','Access'),erasure:t('Suppression','Erasure'),withdrawal:t('Retrait','Withdrawal')};
 const states={pending:t('En attente','Pending'),reviewing:t('En cours','Reviewing'),completed:t('Traitée','Completed'),rejected:t('Refusée','Rejected')};
 if(!rows.length)view.append(element('p',t('Aucune demande.','No requests.')));
 for(const r of rows.sort((a,b)=>Date.parse(a.created_at)-Date.parse(b.created_at))){
 const card=element('article');card.append(element('h3',kinds[r.kind]+' — '+states[r.status]),element('p',t('Membre : ','Member: ')+r.user_id),element('p',t('Reçue : ','Received: ')+new Date(r.created_at).toLocaleString(wcLocale())));
 if(r.kind==='erasure')card.append(element('p',t('Suppression définitive verrouillée : vérifier Stripe, stockage, sessions et conservation.','Permanent deletion locked: verify Stripe, storage, sessions and retention.')));
 if(r.kind==='erasure'&&r.user_id!==uid&&['pending','reviewing'].includes(r.status)){
 const output=element('div');output.setAttribute('role','status');
 card.append(actionButton(t('Contrôler Stripe et le compte','Check Stripe and account'),async()=>{
 if(!current())return;await requireAdmin(uid);if(!current())return;
 output.textContent=t('Contrôle en cours…','Checking…');
 try{
 const res=await db.functions.invoke('erasure-preflight',{body:{request_id:r.id}});check(res.error);if(!current())return;
 const d=res.data;if(!d||d.deletion_allowed!==false)throw Error('Invalid check response');
 output.replaceChildren(element('p',t('Abonnements connus : ','Known subscriptions: ')+d.known_subscriptions),element('p',t('Tentatives de paiement : ','Checkout attempts: ')+d.known_checkout_attempts),element('p',t('Photos de galerie : ','Gallery photos: ')+d.gallery_rows),element('p',t('Photo principale : ','Main photo: ')+(d.profile_photo?t('Oui','Yes'):t('Non','No'))));
 const labels={subscription_reference_missing:t('Référence abonnement manquante','Missing subscription reference'),local_subscription_not_closed:t('Abonnement local non clôturé','Local subscription not closed'),checkout_reservation_unresolved:t('Réservation de paiement non résolue','Unresolved checkout reservation'),checkout_open:t('Session de paiement ouverte','Open checkout'),checkout_unpaid:t('Paiement non réglé','Unpaid checkout'),stripe_subscription_not_closed:t('Abonnement Stripe non clôturé','Stripe subscription not closed')};
 for(const b of d.billing_blockers||[])output.append(element('p','⚠ '+(labels[b]||b)));
 if(!d.billing_blockers?.length)output.append(element('p',t('Aucun blocage de facturation connu détecté.','No known billing blocker detected.')));
 output.append(element('p',t('Suppression toujours verrouillée : contrôles complémentaires nécessaires.','Deletion still locked: further checks required.')));
 }catch(e){if(current())output.textContent=t('Contrôle impossible. Suppression verrouillée.','Check failed. Deletion locked.');throw e;}
 }),output);
 }
 if(r.kind==='erasure'&&r.status==='reviewing'&&r.user_id!==uid){
 const planOutput=element('div');planOutput.setAttribute('role','status');
 card.append(actionButton(t('Préparer la clôture Stripe','Prepare Stripe closure'),async()=>{
 if(!current())return;await requireAdmin(uid);if(!current())return;
 planOutput.textContent=t('Inventaire en cours…','Preparing inventory…');
 try{
 const res=await db.functions.invoke('erasure-closure-plan',{body:{request_id:r.id}});check(res.error);if(!current())return;
 const d=res.data;if(d?.deletion_allowed!==false||d?.closure_executed!==false)throw Error('Invalid closure plan');
 planOutput.replaceChildren(element('p',t('Abonnements à clôturer : ','Subscriptions to close: ')+d.subscriptions_to_close),element('p',t('Sessions de paiement ouvertes : ','Open checkouts: ')+d.open_checkouts),element('p',t('Fichiers photo principaux : ','Main photo files: ')+d.storage_inventory['profile-photos']),element('p',t('Fichiers galerie : ','Gallery files: ')+d.storage_inventory['profile-gallery']),element('p',t('Inventaire uniquement. Aucune résiliation ni suppression effectuée.','Inventory only. No cancellation or deletion performed.')));
 }catch(e){if(current())planOutput.textContent=t('Préparation impossible : contrôle manuel nécessaire.','Planning failed: manual review required.');throw e;}
 }),planOutput);
 const inventoryOutput=element('div');inventoryOutput.setAttribute('role','status');
 card.append(actionButton(t('Inventaire final des données','Final data inventory'),async()=>{
 if(!current())return;await requireAdmin(uid);if(!current())return;
 inventoryOutput.textContent=t('Inventaire en cours…','Checking inventory…');
 try{
 const r2=await db.rpc('erasure_data_inventory',{p_request:r.id});check(r2.error);if(!current())return;
 const d=r2.data;if(d?.deletion_allowed!==false)throw Error('Invalid inventory');
 inventoryOutput.replaceChildren();
 for(const [key,fr,en] of [['auth_sessions','Sessions enregistrées','Recorded sessions'],['primary_files','Fichiers photo principaux','Main photo files'],['gallery_files','Fichiers galerie','Gallery files'],['other_owned_files','Autres fichiers associés','Other owned files'],['profile_rows','Profils','Profiles'],['gallery_rows','Entrées galerie','Gallery entries'],['sent_messages','Messages envoyés','Sent messages'],['received_messages','Messages reçus','Received messages'],['local_billing_blockers','Abonnements locaux non clôturés','Unclosed local subscriptions']])inventoryOutput.append(element('p',t(fr,en)+' : '+d[key]));
 inventoryOutput.append(element('p',t('Inventaire uniquement : aucune suppression ni révocation effectuée.','Inventory only: no deletion or session revocation performed.')));
 }catch(e){if(current())inventoryOutput.textContent=t('Inventaire indisponible. Reconnectez-vous si nécessaire.','Inventory unavailable. Sign in again if needed.');throw e;}
 }),inventoryOutput);
 const finalOutput=element('div');finalOutput.setAttribute('role','status');
 const deleteBtn=actionButton(t('Supprimer définitivement le compte TEST','Permanently delete TEST account'),async()=>{
 if(!current()||deleteBtn.hidden)return;
 try{
 if(!await adminConfirmation(t('Effacement irréversible du compte de test '+r.user_id+' dans la base active. Continuer ?','Irreversibly delete test account '+r.user_id+' from the active database. Continue?')))return;
 const phrase='SUPPRIMER TEST '+r.id;
 if(prompt(t('Pour confirmer, saisissez : ','To confirm, type: ')+phrase)!==phrase)return;
 await requireAdmin(uid);if(!current())return;
 const res=await db.functions.invoke('erasure-finalize-test',{body:{request_id:r.id,action:'delete',confirmation:phrase}});check(res.error);if(!current())return;
 if(res.data?.deleted!==true||res.data.request_id!==r.id)throw Error(t('Suppression non confirmée.','Deletion not confirmed.'));
 status(t('Compte de test supprimé. Preuve de traitement enregistrée.','Test account deleted. Completion receipt recorded.'));
 await adminPrivacyRequests();
 }catch(e){if(current())finalOutput.textContent=t('Suppression non confirmée. Vérifiez les preuves de traitement avant de réessayer.','Deletion not confirmed. Check completion receipts before retrying.');throw e;}
 finally{deleteBtn.hidden=true;deleteBtn.style.display='none';deleteBtn.disabled=false;}
 });
 deleteBtn.hidden=true;deleteBtn.style.display='none';
 const finalCheck=actionButton(t('Vérifier l’autorisation de suppression définitive','Check permanent deletion authorization'),async()=>{
 if(!current())return;deleteBtn.hidden=true;deleteBtn.style.display='none';await requireAdmin(uid);if(!current())return;
 finalOutput.textContent=t('Vérification en cours…','Checking…');
 try{
 const res=await db.functions.invoke('erasure-finalize-test',{body:{request_id:r.id,action:'check'}});check(res.error);if(!current())return;
 const d=res.data;
 if(d?.eligible===true&&d.deleted===false){finalOutput.textContent=t('Compte de test autorisé. Effacement possible après confirmation.','Authorized test account. Deletion possible after confirmation.');deleteBtn.hidden=false;deleteBtn.style.display='';return;}
 const labels={test_authorization_required:t('Autorisation temporaire de test manquante ou expirée','Temporary test authorization missing or expired'),cleanup_required:t('Nettoyage préalable incomplet','Cleanup incomplete'),sessions_or_files_remaining:t('Sessions ou fichiers restants','Sessions or files remaining'),manual_retention_review:t('Messages ou signalements : examen manuel nécessaire','Messages or reports: manual review required'),local_billing_not_closed:t('Facturation non clôturée','Billing not closed'),test_stripe_required:t('Mode test Stripe requis','Stripe test mode required')};
 finalOutput.replaceChildren(element('p',t('Suppression verrouillée.','Deletion locked.')));for(const b of d?.blockers||[])finalOutput.append(element('p',labels[b]||t('Contrôle manuel nécessaire.','Manual check required.')));
 }catch(e){if(current())finalOutput.textContent=t('Contrôle impossible. Suppression verrouillée.','Check failed. Deletion locked.');throw e;}
 });
 card.append(finalCheck,finalOutput,deleteBtn);
 let cleaning=false;
 card.append(actionButton(t('Révoquer les sessions et nettoyer les photos TEST','Revoke sessions and clean TEST photos'),async()=>{
 if(!current()||cleaning)return;
 if(!await adminConfirmation(t('Compte de test uniquement : bloquer les connexions et supprimer définitivement ses fichiers photo ?','Test account only: block sign-ins and permanently delete its photo files?')))return;
 if(prompt(t('Pour confirmer, saisissez NETTOYER TEST','To confirm, type NETTOYER TEST'))!=='NETTOYER TEST')return;
 await requireAdmin(uid);if(!current()||cleaning)return;cleaning=true;
 inventoryOutput.textContent=t('Nettoyage en cours…','Cleaning…');
 try{
 const res=await db.functions.invoke('erasure-cleanup-test',{body:{request_id:r.id,confirmation:'NETTOYER TEST'}});check(res.error);if(!current())return;
 const d=res.data;if(d?.account_frozen!==true||d?.billing_check!=='test_only'||d?.deletion_allowed!==false)throw Error('Invalid cleanup result');
 inventoryOutput.replaceChildren(element('p',t('Compte verrouillé : oui','Account frozen: yes')),element('p',t('Sessions révoquées : ','Revoked sessions: ')+d.revoked_sessions),element('p',t('Photos principales supprimées : ','Main photos removed: ')+d.removed_files['profile-photos']),element('p',t('Photos galerie supprimées : ','Gallery photos removed: ')+d.removed_files['profile-gallery']),element('p',t('Sessions restantes : ','Remaining sessions: ')+d.remaining_sessions),element('p',t('Fichiers photo restants : ','Remaining photo files: ')+d.remaining_photos),element('p',t('Suppression définitive toujours verrouillée.','Permanent deletion remains locked.')));
 }catch(e){if(current())inventoryOutput.textContent=t('Nettoyage non confirmé : compte potentiellement déjà verrouillé. Vérifier avant de réessayer.','Cleanup not confirmed: account may already be frozen. Check before retrying.');throw e;}finally{cleaning=false;}
 }));
 let closing=false;
 card.append(actionButton(t('Résilier les abonnements TEST','Cancel TEST subscriptions'),async()=>{
 if(!current()||closing)return;
 if(!await adminConfirmation(t('Résilier immédiatement les abonnements de test de ce membre ?','Immediately cancel this member’s test subscriptions?')))return;
 if(prompt(t('Pour confirmer, saisissez CLOTURER TEST','To confirm, type CLOTURER TEST'))!=='CLOTURER TEST')return;
 await requireAdmin(uid);if(!current()||closing)return;
 closing=true;planOutput.textContent=t('Clôture en cours…','Closing…');
 try{
 const r2=await db.functions.invoke('erasure-close-test-billing',{body:{request_id:r.id,confirmation:'CLOTURER TEST'}});check(r2.error);if(!current())return;
 const d=r2.data;if(d?.billing_check!=='test_only'||d?.deletion_allowed!==false)throw Error('Invalid billing response');
 planOutput.replaceChildren(element('p',t('Abonnements résiliés : ','Subscriptions canceled: ')+d.canceled),element('p',t('Sessions fermées : ','Sessions expired: ')+d.expired),element('p',t('Synchronisations en attente : ','Pending sync: ')+d.sync_pending),element('p',t('Relancer le contrôle Stripe pour vérifier le statut. Suppression verrouillée.','Run Stripe check again to verify status. Deletion locked.')));
 }catch(e){if(current())planOutput.textContent=t('Clôture non confirmée : vérifier Stripe avant toute nouvelle tentative.','Closure not confirmed: check Stripe before retrying.');throw e;}finally{closing=false;}
 }));
 }
 const change=(label,next)=>actionButton(label,async()=>{if(!current())return;if(!await adminConfirmation(label+' ?'))return;await requireAdmin(uid);if(!current())return;check((await db.rpc('review_privacy_request',{p_request:r.id,p_status:next})).error);if(current())await adminPrivacyRequests();});
 if(r.user_id!==uid){if(r.status==='pending')card.append(change(t('Commencer le traitement','Start review'),'reviewing'));if(r.status==='reviewing'){if(r.kind!=='erasure')card.append(change(t('Confirmer le traitement effectué','Confirm completed processing'),'completed'));card.append(change(t('Refuser après examen','Reject after review'),'rejected'));}}
 view.append(card);
 }
 const receipts=await db.from('erasure_completion_receipts').select('request_id,completed_at,scope,removed_messages,removed_reviewed_reports').order('completed_at',{ascending:false}).limit(50);
 if(!current())return;check(receipts.error);
 view.append(element('h2',t('Preuves de traitement','Completion receipts')));
 if(!receipts.data?.length)view.append(element('p',t('Aucune preuve enregistrée.','No receipts recorded.')));
 for(const receipt of receipts.data||[]){const c=element('article');c.append(element('p',t('Effacement base active — compte de test','Active database erasure — test account')),element('p',t('Demande : ','Request: ')+receipt.request_id),element('p',new Date(receipt.completed_at).toLocaleString(wcLocale())));view.append(c);}
}

async function adminSecurity(){
 const uid=user?.id,rev=++revision,view=$('view'),current=()=>user?.id===uid&&revision===rev;
 const t=(fr,en)=>wcLang==='en'?en:fr;
 const state=await db.rpc('admin_mfa_status');check(state.error);if(!current())return;
 if(state.data?.administrator!==true)throw Error(t('Accès administrateur refusé.','Administrator access denied.'));
 const factors=await db.auth.mfa.listFactors();check(factors.error);if(!current())return;
 view.replaceChildren(element('h2',t('Sécurité administrateur — 2FA','Administrator security — 2FA')));
 const panel=element('article');view.append(panel);
 panel.append(element('p',state.data.required?t('Double authentification obligatoire côté serveur.','Server-enforced MFA.'):t('Phase de test : le second facteur n’est pas encore obligatoire côté serveur.','Test phase: MFA is not yet mandatory on the server.')));
 panel.append(element('p',state.data.aal2?t('Session vérifiée avec deux facteurs.','Session verified with two factors.'):t('Session non vérifiée par le second facteur.','Second factor not verified for this session.')));
 const verified=(factors.data.totp||[]).filter(x=>x.status==='verified');
 if(verified.length){
 panel.append(element('p',t('Application d’authentification configurée.','Authenticator app configured.')));
 if(!state.data.aal2){
 const choice=element('select');
 for(const factor of verified){const o=element('option',factor.friendly_name||t('Application d’authentification','Authenticator'));o.value=factor.id;choice.append(o);}
 panel.append(choice);
 addCode(panel,()=>choice.value,async()=>{await adminSecurity();});
 return;
 }
 }
 if(state.data.recovery_hold)panel.append(element('p',t('Récupération contrôlée : les droits administrateur restent bloqués jusqu’à validation par le propriétaire du projet.','Controlled recovery: administrator permissions remain blocked until the project owner approves.')));
 if(!verified.length&&state.data.required&&!state.data.recovery_hold){panel.append(element('p',t('Aucun facteur utilisable : récupération par le propriétaire du projet nécessaire.','No usable factor: project owner recovery required.')));return;}
 panel.append(element('p',verified.length?t('Facteurs vérifiés : ','Verified factors: ')+verified.length:t('Installe une application d’authentification sur ton téléphone.','Install an authenticator on your phone.')));
 if(verified.length)panel.append(element('p',t('Configure un deuxième appareil indépendant comme secours. Conserve ton premier facteur.','Set up a second independent device as a backup. Keep your first factor.')));
 panel.append(element('p',t('Ne partage jamais le QR code, la clé secrète ou les codes à six chiffres.','Never share the QR code, secret or six-digit codes.')));
 const pending=(factors.data.all||[]).filter(x=>x.factor_type==='totp'&&x.status==='unverified');
 if(pending.length){
 panel.append(element('p',t('Une configuration inachevée a été détectée. Annule-la avant de recommencer.','An unfinished setup was detected. Cancel it before starting again.')));
 panel.append(actionButton(t('Annuler la configuration inachevée','Cancel unfinished setup'),async()=>{
 if(!current()||!confirm(t('Annuler uniquement les facteurs non vérifiés ?','Remove only unverified factors?')))return;
 const latest=await db.auth.mfa.listFactors();check(latest.error);
 if(!current())return;
 for(const factor of (latest.data.all||[]).filter(x=>x.factor_type==='totp'&&x.status==='unverified')){if(!current())return;check((await db.auth.mfa.unenroll({factorId:factor.id})).error);}
 if(current())await adminSecurity();
 }));
 }else{
 panel.append(actionButton(verified.length?t('Ajouter un appareil de secours','Add a backup device'):t('Configurer la double authentification','Set up two-factor authentication'),async()=>{
 if(!current())return;
 const fresh=await db.rpc('admin_mfa_status');check(fresh.error);if(!current()||fresh.data?.administrator!==true)return;
 if(fresh.data.verified_factors>0&&!fresh.data.aal2)throw Error(t('Vérifie ton premier facteur avant d’ajouter un secours.','Verify your first factor before adding a backup.'));
 if(fresh.data.verified_factors===0&&fresh.data.required&&!fresh.data.recovery_hold)throw Error(t('Récupération par le propriétaire requise.','Project owner recovery required.'));
 const enrollment=await db.auth.mfa.enroll({factorType:'totp',issuer:'Western Crush',friendlyName:'Western Crush '+Date.now()});check(enrollment.error);if(!current())return;
 const data=enrollment.data;
 panel.replaceChildren(element('h3',t('Scanne ce QR code avec ton téléphone','Scan this QR code with your phone')),element('p',t('Ne fais pas de capture d’écran de ce QR code.','Do not take a screenshot of this QR code.')));
 const img=element('img');img.alt=t('QR code privé de configuration','Private setup QR code');img.style.cssText='display:block;width:200px;max-width:100%;background:white;padding:8px;margin:12px auto;';
 const qr=data.totp.qr_code;
 if(typeof qr==='string'&&qr.startsWith('data:image/svg+xml'))img.src=qr;
 else if(typeof qr==='string'&&qr.trim().startsWith('<svg'))img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(qr);
 else throw Error(t('QR code indisponible. Annule la configuration et recommence.','QR unavailable. Cancel setup and retry.'));
 panel.append(img);
 const details=element('details');details.append(element('summary',t('Saisie manuelle (clé privée)','Manual entry (private secret)')),element('code',data.totp.secret));panel.append(details);
 addCode(panel,()=>data.id,async()=>{await adminSecurity();});
 panel.append(actionButton(t('Annuler cette configuration','Cancel this setup'),async()=>{
 if(!current())return;
 const latest=await db.auth.mfa.listFactors();check(latest.error);if(!current())return;
 if((latest.data.all||[]).some(x=>x.id===data.id&&x.status==='unverified'))check((await db.auth.mfa.unenroll({factorId:data.id})).error);
 if(current())await adminSecurity();
 }));
 }));
 }
 if(state.data.aal2&&!state.data.recovery_hold)panel.append(actionButton(t('Retour administration','Back to administration'),administration));
 function addCode(parent,getFactor,success){
 const label=element('label',t('Code à six chiffres','Six-digit code'));const input=element('input');input.type='text';input.inputMode='numeric';input.autocomplete='one-time-code';input.maxLength=6;input.placeholder='000000';label.append(input);
 const out=element('p');out.setAttribute('role','status');
 parent.append(label,actionButton(t('Vérifier le code','Verify code'),async()=>{
 if(!current())return;const code=input.value.trim();input.value='';
 if(!/^\d{6}$/.test(code)){out.textContent=t('Saisis six chiffres.','Enter six digits.');return;}
 try{const factorId=getFactor();const ch=await db.auth.mfa.challenge({factorId});check(ch.error);if(!current())return;
 const v=await db.auth.mfa.verify({factorId,challengeId:ch.data.id,code});check(v.error);if(!current())return;
 const after=await db.rpc('admin_mfa_status');check(after.error);if(!current())return;
 if(after.data?.aal2!==true)throw Error('AAL2 not confirmed');
 await success();
 }catch{if(current())out.textContent=t('Code refusé ou session non confirmée. Essaie un nouveau code.','Code rejected or session not confirmed. Try a new code.');}
 }),out);
 }
}

async function adminSecurityMonitoring(){
 const uid=user?.id,rev=++revision,view=$('view'),current=()=>user?.id===uid&&revision===rev;
 const t=(fr,en)=>wcLang==='en'?en:fr;
 view.textContent=t('Vérification des accès…','Checking access…');
 await requireAdmin(uid);if(!current())return;
 const r=await db.rpc('admin_security_overview');check(r.error);if(!current())return;
 await requireAdmin(uid);if(!current())return;
 const d=r.data;
 if(!d||!d.checked_at)throw Error(t('Données indisponibles.','Data unavailable.'));
 const panel=element('article');
 panel.append(element('p',t('Dernière vérification : ','Last check: ')+new Date(d.checked_at).toLocaleString(wcLocale())));
 const fields=[
 ['pending_reports','Signalements à traiter','Pending reports'],
 ['suspended_accounts','Comptes suspendus','Suspended accounts'],
 ['unconfirmed_accounts','Comptes sans e-mail confirmé','Unconfirmed accounts'],
 ['admin_mfa_missing','Administrateurs sans protection MFA complète','Administrators without full MFA protection'],
 ['report_limit_accounts','Comptes au plafond de signalements actuel','Accounts at current report limit'],
 ['like_limit_accounts','Comptes au plafond de likes actuel','Accounts at current like limit'],
 ['message_limit_accounts','Comptes au plafond de messages actuel','Accounts at current message limit']
 ];
 for(const [key,fr,en] of fields)panel.append(element('p',t(fr,en)+' : '+String(d[key]??'—')));
 const alerts=element('article');alerts.append(element('h3',t('Alertes à consulter','Alerts to review')));
 let n=0;
 for(const [key,fr,en] of fields.filter(x=>x[0]!=='suspended_accounts')){
 if(Number(d[key])>0){n++;alerts.append(element('p','⚠ '+t(fr,en)+' : '+d[key]));}
 }
 if(!n)alerts.append(element('p',t('Aucune alerte issue des compteurs actuels.','No alerts from current counters.')));
 alerts.append(element('p',t('Ces plafonds sont des indicateurs à examiner, pas des preuves de fraude. Les refus et les attaques externes ne sont pas comptabilisés ici.','Limits are review indicators, not proof of fraud. Rejections and external attacks are not counted here.')));
 const audit=element('article');audit.append(element('h3',t('Journaux d’authentification','Authentication logs')),element('p',t('Entrées de la table d’audit sur 24 h : ','Audit table entries in 24 hours: ')+d.auth_audit_records_24h),element('p',t('Un total nul ne signifie pas absence de tentatives. Consulte aussi les journaux Supabase.','Zero entries does not mean no attempts. Also check Supabase logs.')));
 const link=element('a',t('Ouvrir les journaux Supabase','Open Supabase logs'));link.href='https://supabase.com/dashboard/project/krfphvzbgjkhvwwkmuol/logs/explorer';link.target='_blank';link.rel='noopener noreferrer';audit.append(link);
 view.replaceChildren(element('h2',t('Surveillance de sécurité','Security monitoring')),actionButton(t('Retour administration','Back to administration'),administration),actionButton(t('Actualiser','Refresh'),adminSecurityMonitoring),panel,alerts,audit);
}
