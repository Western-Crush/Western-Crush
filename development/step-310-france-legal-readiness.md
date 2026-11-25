# Western Crush — Dossier de préparation France
25 novembre 2026 · Projet de travail, non approuvé · Aucun lancement ni engagement financier

## 1. Périmètre et décision de lancement
PWA web, France d'abord. Adultes uniquement. Application privée, abonnement fictif. Les États-Unis et boutiques natives ne font pas partie de cette première ouverture. Ne pas annoncer une disponibilité dans les stores ou une identité vérifiée sans preuve. La décision de mise en production appartient à l'exploitant après levée des blocages.
Sources techniques : legal.html (brouillon 0.2), app.js V18.12, résultats des tests serveur 307 et préparation Stripe 308.

## 2. Registre de traitements — projet à compléter
| Traitement | Données minimales / personnes | Finalité et base envisagée | Accès / destinataires | Conservation proposée à valider |
|---|---|---|---|---|
| Authentification | Email, identifiant, sessions, confirmation; membres | Exécution du service; sécurité intérêt légitime à documenter | Supabase, personnel habilité | Durée du compte, puis suppression selon procédure; journaux et sauvegardes à documenter |
| Profil et découverte | Pseudo, âge déclaré, ville, centre de commune, genre et préférences, bio, photos | Service; exception art. 9 distincte si données sensibles | Membres autorisés, Supabase; modération habilitée | Jusqu'au retrait/suppression, sauf conservation légalement justifiée |
| Likes, matchs, messages | Identifiants, interactions, contenu des échanges | Service; sécurité selon nécessité | Participants autorisés et accès exceptionnel justifié | Règles de suppression et copies de tiers à valider |
| Modération et sécurité | Signalements, décisions, recours, présence, compteurs anti-abus, journaux | Intérêt légitime évalué et obligations applicables | Personnel habilité; prestataires techniques et autorités si nécessaire | Seuils de réexamen existants: 6 mois incidents, 12 mois décisions/recours, 30 jours présence/anti-abus, 90 jours notifications lues; pas de purge automatique |
| Droits RGPD | Demandes, décisions, justificatifs strictement nécessaires | Obligations légales | Personnel habilité | Durée probatoire à définir, délai initial de réponse d'un mois |
| Abonnement | Plan, devise, statut, référence Stripe; clients | Contrat et obligations comptables | Stripe, Supabase, personnel habilité | Comptabilité: durée légale applicable; autres références à minimiser |
| Majorité (futur) | Preuve minimale 18+, référence technique et durée de validité | Base et nécessité à documenter | Prestataire à contractualiser, serveur habilité | Pas de copie de pièce d'identité dans Western Crush; durée à valider |
| Shérif IA | Compteurs agrégés de sécurité et délais RGPD | Assistance administrative; intérêt légitime à évaluer | Administrateur authentifié; modèle local facultatif | Pas de conservation supplémentaire prévue dans le code; vérifier comportement réel du navigateur |
| Préférences interface | Langue, unité, session; membres | Service et préférences demandées | Navigateur, prestataires nécessaires | Durées effectives à inventorier |

La base légale de chaque traitement, les catégories exactes, sous-traitants, transferts internationaux, sauvegardes, personnes habilitées et mesures de sécurité doivent être confirmés. Les champs libres, genre et interactions peuvent révéler des informations sensibles même sans champ explicite d'orientation. Le retrait du champ looking_for de l'interface ne suffit pas à conclure que toute collecte sensible a cessé. Examiner les anciennes valeurs et les déductions; ne pas utiliser ces informations pour ciblage publicitaire.
Ne pas confondre demande RGPD de retrait du consentement avec rétractation commerciale.

## 3. AIPD — analyse initiale à approfondir
| Risque pour les personnes | Mesures existantes identifiées | Travail restant / risque résiduel |
|---|---|---|
| Divulgation d'intimité, orientation ou messages | RLS, refus d'accès tiers testé, blocage | Audit des champs libres, export des données de tiers, accès administratifs et sauvegardes; élevé tant que non validé |
| Harcèlement, escroquerie, usurpation | Signalements, blocage, suspension, recours | Procédures humaines, délais, escalade et test en conditions réelles |
| Mineurs et exploitation | Déclaration 18+, contrôle des signalements | Prestataire de majorité non opérationnel; test de contournement et recours; blocage de lancement |
| Réidentification par localisation | Centre de commune et distances approximatives annoncés | Vérifier précision réelle, accès et cumul des filtres; empêcher traque |
| Photos non consenties ou illicites | Validation technique, revue et retrait; permissions testées sur métadonnées | Détection, qualité du décodage, traitement humain et procédure autorités; pas de promesse de détection automatique |
| Compromission administrative | Session et MFA, tests simulés | Test réel MFA, récupération, droits minimaux, réponse aux incidents |
| Abonnement ou remboursement incorrect | Stripe test, verrou de clé, webhook signé | Tests complets; résiliation et rétractation distinctes; production isolée |
| Recommandation Shérif IA erronée | Compteurs agrégés, aucune action autonome | Tester modèle local et diagnostic; supervision humaine; ne pas utiliser pour décisions individuelles |

