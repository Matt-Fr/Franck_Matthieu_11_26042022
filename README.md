# Kasa

11eme projet réalisé dans le cadre du parcours développeur d’application front-end d’OpenClassrooms.
Application de réservations d'appartements créée à l’aide de React et React Router (sans aucune autre librairie).
Chaque appartement possède sa propre page avec sa description et une galerie d’image.

Demo Live : https://mattfr-kasa.netlify.app
Maquette Figma : https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=0%3A1

## Technologies

- React
- React Router
- SCSS

### coding Guidelines

https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf

#### Brief

Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

Kasa écrit en rouge avec une maison à la place du premier a
Logo Kasa
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission vous trouvez le récapitulatif suivant dans votre boîte mail :

Objet : Brief refonte site Kasa
De : Laura
À : moi

Hello,
Bienvenue pour ton premier jour !

On est vraiment ravis de te compter parmi nous !
Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.

Je préfère te mettre par écrit quelques éléments de contexte qui t'aideront à te projeter dans ta mission avant notre point de jeudi.

Ton objectif

Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité !

Back-end / data : Le recrutement de la personne en charge du Back-End n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans ce fichier JSON pour que tu puisses construire le Front qui correspond.

Contraintes techniques

Tu trouveras les coding guidelines de Kasa ici.

Voilà j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.

Très bonne journée à toi !

Laura

Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d’informations sur le design et les fonctionnalités du site.

Objet : Fonctionnalité et design
De : Paul
À : moi

Salut,

Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site alors voici les infos clés.

Design

Voici les maquettes sur Figma pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma, Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu.

Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

Pour le défilement des photos dans la galerie (composant Gallery) :
Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image.
S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page.
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
Bon courage pour le développement, j’ai hâte de voir ce que ça va donner !

Paul

Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !
