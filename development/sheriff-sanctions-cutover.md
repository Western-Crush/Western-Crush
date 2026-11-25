# Shérif — audit V18.24

## Envoi sécurisé et bascule (à exécuter uniquement après validation de la nouvelle interface)
L'interface V18.24 utilise wc_send_chat_message pour chaque envoi, avec une clé de demande réutilisée en cas d'échec réseau. Le serveur valide la session, le match et le contenu, décide des avertissements et restrictions, et renvoie un état explicite. L'ancien RPC wc_chat_record_attempt n'est plus exécutable par les membres directement.

L'ancienne version publiée utilise encore INSERT sur messages : les protections de contenu et restrictions actives restent appliquées, mais un refus SQL direct ne comptabilise pas les tentatives. Ne pas retirer ses droits d'insertion avant la bascule et les tests réels. Après validation, effectuer sous contrôle administrateur:
```sql
begin;
revoke insert on public.messages from public,anon,authenticated;
revoke insert (id,sender_id,receiver_id,content,created_at,read_at) on public.messages from public,anon,authenticated;
-- Contrôler aussi les privilèges hérités et les privilèges par colonne.
select has_any_column_privilege('authenticated','public.messages','INSERT') as direct_insert_allowed,
has_function_privilege('authenticated','public.wc_send_chat_message(uuid,text,uuid)','EXECUTE') as rpc_allowed;
-- COMMIT uniquement si false / true et tests fonctionnels réussis.
rollback;
```
Exécuter la bascule réelle dans une fenêtre de maintenance après revue des privilèges. Ce script est volontairement non appliqué. Vérifier l'envoi, l'absence de doublons, le refus des insertions directes, la réception et les recours sur plusieurs appareils. Revoir la compatibilité des anciens clients.

## Données personnelles
Export partiel : 500 mesures personnelles et 1 000 décisions de revue, avec indication de dépassement. Pas de clé interne ni d'identité d'administrateur dans l'export automatique. Droit d'accès complémentaire et revue des droits de tiers.
Seuil proposé de réexamen : 90 jours après le dernier événement, hors recours ouverts ; recours en attente : 7 jours. Aucun effacement ni clôture automatique. Seuils à valider selon les finalités, les litiges et les obligations applicables. Le contrôle d'effacement final de test bloque les comptes associés à une mesure ou décision ; procédure humaine d'effacement, anonymisation ou conservation justifiée à finaliser. Ne pas bloquer indéfiniment une demande RGPD.
Référence CNIL : https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees

## Limites
Détection de formulations explicites, non exhaustive et susceptible de faux positifs. Pas de preuve de culpabilité à partir d'un signalement ou d'un simple compteur. Aucun bannissement définitif automatique. Les tentatives bloquées ne sont pas conservées en texte brut ; les décisions humaines nécessitent un contexte suffisant, sinon annulation de la mesure. Aucune publication Netlify, aucun achat.