Avant validation AIPD: décrire nécessité/proportionnalité, flux et mesures; coter vraisemblance et gravité avant/après; recueillir avis pertinents; signer la décision et prévoir réexamen. Si risque élevé persistant, examiner consultation préalable CNIL (art. 36). Ce document est une ébauche, non une AIPD achevée.

## 4. Parcours consommateur à construire en bac à sable
### Résilier le contrat
Accès direct et gratuit, intitulé sans ambiguïté, y compris pour membre suspendu ou sans accès normal à son compte; identification proportionnée; récapitulatif de contrat, date souhaitée et conséquences; bouton de notification; accusé sur support durable, date de fin et suivi. Tester le portail Stripe, mais ne pas supposer qu'il satisfait seul toutes les exigences françaises. Aucun compte ne doit être obligé de racheter un abonnement pour résilier.
### Se rétracter (distinct)
Fonction clairement identifiable pendant délai légal (14 jours pour service à distance en principe), identité, référence de contrat, déclaration explicite, confirmation de rétractation et accusé durable avec contenu/date/heure. Vérifier demande expresse d'exécution anticipée et calcul proportionnel légal si applicable; remboursement via processus contrôlé, pas d'automatisation financière en bêta. Le formulaire légal type et les informations précontractuelles doivent rester accessibles.
### Avant achat
Afficher prix total TTC, récurrence, durée, renouvellement, résiliation, droit de rétractation, garanties, support et médiateur; consentement explicite à une obligation de paiement et confirmation durable. Aucun prix réel ni activation avant approbation. Séparer les abonnements fictifs et réels.
### Tests d'acceptation
Résiliation immédiate/à échéance selon droits, membre suspendu, double soumission, rétractation dans/hors délai, accusé durable, remboursement contrôlé, échec webhook, accès sans session normale, revue juridique. Tous restent à valider en vrai parcours.

## 5. DSA et modération
Qualifier le service (hébergement de contenus et éventuellement plateforme en ligne), vérifier les obligations applicables et exemptions selon taille. Ne pas assimiler micro-entrepreneur français à exemption totale. Prévoir canal de notification accessible aux tiers lorsque requis, informations suffisantes, accusé, décision motivée, recours applicable, points de contact autorités/utilisateurs, procédure contenu illicite et menaces graves; examiner obligations de transparence. Les outils existants de signalement interne ne constituent pas à eux seuls une conformité DSA.

## 6. Blocages et pièces à réunir
- Justificatif RNE/Sirene officiel, activité déclarée adaptée, régime TVA et identité opérateur; chiffres déclarés passent un contrôle de clé arithmétique mais aucune certification administrative.
- Téléphone professionnel et coordonnées exactes des hébergeurs/entités contractantes.
- Médiateur de consommation conventionné: vérifier compétence et tarifs avant accord; aucune souscription effectuée. Ne pas inscrire un médiateur sans convention.
- Documents FR définitifs, CGU versionnées: app.js enregistre beta-0.1 alors que legal.html affiche brouillon 0.2. Prévoir nouvelle version côté serveur, historique des textes et nouvel accusé explicite, sans requalifier les anciennes lectures. Ne pas modifier le numéro d'acceptation seul.
- Registre/AIPD, politique de conservation et transferts, contrats prestataires, droits, incidents et conformité.
- Stripe : approbation activité rencontres et virements encore bloqués au dernier contrôle; ne pas activer le réel.
- AgeVerif : fonctionnement réel non confirmé. Attendre spécifications et tester avant ouverture.
- Tests Android/iPhone/PC, admin 2FA, flux VIP USD de test si conservé, sécurité et audit Edge; Shérif IA V18.12 pas encore confirmé sur le déploiement Netlify courant.
- Les éventuels frais obligatoires ultérieurs (médiation, boutiques, hébergement, vérification) sont à vérifier et faire approuver avant engagement.

## Sources officielles
- Service Public, mentions obligatoires : https://entreprendre.service-public.gouv.fr/vosdroits/F37351
- Service Public, commerce en ligne : https://entreprendre.service-public.gouv.fr/vosdroits/F23455
- Service Public, CGV : https://entreprendre.service-public.gouv.fr/vosdroits/F33527
- Service Public, médiation : https://entreprendre.service-public.gouv.fr/vosdroits/F33338
- CNIL, rencontres : https://www.cnil.fr/fr/sites-et-applications-de-rencontres-comment-proteger-votre-intimite
- CNIL, données sensibles et gestion commerciale : https://www.cnil.fr/fr/questions-reponses-sur-les-referentiels-relatifs-la-gestion-des-activites-commerciales-et-des
- RGPD : https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra
- DSA : https://eur-lex.europa.eu/eli/reg/2022/2065/oj?locale=fr
