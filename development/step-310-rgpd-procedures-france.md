# Western Crush — Procédures opérationnelles RGPD France
25 novembre 2026 — projet interne de travail, non approuvé. Complément au dossier France et au brouillon juridique beta-0.3. Aucun changement de CGU, consentement, traitement effectif ou lancement. Ne conserver dans ce dépôt public ni demandes individuelles, ni identifiants de membres, ni preuves, ni secrets.

## 1. Demandes des personnes
Responsable : exploitant EI Elorium Digital ; canal de contact déjà publié dans le brouillon : elorium.digital@gmail.com. L'adresse et l'identité officielles restent à valider.
- Enregistrer la date de réception, un identifiant de dossier interne, le droit exercé, le canal de réponse et l'échéance ; couvrir aussi les demandes par e-mail, les personnes sans session ou suspendues et les demandes visant des données provenant d'un tiers.
- Vérifier l'identité de manière proportionnée ; ne pas exiger systématiquement une pièce d'identité. En cas de doute raisonnable, demander uniquement les éléments nécessaires via un canal sécurisé.
- Répondre sans retard excessif et en principe dans le mois de la réception. Si complexité ou nombre de demandes justifie deux mois supplémentaires, informer la personne et motiver la prolongation dans le premier mois. En cas de refus, préciser motifs, recours CNIL et recours juridictionnel. Gratuité en principe, exceptions strictes de l'article 12.
- Accès : inventorier données du compte, profils, photos, interactions, conversations, signalements, recours, demandes, abonnements, déclarations contractuelles de test, journaux et autres données pertinentes. Examiner droits des tiers ; masquer ce qui doit l'être, sans refuser automatiquement toute la demande. Remettre la copie par canal sécurisé après contrôle humain.
- Portabilité : périmètre de l'article 20 (données fournies, traitement automatisé, consentement ou contrat), format courant lisible par machine ; distinguer du droit d'accès.
- Rectification : corriger l'information inexacte ; si changement de pseudo, âge ou photo, la validation du badge doit être renouvelée. Retrait du consentement : aussi simple que son octroi, distinct de la résiliation ou de la rétractation commerciale. Limitation/opposition : évaluer la base et les motifs, empêcher les traitements concernés si nécessaire.
- Effacement : vérifier obligations légales, litiges, données de tiers et abonnements. Révoquer les sessions avant suppression ; planifier photos, relations, données privées et sauvegardes. Tenir une liste minimale et protégée des effacements à réappliquer après restauration ; définir durée et base de cette liste. Ne pas exécuter d'effacement réel avec les fonctions de simulation. Ne pas promettre une disparition instantanée de toutes les copies.
- Contrôle final : demande traitée, preuve minimale de réponse, délai et éventuelles exceptions documentés ; ne pas stocker le contenu du dossier sur GitHub.
État : interface de droits, export et demandes de test existants selon historique ; exhaustivité, accès sans compte, canal sécurisé de livraison, prolongations, traitement des tiers, preuves et effacement réels restent à tester.

