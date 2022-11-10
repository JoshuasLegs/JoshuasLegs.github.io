import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "A GAME BY:": "A game by:",
            "SCROLL UP TO CLIMB": "SCROLL UP TO CLIMB",
            "comingsoon": "Available in Early Access",
            "gameplayTitle": "REWIRE YOUR BRAIN TO CRAWL, CLIMB AND JUMP LIKE A BIPED. CONTROL THE LEGS INDIVIDUALLY WITH THE JOYSTICKS.",
            "webDescription": "USE WEBS TO SWING OR PREVENT FREE FALL",
            "gripDescription": "GRIP ROCKS AND PLATFORMS MIDAIR",
            "gameDescription": "A unique game with devious controls about an arachnid on a quest to find his long lost prosthetic legs",
            "gameDescription2": "VENTURE IN A WORLD THAT WILL ONLY REVEAL ITS SECRETS TO THE TRUE HARDENED CLIMBERS",
            "styleDescription": "A NEW GENERATION OF METROIDVANIA THAT WILL MAKE YOUR THUMBS GO RAW",
            "presskit": "PRESS KIT",
            "mailinglist": "MAILING LIST",

            "descriptionTitle": "Description",
            "description1": "Joshua's Legs is a unique game with devious controls about a two-legged arachnid hoping to find his long lost prosthetic legs collection. Venture in a world that will only reveal its secrets to the true hardened climbers.",
            "description2": "Learn the elegant art of spider acrobatics in this curious game in which you control a two-legged arachnid with your joysticks. Try to stay zen while surmounting some of the hardest obstacles ever encountered by a spider. Achieve absolute finesse, precision, speed, and consistency in order to find all of Joshua's prostheses.",
            "historyTitle": "History",
            "history": "Joshua's Legs idea first began when I was right out of school. I studied Software Engineering with a specialization in Game Design. I initially decided not to work in the video game industry because of its competitive and stressful environment but I have always dreamed of making a video game. When I was writing my first game after my studies, I was all over the place. I wanted my game to be too much of everything. After a few years of software development as a freelance, I decided to open up my old projet Joshua's Legs but changed direction completely to create this hardcore platformer. I was joined by my mom Danielle Tremblay, a lifelong music composer and musician, to create the soundtrack.",

            "logos": "Logos and icons",
            "images": "Images",
            "videos": "Videos",
            "gifs": "GIFs",
            "articles": "Articles",
            "credits": "Credits",
            "credits1": "Game by Francis Côté-Tremblay",
            "credits2": "Music by Danielle Tremblay",
            "contact": "Contact",
            "fonts": "Fonts",
            "palette": "Palette",
            "primary": "Primary: ",
            "primary2": "Primary shadow: ",
            "secondary": "Secondary: "
        }
    },
    fr: {
        translation: {
            "A GAME BY:": "Un jeu par:",
            "SCROLL UP TO CLIMB": "DÉFILEZ VERS LE HAUT POUR GRIMPER",
            "comingsoon": "Disponible en accès anticipé",
            "gameplayTitle": "RECONFIGUREZ VOTRE CERVEAU POUR RAMPER, GRIMPER ET SAUTER COMME UN BIPED. CONTROLLEZ LES PATTES INDIVIDUELLEMENT AVEC LES JOYSTICKS.",
            "webDescription": "UTILISEZ DES TOILES D'ARAIGNÉES POUR VOUS BALANCER OU ÉVITER LA CHUTE LIBRE",
            "gripDescription": "AGRIPPEZ LES ROCHES ET LES PLATFORMES EN PLEIN VOL",
            "gameDescription": "Un jeu unique avec des contrôles sournois à propos d'un arachnide à la recherche de ses prothèses de pattes perdues depuis longtemps",
            "gameDescription2": "AVENTUREZ-VOUS DANS UN MONDE QUI RÉVÈLERA SES SECRETS SEULEMENT AUX VRAIS GRIMPEURS ENDURCIS",
            "styleDescription": "UNE NOUVELLE GÉNÉRATION DE METROIDVANIA QUI RENDRA LA CHAIR DE VOS POUCES À VIF",
            "presskit": "KIT DE PRESSE",
            "mailinglist": "LISTE DE DIFFUSION",

            "descriptionTitle": "Description",
            "description1": "Joshua's Legs est un jeu unique avec des contrôles sournois à propos d'un arachnide à deux pattes qui espère retrouver sa collection de pattes prosthétiques depuis longtemps perdues. Aventurez-vous dans un monde qui révèlera ses secrets seulement aux vrais grimpeurs endurcis.",
            "description2": "Apprenez l’art élégant de l’acrobatie d’araignée dans ce jeu curieux où vous contrôlez un arachnide à deux pattes avec vos joysticks. Tentez de rester zen pendant que vous surmontez les obstacles les plus durs jamais rencontrés par une araignée. Faites preuve de précision, de vitesse et de constance absolue pour trouver toutes les prothèses de Joshua.",
            "historyTitle": "Histoire",
            "history": "L'idée de Joshua's legs à commencé dès que j'ai terminé l'école. J'ai étudié en Génie Logiciel avec concentration en Conception de Jeux Vidéos. J'ai initialement décidé de ne pas travailler dans l'industrie du jeu vidéo à cause de l'environnement compétitif et stressant, mais j'ai toujours rêvé de créer un jeu vidéo. Lorsque j'ai commencé à écrire mon premier jeu après mes études, j'étais un peu éparpillé. Je voulais que mon jeu soit trop de choses à la fois. Après quelques années de developpement logiciel en tant que consultant, j'ai décidé d'ouvrir mon vieux projet Joshua's Legs mais j'ai complètement changé de direction pour créer se platformer hardcore. J'ai été accompagnée par ma mère Danielle Tremblay, une compositrice et musicienne de carrière, pour créer la bande sonore.",

            "logos": "Logos et icones",
            "images": "Images",
            "videos": "Vidéos",
            "gifs": "GIFs",
            "articles": "Articles",
            "credits": "Crédits",
            "credits1": "Jeu par Francis Côté-Tremblay",
            "credits2": "Musique par Danielle Tremblay",
            "contact": "Contact",
            "fonts": "Police de charactères",
            "palette": "Palette",
            "primary": "Primaire: ",
            "primary2": "Ombre primaire: ",
            "secondary": "Secondary: "
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
