# exemples-ts

Pour installer:

    npm install

Note: 
- il est peut-être nécessaire d'installer `ts-node et typescript` avec `npm install -g ts-node typescript`
- Si vous avez une erreur de `npm ERR! Cannot read property 'match' of undefined` pendant l'installation, juste supprimer le fichier `package-lock.json`, puis relancer l'installation.
    
Pour exécuter en ligne de commande (l'exemple qui t'intéresse):

    ts-node src/SGB_fetch_students.ts
    
## Exemples de méthodes HTTP

Il s'agit d'une application Express simplifiée qui montre un exemple pour chaque méthode HTTP disponible.

:warning: Il n'y a aucun test et aucune interface graphique ou logique de validation du domaine dans l'exemple. Consultez le [squelette](https://github.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts) pour savoir comment gérer ces dimensions.

Pour démarrer le serveur, à partir de la racine : `ts-node src/http_methods/index.ts`

Pour interagir avec l'application, il est recommandé d'utiliser [Postman](https://www.postman.com/) Pour vous aider à démarrer, la documentation du logiciel offre un [tutoriel complet](https://learning.postman.com/docs/sending-requests/requests/).


# jest Expect

https://jestjs.io/docs/en/expect

Pour interagir avec l'application, il est recommandé d'utiliser [Postman](https://www.postman.com/). Pour vous aider à démarrer, la documentation du logiciel offre un [tutoriel complet](https://learning.postman.com/docs/sending-requests/requests/).
## Exemples d'interface utilisateur

Il s'agit d'une application Express simplifiée qui montre un exemple pour changer de page.

Pour démarrer le serveur, à partir de la racine : `ts-node src/ui/index.ts`

## Débogage dans VSCode

- Cliquer le bouton à gauche pour déboguer (ou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>) **>** **JavaScript Debug Terminal**
- Activer les points d'arrêt (*breakpoints*) dans le code source au besoin.
- Dans le terminal du débogueur, lancer le code TypeScript comme avant avec la commande `ts-node`

Voir [comment déboguer (page de VSCode)](https://code.visualstudio.com/docs/editor/debugging).