## 2. Registre de conservation — propositions, pas de purge
| Catégorie | Proposition à valider | Déclencheur / méthode | État |
|---|---|---|---|
| Compte, profil, photos | Durée du service puis effacement selon procédure et exceptions | Fermeture, retrait d'une photo, demande valide | Durées d'inactivité et délai de purge à décider |
| Messages / matchs / likes | Durée nécessaire au service ; règles distinctes pour données des autres participants | Retrait, blocage, clôture | Analyse des droits des tiers requise |
| Présence et compteurs anti-abus | Réexamen à 30 jours | Dernière activité ou fenêtre | Seuil existant à vérifier ; pas de purge autorisée |
| Notifications lues | Réexamen à 90 jours | Création | Seuil existant |
| Incidents techniques | Réexamen à 6 mois | Événement | Distinguer violations RGPD, litiges et obligations légales |
| Décisions de modération et recours clos | Réexamen à 12 mois | Décision / clôture | Seuil existant ; pas de purge aveugle |
| Sessions et activité d'inactivité | Tant que nécessaire à la session ; suppression liée à disparition de la session | Fin de session ; vérifier suppression effective | Nouveau mécanisme serveur préparé, déploiement progressif non généralisé |
| Demandes RGPD / preuves d'exercice | Durée probatoire justifiée à fixer | Clôture | Pas de durée validée |
| Demandes de résiliation / rétractation fictives | Durée minimale pour essais, puis purge documentée | Fin des tests | Inventaire export/effacement à compléter |
| Factures / données Stripe | Durées légales propres à la comptabilité ; minimiser les références techniques | Date du document, clôture | Régime comptable/TVA et réel non validés |
| Preuves de majorité | Strict minimum, durée à établir avec le fournisseur | Expiration, clôture | AgeVerif non opérationnel |
| Sauvegardes | Proposition de rotation courte à définir après test (sans effacer l'unique copie valide) | Création du fichier | Copie complète et restauration non réalisées |
Ne pas convertir un seuil de revue en durée automatique. Définir traitement des contentieux, gels légaux, archivage intermédiaire, droits des tiers, restauration, accès et journal des purges avant automatisation.

## 3. Incident et violation de données — procédure d'urgence
1. Ouvrir un dossier dans un registre privé : heure UTC de détection et de prise de connaissance, source, nature, systèmes touchés, faits établis/incertitudes, catégories de données/personnes, ordre de grandeur, conséquences, responsable et actions. Ne pas recopier les messages privés ou secrets dans le registre.
2. Contenir : suspendre uniquement les accès compromis, préserver les journaux et preuves de manière proportionnée, protéger ou faire tourner les secrets compromis, vérifier les sous-traitants. Ne pas supprimer des preuves ni restaurer la production à l'aveugle. Aucun paiement réel.
3. Qualifier : atteinte à la confidentialité, intégrité ou disponibilité de données personnelles ; évaluer vraisemblance et gravité pour les personnes (intimité, harcèlement, usurpation, localisation, mineurs, discrimination).
4. Documenter toute violation même sans notification. Si risque pour les droits et libertés, notifier la CNIL sans retard injustifié, si possible dans les 72 h de prise de connaissance ; si informations incomplètes, notification initiale puis compléments ; motiver le retard éventuel. Si risque élevé, informer les personnes sans retard injustifié sauf exception de l'article 34, avec mesures de protection et contact. Ne pas soumettre une notification fictive.
5. Vérifier la remédiation sur environnement isolé, rétablir de façon progressive, conserver le dossier et décider des améliorations. Les prestataires doivent prévenir le responsable selon les obligations contractuelles.
Exercice fictif à réaliser : photo privée accessible à un tiers. Tester détection, chronologie, décision de risque, message d'information et révocation, sans vraie photo ni envoi externe.
Portail officiel : https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles

## 4. AIPD : compléments à l'analyse initiale
La mise en relation, les champs libres, les photos, le genre, les interactions et la localisation peuvent révéler une intimité ou une orientation même après retrait de looking_for. Évaluer chaque traitement, nécessité, proportionnalité, catégories sensibles, base article 6 et exception article 9, risque de déduction et alternatives. Ne pas utiliser de consentement global ou forcé ; si exception de consentement explicite retenue, permettre un choix distinct, révocable, et une alternative réelle. Aucun ciblage sensible.
Coter gravité et vraisemblance sur une échelle de 1 à 4, avant/après mesures, avec justification et responsable. Les notes ne sont pas des mesures observées et doivent être établies avec l'exploitant ; risques résiduels non validés. Priorités : fuite de messages/photos, exploitation de mineurs, traque par localisation, reprise après sinistre, usurpation, compromission admin, décisions Shérif IA. Si risque élevé résiduel malgré mesures, examiner la consultation préalable CNIL. Évaluer aussi nécessité d'un DPO selon article 37. Réexaminer lors de changement de prestataire, collecte, pays ou fonctionnalité.
Dossier de preuve : cartographie des flux, contrats art. 28, sous-traitants et transferts EEE/hors EEE, mesures et tests, décisions, dates et validation. Ne pas présumer qu'une région UE suffit à exclure tout transfert.

## 5. Traceurs — inventaire de départ
À vérifier sur la version réellement servie, dans un navigateur propre, avant et après authentification : session Supabase, langue/unité, stockage de temporisation, PWA, Turnstile, CDN, liens/portail Stripe et éventuels outils ajoutés. Relever finalité, fournisseur, durée, accès, nécessité et destinataire ; examiner les requêtes réseau et stockage. Les traceurs strictement nécessaires à l'authentification/sécurité ou préférence demandée peuvent être exemptés sous conditions. Les non essentiels nécessitent consentement préalable et retrait aussi simple, le cas échéant. Ne pas déclarer absence de cookies ou de suivi sans inspection. Aucun nouveau traceur installé.

## 6. Rétractation et ouverture commerciale
Article L221-21 en vigueur depuis le 19 juin 2026 : fonctionnalité gratuite en ligne pendant le délai légal pour contrats conclus à distance via interface, distincte de la résiliation. Les parcours actuels sont fictifs : tester identification proportionnée, échéance, accusé durable (contenu/date/heure), remboursement et accès lorsque la session est indisponible avant réel. Ne pas assimiler accusé fictif à preuve de conformité.
France d'abord : vérification RNE, téléphone, hébergeurs, médiateur conventionné, prix TTC/TVA, accords sous-traitants et transferts, AIPD, consentements, sauvegarde, tests réels, AgeVerif et Stripe. Aucun passage en production ou engagement payant. Maintenir le statut de brouillon des textes beta-0.3 ; ne pas modifier les accusés historiques. La protection d'inactivité V18.14 reste à publier et tester.

## Sources officielles vérifiées le 25 novembre 2026
- RGPD : https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra (art. 5, 6, 9, 12–22, 28, 30, 32–37, 44 et suivants)
- CNIL, demandes d'accès : https://www.cnil.fr/fr/repondre-une-demande-de-droit-dacces
- CNIL, AIPD : https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd
- CNIL, registre : https://www.cnil.fr/fr/definition/registre-des-activites-de-traitement
- CNIL, violations : https://www.cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre
- CNIL, traceurs : https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi
- Code de la consommation : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053310520
