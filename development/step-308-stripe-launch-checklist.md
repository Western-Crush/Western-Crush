# Étape 308 — Préparation Stripe (aucune activation réelle)

État : 25 novembre 2026. Environnement de test uniquement. Ce document ne constitue pas une autorisation de bascule.

## Vérifié
- Compte Stripe connecté : environnement de test Western-Crush, livemode=false.
- Tarifs de test précédemment vérifiés : Cowboy 9,99 EUR / mois et 9,99 USD / mois ; VIP 19,99 EUR / mois et 19,99 USD / mois.
- Endpoint de webhook de test activé ; événements checkout, abonnements, factures et changements programmés.
- Edge Functions : create-checkout v11, create-portal-session v4, stripe-webhook v14. Les trois refusent les clés qui ne sont pas de test. Le webhook refuse tout événement non test avant la prise du verrou de synchronisation.
- Aucun changement de compte, prix, facturation ou secret Stripe effectué.
- Vérification du code et essais synthétiques de préfixe des clés ; aucun nouvel essai HTTP de paiement de bout en bout.

## Conditions préalables à une future bascule
- [ ] Approbation explicite Stripe de l'activité de rencontres et état des paiements/virements vérifié sur le compte réel.
- [ ] Vérification de majorité réellement opérationnelle ; sécurité, modération, conformité et tests réels validés.
- [ ] Validation explicite du propriétaire avant toute activation ; lancement France d'abord proposé.
- [ ] Créer/valider un environnement de production séparé (évaluer les quotas et coûts avant tout engagement), ne jamais convertir des données fictives en abonnements payés.
- [ ] Vérifier les produits, tarifs EUR récurrents, informations fiscales, factures et conditions de renouvellement/résiliation ; USD seulement après validation du marché.
- [ ] Configurer les secrets réels uniquement dans un environnement serveur dédié : STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_COWBOY, STRIPE_PRICE_VIP ; ne jamais les commettre ou les partager.
- [ ] Adapter le code de production dans une branche séparée : vérification du mode et du compte attendus, liste blanche de tarifs par devise, webhook dédié avec signature, idempotence et isolation des événements et des données ; aucune activation sur simple remplacement de clé.
- [ ] Tester le parcours Checkout, VIP USD en bac à sable, échec/annulation/3DS, renouvellement, doublons et événements désordonnés, résiliation, réconciliation et remboursement. Vérifier aussi accès aux droits RGPD et accès à la résiliation pour comptes suspendus.
- [ ] Vérifier les exigences de facturation des boutiques si une application native est publiée. PWA web différente.
- [ ] Prévoir arrêt des nouvelles souscriptions sans interrompre le traitement des événements existants ni la résiliation ; documenter la restauration et la surveillance.
- [ ] Ne jamais activer de paiement réel tant que les prérequis ne sont pas levés.

Documentation : https://docs.stripe.com/keys ; https://docs.stripe.com/webhooks ; https://docs.stripe.com/testing ; https://docs.stripe.com/billing/subscriptions/customer-portal .
