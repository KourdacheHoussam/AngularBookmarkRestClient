#Angular JS Rest Client:
###Consomation des web services Jersey REST avec Angular JS.


> Dans cet exemple, un client léger est développé avec Angular JS afin de consommer les web services
> déployés du côté serveur. Le lien vers le code déployant les web services:
> [Spring & Jersey web services].
> Nous allons utiliser le module $http d'angular pour effectuer les opérations get/post/delete de http.
	

### Générer la structure de votre projet web Angular JS: 

> nous allons utiliser l'utile de scaffolding de [YEOMAN]. C'est un outil que vous pouvez installer 
> en trois lignes de commande via votre console et ainsi générer toute la structure et les dépendances 
> de votre projet Angular . Il suffit de taper la ligne de commande suivante au sein du répertoire de votre projet:

```sh
 $ mkdir mon-projet & cd mon-projet
 $ yo angular
```

> Pour plus d'informations sur l'utilisation de cet outil je vous invite à consulter ce [PDF] ou consulter directement cette
> page qui vous expliquera la démarche à suivre [YEOAMAN].


###### Après génération la structure de votre projet ressemblera à celle-ci:
![alt text](app/images/project-structure.PNG)




###Création de l'application Angular:
> Par défaut un fichier app.js vous a été généré dans le dossier "/app.js".
> Voici son contenu:

```sh

var app=angular.module('angularBookmarkRestClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })      
      .when('/bookmarks', {
        templateUrl:'views/bookmarks.html',
        controller: 'BookmarksrestCtrl'
      })
      .when('/tags', {
        templateUrl:'views/tags.html',
        controller:'TagsrestcontrollerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


```
> Ce code déclare un module avec le mot clé "angular.module" dont le nom "angularBookmarkRestClientApp". Ainsi tout les composants que l'on créera comme par exemple les "factories", les "controllers", les "services" ...etc, seront associé à ce module "app". 

> Puis il lui associe les modules(plugins) angular que vous aviez choisi lors de l'étape de génération. Par exemple: le module ngRoute est utilisé dans la partie configuration de l'app, de sorte à pouvoir utiliser le fournisseur $routeProvider.

> Par la suite, on associe à notre module "app" une configuration. Là il s'agit seulement de configurer les routes, que l'on aurait pu écrire dans un autre fichier, comme par exemple "routes.js" que l'on crée avec la commande suivante:

```sh
$ yo angular:route routes
```
> Par la suite, on rajoute les routes au fournisseur $routeProvider. Pour déclarer une route, on définit le contrôleur et la vue que l'on affichera. Par exemple: à l'url "rest/bookmarks/" on lui associe le contrôleur "BookmarkcontrollerCtrl" et la vue "bookmarks.html".













[Spring & Jersey web services]:https://github.com/KourdacheHoussam/RestBookmarkManager/tree/master/RestBookmarkManager
[PDF]:https://github.com/KourdacheHoussam/Angular/blob/master/CoursFiches/Cours%20introduction%20%C3%A0%20Angular%20JS.pdf
[YEOAMAN]:http://yeoman.io/codelab/install-generators.html
[Cybercratos]:www.cybercratos.com


** Houssam KOURDACHE [Cybercratos]**