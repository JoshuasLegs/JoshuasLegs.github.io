import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "A GAME BY:": "A game by:",
            "SCROLL UP TO CLIMB": "SCROLL UP TO CLIMB",
            "gameplayTitle": "REWIRE YOUR BRAIN TO CRAWL, CLIMB AND JUMP LIKE A BIPED",
            "webDescription": "USE WEBS TO SWING OR PREVENT FREE FALL",
            "gripDescription": "GRIP ROCKS AND PLATFORMS MIDAIR",
            "gameDescription": "A strange game about an arachnid on a quest to find his long lost prosthetic legs",
            "gameDescription2": "VENTURE IN A WORLD THAT WILL ONLY REVEAL ITS SECRETS TO THE TRUE HARDENED CLIMBERS",
            "styleDescription": "A NEW GENERATION OF METROIDVANIA THAT WILL MAKE YOUR THUMBS GO RAW",
            "presskit": "Press kit",

            "descriptionTitle": "Description",
            "description1": "Joshua's Legs is a strange game about an arachnid hoping to find his long lost prosthetic legs collection. Venture in a world that will only reveal its secrets to the true hardened climbers. Follow the marked path or explore the lair to find all of Joshua’s prostheses. Those will allow him to jump, grip and shoot webs to swing or prevent free fall.",
            "description2": "A modern homage to the hardest platformers created",
            "featuresTitle": "Features",
            "feature1": "Rewire your brain to crawl, climb and jump like a biped. Control legs individually with the joysticks.",
            "feature2": "Explore the lair however you want and at your own pace.",
            "feature3": "Collect spider webs to increase your web shooter capacity. Discover new secret areas with your improved reach.",
            "feature4": "Test your skills in speed, finesse, precision and consistency in the final level, procedurally generated and always different with each try. Find one-use webs along the way to help you progress further and further.",
            "feature5": "Listen to an original soundtrack by author Danielle Tremblay. It will help you find your way around this strange world.",
            "historyTitle": "History",
            "history": "Joshua's Legs idea first began when I was right out of school. I studied Software Engineering with a specialization in Game Design. I initially decided not to work in the video game industry because of its competitive and stressful environment but I have always dreamed of making a video game. When I was writing my first game after my studies, I was all over the place. I wanted my game to be too much of everything. After 7 years of software development as a freelance, I decided to open up my old projet Joshua's Legs but changed direction completely to create this hardcore platformer. I was joined by my mom Danielle Tremblay, a lifelong music composer and musician, to create the soundtrack.",

            "logos": "Logos and icons",
            "images": "Images",
            "videos": "Videos",
            "gifs": "GIFs"
        }
    },
    fr: {
        translation: {
            "A GAME BY:": "Un jeu par:",
            "SCROLL UP TO CLIMB": "DÉFILEZ VERS LE HAUT POUR GRIMPER",
            "gameplayTitle": "RECONFIGUREZ VOTRE CERVEAU POUR RAMPER, GRIMPER ET SAUTER COMME UN BIPED",
            "webDescription": "UTILISEZ DES TOILES D'ARAIGNÉES POUR VOUS BALANCER OU ÉVITER LA CHUTE LIBRE",
            "gripDescription": "AGRIPPEZ LES ROCHES ET LES PLATFORMES EN PLEIN VOL",
            "gameDescription": "Un jeu étrange à propos d'un arachnide à la recherche de ses prothèses de pattes perdues depuis longtemps",
            "gameDescription2": "AVENTUREZ-VOUS DANS UN MONDE QUI RÉVÈLERA SES SECRETS SEULEMENT AUX VRAIS GRIMPEURS ENDURCIS",
            "styleDescription": "UNE NOUVELLE GÉNÉRATION DE METROIDVANIA QUI RENDR LA CHAIR DE VOS POUCES À VIF",
            "presskit": "Kit de presse",

            "descriptionTitle": "Description",
            "description1": "Joshua's Legs est un jeu étrange à propos d'un arachnide qui espère retrouver sa collection de pattes prosthétiques depuis longtemps perdues. Aventurez-vous dans un monde qui révèlera ses secrets seulement aux vrais grimpeurs endurcis. Suivez le chemin indiqué ou explorez la tanière pour y trouver toutes les prothèses de Joshua. Celles-ci lui permettront de sauter, s'agripper et lancer des toiles d’araignées pour se balancer ou éviter la chute libre.",
            "description2": "Un hommage moderne aux jeux de type plateforme les plus durs jamais créés.",
            "featuresTitle": "Caractéristiques",
            "feature1": "Configurez votre cerveau pour ramper, grimper et sauter comme un biped. Contrôlez individuellement chaque patte avec les joysticks.",
            "feature2": "Explorez la tanière de la façon que vous désirez et à votre propre rythme.",
            "feature3": "Trouvez les toiles d’araignées pour augmenter la capacité de votre lance-toiles. Découvrez de nouvelles zones secrètes avec votre portée améliorée.",
            "feature4": "Testez vos aptitudes en termes de vitesse, finesse, précision et constance dans le dernier niveau, généré procéduralement et toujours différent à chaque essai. Trouvez des toiles à usage unique sur le chemin pour vous aider à progresser de plus en plus loin.",
            "feature5": "Écoutez la trame sonore originale de la compositrice Danielle Tremblay. L’écoute vous aidera à trouver votre chemin dans ce monde étrange.",
            "historyTitle": "Histoire",
            "history": "L'idée de Joshua's legs à commencé dès que j'ai terminé l'école. J'ai étudié en Génie Logiciel avec concentration en Conception de Jeux Vidéos. J'ai initialement décidé de ne pas travailler dans l'industrie du jeu vidéo à cause de l'environnement compétitif et stressant, mais j'ai toujours rêvé de créer un jeu vidéo. Lorsque j'ai commencé à écrire mon premier jeu après mes études, j'étais un peu éparpillé. Je voulais que mon jeu soit trop de choses à la fois. Après 7 ans de developpement logiciel comme consultant, j'ai décidé d'ouvrir mon vieux projet Joshua's Legs mais j'ai complètement changé de direction pour créer se platformer hardcore. J'ai été accompagnée par ma mère Danielle Tremblay, une compositrice et musicienne de carrière, pour créer la bande sonore.",

            "logos": "Logos et icones",
            "images": "Images",
            "videos": "Vidéos",
            "gifs": "GIFs"
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
