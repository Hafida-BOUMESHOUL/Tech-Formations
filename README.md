# Rapport de Tech Formations
## Sommaire : 
+ Présentation de l’application :
+ Présentation des interfaces de l’application :
	-Authentication: login & registration
	-Dashboard
	-Details
	-Summary
+ Technologies utilisées
	-Angular
	-Ionic
+Gestion de Base de données : 
	-Firebase
+ Environnement et outils de travail :
	-Visual Studio Code
	-Firebase Console
# Présentation de l’application :
C’est une application mobile sous nom ‘Tech Formations’ qui liste un nombre de formations en programmation, l’utilisateur peut choisir le langage (ou framework) pour s’inscrire à la formation. 
## Interfaces de l’application : 
### -Authentication (login & registration)

![image](https://user-images.githubusercontent.com/81646153/165180269-0a764f46-b8f0-4236-bfb6-adf5e1e38d1d.png)

### -Interface Register :

![image](https://user-images.githubusercontent.com/81646153/165181644-75dca688-aa5c-4314-8414-f9b6c9194180.png)

Cette interface permet a l’utilisateur de créer un compte pour accéder aux formations fournies par l’application, en indiquant un email valide et un mot de passe.
Si l’utilisateur n’indique pas un email valide, l’alerte suivante est affichée :

![image](https://user-images.githubusercontent.com/81646153/165181671-ecce4812-6eec-4737-8e3c-ec009c81cd82.png)

### -Interface Login :
Une fois le compte est créé, l’utilisateur peut faire le login a partir de l’email et le mot de passe déjà indiqués dans l’interface Register.

![image](https://user-images.githubusercontent.com/81646153/165181688-c5a07a67-8243-4b4f-8bd3-b0afcbe1b5a4.png)

Si l’utilisateur n’a pas fait Register, cad il essai de se connecter avec un compte qui n’existe pas, alors, l’alerte suivante est affichée :

![image](https://user-images.githubusercontent.com/81646153/165181705-d4e516d5-9753-4b77-becc-97332a5008b1.png)

Si l’utilisateur se trompe dans le mot de passe, l’alerte suivante s’affiche :

![image](https://user-images.githubusercontent.com/81646153/165181734-dc7fabaf-a573-4126-bd92-dc0b1fe845c6.png)

L'utilisateur peut aussi se connecter avec Google pour faciliter le login.
###-Interface Dashboard :

![image](https://user-images.githubusercontent.com/81646153/165181759-20bd3872-5baf-45de-b13c-4591c5fa04d7.png)

Cette interface affiche la liste des formations disponible dans l’application, le bouton ‘More’ nous dirige vers l’interface ‘Details’ de chaque formation, et le bouton ‘Logout’ permet la déconnexion et direction vers la page ‘Login’
### -Interface Details :

![image](https://user-images.githubusercontent.com/81646153/165181775-5527df3f-4c9d-4231-ac32-517c07939515.png)

Cette interface affiche les détails de la formation sélectionnée comme il est illustré dans la figure ci-dessus.
Le bouton ‘Enroll Now’ affiche une alerte de confirmation avant de s’inscrire à la formation.

![image](https://user-images.githubusercontent.com/81646153/165181788-de423142-175a-4e19-aac6-52b06393b3d1.png)

### -Interface Summary :

![image](https://user-images.githubusercontent.com/81646153/165181806-76f55f88-9c8a-4814-abbd-c4812f19b98d.png)

Une fois l’utilisateur a confirmé l’inscription à la formation, l’interface ‘Summary’ lui affiche ses informations personnelles et celles de la formation choisie.
#+Gestion de base de donnees :

![image](https://user-images.githubusercontent.com/81646153/165181817-340cecb2-63c9-4ab3-9dbe-d0340f08bf52.png)

Firebase est un ensemble de services d'hébergement pour n'importe quel type d'application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). Il propose d'héberger en NoSQL et en temps réel des bases de données, du contenu, de l'authentification sociale (Google, Facebook, Twitter et Github), et des notifications, ou encore des services, tel que par exemple un serveur de communication temps réel. 

	Les informations sur les formations sont enregistrées dans une collection firebase comme suit :

![image](https://user-images.githubusercontent.com/81646153/165181849-069b17aa-16e5-426c-91e0-66820cfd443b.png)

	Les informations sur les users sont enregistrées dans une collection firebase comme suit :

![image](https://user-images.githubusercontent.com/81646153/165181861-d83eb650-692f-47b0-a1a0-d45a0cfce82a.png)

# Technologies utilisées :
## 	Angular :

![image](https://user-images.githubusercontent.com/81646153/165181873-20e03727-2a5e-4db3-8b7d-2066ffdb89d6.png)

Angular est un framework côté client, open source, basé sur TypeScript. Angular est une réécriture complète d'AngularJS. Il permet la création d’applications Web et plus particulièrement de ce qu’on appelle des « Single Page Applications » : des applications web accessibles via une page web unique qui permet de fluidifier l’expérience utilisateur et d’éviter les chargements de pages à chaque nouvelle action. Le Framework est basé sur une architecture du type MVC et permet donc de séparer les données, le visuel et les actions pour une meilleure gestion des responsabilités.
## Ionic :

![image](https://user-images.githubusercontent.com/81646153/165181887-57740887-447a-4bcd-9e81-f5a860bf91bc.png)

Ionic est un framework open-source créé en 2013 par Max Lynch, Ben Sperry, et Adam Bradley. Basé initialement sur AngularJS et Apache Cordova2, Ionic permet de créer un code multisupport en utilisant des outils Web comme HTML, CSS, JavaScript, afin de générer des applications iOS, Android, Chrome, Windows Phone et bien d'autres.
# + Environnement et outils de travail :
## -	Visual Studio Code

![image](https://user-images.githubusercontent.com/81646153/165182050-22803f14-e0eb-4b91-8e92-f138c6ae009d.png)

Visual Studio Code est un éditeur de code source qui peut être utilisé avec une variété de langages de programmation.
## -	Firebase Console

![image](https://user-images.githubusercontent.com/81646153/165181906-886d1a07-0ed1-4085-b420-87ef13a52f42.png)
