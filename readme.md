# Introduction
Dans ce cours, nous allons apprendre à concevoir un back office en utilisant une architecture API REST avec Node.js, Express, MySQL et Sequelize. Nous allons construire un mini-projet de gestion de bibliothèque pour illustrer les concepts clés.

# Projet : Système de gestion de bibliothèque
Notre système permettra de :
* Gérer les livres (ajouter, lister, mettre à jour, supprimer)
* Gérer les auteurs (ajouter, lister, mettre à jour, supprimer)
* Associer des livres à des auteurs

# Configuration de l'environnement de travail
## Installation des dépendances
Dans le terminal vous allez entrer les commandes :
```
npm init -y
npm install express mysql2 sequelize dotenv
npm install --save-dev nodemon
``` 
## Structure du projet
``` 
BookAPI/
|--- src/
|    |--config/
|    |  |--database.js
``` 

# Modèles
## Qu'est-ce qu'un modèle ?

Un modèle dans le contexte de Sequelzize représente une table dans vore base de donénes.
Il défini la structure des données, les types de champs, et les relations entre différentes tables.
Les modèles permettent d'inetragir avec la base de données de manière orientée objet, sans avoir à écrire de requêtes SQL directement.

# Controleeurs
## Qu'est ce qu'un contoleur ?

un controleur 'est respoasble de la logique métier de votre applicaiton.
Il recoit les requetes de l'utilisateur via les routes, interagit avec les modeles pour accéder ou midifier les donénes, et preprare la reponse à renvoyer.
Les controleurs agissent comme des intermédiaires entre les routes (qui définissent les points d'netreées de l'API) et les modèles (qui représentnt les donénes).

## Comprendre req, res et next
Dans les fonctions de contrôleur, vous rencontrerez souvent tris paremetres importnats: 
1. `req` (Request): 
    * Objet représentn la requête HTTP enntrante
    * Contient des informations sèr ola requete, comme les pareametres d'URL, les en-tetes, les corps de la requete
    * Exempels: req.params, req.query, req.body, req.headers
2. `res` (Response):
    * Objet représentant la réponse HTTP que vptre serveur va renvoyer
    * Fournit des méthodes cpour controler la réponse (définir le statut, les en tetes, envoyer des donénes)
    * Exemples: res.status(), res.json(), res.send(), res.sendFile()
3. `next`:
    * fonction qui passe le contrôel au modleware suivant
    * Utilisé principalement pour la gestion des erruers quand appelée avec un argument
    Exemples: `next()` (passe au modleware suivant), `next(error)` (passe à un gestionnaire d'erreur)

# Routes
## Qu'est ce qu'une route ?

Les routes définissent les points d'entrée de votre API.
Elles spécificent comment votre application répond à déiffernetes requêtes HTTP (GET, POST, PUT, DELETE, etc.) sur différentes URL.
Les routes agissent comme des "aiguilleurs", dirigeant les requêtes vers les contrôleurs appropriés.