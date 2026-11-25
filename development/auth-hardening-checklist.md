# Western Crush — sécurité des connexions V18.25

## Interface préparée
- Création et réinitialisation : 12 caractères Unicode minimum ; recommandation 16+ ; maximum 72 octets UTF-8 (bcrypt) ; petit filtre local de mots de passe prévisibles. La connexion à un compte existant ne passe pas par cette validation de création.
- Temporisation progressive locale après erreurs de connexion : 4, 8, 16, 32, puis 60 secondes maximum. Les erreurs de quota déclenchent 60 secondes. Compteur partagé entre onglets dans la mesure où le stockage est disponible, remis à zéro après réussite ou 15 minutes sans échec. L'état stocké ne contient ni email ni mot de passe ni jeton CAPTCHA. Pas de verrouillage irréversible du compte. Le navigateur reste contrôlé par l'utilisateur : cette temporisation n'est pas une limite serveur et peut être contournée.
- CAPTCHA existant, messages de connexion génériques et récupération sans confirmation d'existence du compte conservés. Protection locale contre les doubles soumissions du formulaire de réinitialisation et modification des champs pendant l'opération. Aucun mot de passe envoyé à un service tiers de réputation.

## Réglages serveur à vérifier dans le tableau de bord (non modifiés par le connecteur)
1. Authentication > Sign In / Providers > Email : vérifier et définir le minimum à 12 caractères, confirmer les emails, garder l'inscription anonyme désactivée. Tester le comportement des comptes existants. Préférer les phrases secrètes et mots de passe uniques ; ne pas imposer une rotation périodique arbitraire.
2. Authentication > Attack Protection : vérifier le CAPTCHA actif et le fonctionnement en inscription, connexion et récupération. Ne pas copier la clé secrète dans GitHub.
3. Authentication > Rate Limits : relever les limites effectives. Examiner le quota des requêtes vers /auth/v1/token (inclut les rafraîchissements), les inscriptions et réinitialisations par IP, les vérifications et les emails. Ne pas abaisser globalement les rafraîchissements sans test multi-appareils. Le fournisseur intégré limite les emails à 2/h selon la documentation ; vérifier ce point avant ouverture.
4. Vérifier MFA TOTP administrateur et le parcours de récupération. Examiner la réauthentification avant changement de mot de passe sans modifier un réglage qui casserait le parcours de réinitialisation.
5. Protection native contre mots de passe divulgués : Pro uniquement selon la documentation. Ne pas souscrire. Le filtre local n'est pas une base de mots de passe compromis et ne remplace pas ce contrôle.

## Tests avant publication
Compte fictif uniquement : inscription faible/forte, connexion avec mot de passe existant, CAPTCHA invalide ou expiré, récupération par email, refus de doubles soumissions, délai après rechargement, deux onglets, erreurs 429/503, MFA et déconnexion globale après récupération. Tester directement Auth afin de vérifier la politique serveur. Ne jamais lancer de rafales sur le projet réel. Aucun déploiement Netlify ni achat.

Documentation : https://supabase.com/docs/guides/auth/password-security ; https://supabase.com/docs/guides/auth/rate-limits ; https://supabase.com/docs/guides/deployment/going-into-prod
