# Western Crush — préparation bêta V18.9

Statut : candidate de test, pas de lancement commercial. Paiements Stripe exclusivement sandbox. Pas de données bancaires réelles. Ne pas inviter le grand public tant que les prérequis ne sont pas levés.

## Contrôles réalisés
- Étape 292 : scénarios SQL avec trois profils fictifs et annulation des données de test : likes, matchs, messages, blocage, signalement, droits gratuit/Cowboy/VIP.
- Étape 293 : correction du bouton d'effacement TEST ; contrôle d'autorisation temporaire et confirmation explicite conservés.
- Documents provisoires `legal.html` version beta-0.1 : reconnaissance manuelle après connexion dans Confidentialité ; aucune reconnaissance à la place d'un membre.

## Avant toute ouverture à des testeurs externes
- [ ] Vérifier identité et contact de l'exploitant, modalités de réponse aux demandes de droits, durée de conservation et suppression, contrats de sous-traitance, transferts et analyse d'impact.
- [ ] Inventorier Cloudflare Turnstile, CDN, Stripe, Supabase et GitHub Pages ; vérifier les flux et documenter le traitement.
- [ ] Définir contrôle d'âge, signalement de mineurs, modération, recours et réponse aux incidents.
- [ ] Vérifier inscription, e-mail, CAPTCHA, export JSON, suivi des demandes, suppression TEST autorisée dans un compte fictif distinct ; ne jamais effacer de vrai compte pour un essai.
- [ ] Vérifier photos, deux membres distincts, paiements fictifs EUR/USD, installation Android/iOS, navigateur ordinateur.
- [ ] Examiner les avertissements Supabase, limites Auth, sauvegardes/restauration, supervision et procédure de repli.
- [ ] Mettre en place une restriction d'accès serveur si bêta fermée souhaitée ; la mention bêta seule ne protège pas l'accès.

## Avant commercialisation
- [ ] Finaliser mentions légales, CGU, confidentialité, CGV, médiateur et contacts ; vérifier les marchés et États ciblés, taxes, renouvellement, rétractation et résiliation.
- [ ] Valider la documentation et l'acceptation versionnée des conditions finales, la conformité et les tests techniques ; aucun basculement Stripe réel sans décision explicite.

Les essais historiques ne constituent pas une certification de sécurité ou de conformité.
