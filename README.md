# exemples-ts

Pour installer:

    npm install

Note: il est peut-être nécessaire d'installer `ts-node` avec `npm install -g ts-node`
    
Pour exécuter en ligne de commande (l'exemple qui t'intéresse):

    ts-node src/get_students_fetch.ts
    
## Exemples de méthodes HTTP

Il s'agit d'une application Express simplifiée qui montre un exemple pour chaque méthode HTTP disponible.

:warning: Il n'y a aucuns tests et aucune interface graphique ou logique de validation du domaine dans l'exemple. Consultez le [squelette](https://github.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts) pour savoir comment gérer ces dimensions.

Pour démarrer le serveur, à partir de la racine : `ts-node src/http_methods/index.js`

Pour interagir avec l'application, il est recommandé d'utiliser [Postman](https://www.postman.com/) Pour vous aider à démarrer, la documentation du logiciel offre un [tutoriel complet](https://learning.postman.com/docs/sending-requests/requests/).
