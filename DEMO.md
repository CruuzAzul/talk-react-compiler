Préparation de la démo :
- Préparer le serveur de dev
- IDE ouvert sur le fichier Compils.tsx, avec le plus de code réduit possible => Editeur zoomé
    - 2 autres onglets ouvert, package.json & vite.config.ts
- Console ouverte sur le serveur de dev => Console zoomé
- Démo sur une branche unique pour la conférence => Sans le Compiler d'activé

Étape de la démo : 

- Arrivée sur la page des compils du React Compiler™
- Affichage du nombre de re-rendu avec la touche "R"
- Changer le thème => constater le massacre
- Passer sur l'IDE => Expliquer rapidement le composant Compils.tsx
- Passer sur la console
- Lancer la commande d'healthcheck : npm react-compiler-healthcheck@latest
- Installer le React Compiler : pnpm i babel-plugin-react-compiler@beta
- Retourner sur l'éditeur, aller sur l'onglet de la vite.config
- Ajouter la config activant le compiler : 

```
plugins: [TanstackRouterVite(), react({
    babel: {
        plugins: [
            ['babel-plugin-react-compiler']
        ]
    }
})]
```

- Retourner sur la console, lancer le serveur de dev : pnpm dev
- Retourner sur le React Compiler™
- Réactiver le nombre de re-rendu avec la touche "R"
- Montrer que les cards ne se re-rendent plus avec le thème

- Ouvrir les DevTools
- Montrer le badge Memo ✨
- Aller dans les sources, montrer les 2 versions des sources

- Retourner sur le code
- Ajouter un 'use no memo' en dessous de Compils.tsx
- Montrer sur l'app que ça re-marche pas

- Parler rapidement du mode annotation