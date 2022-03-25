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
            "styleDescription": "A NEW GENERATION OF METROIDVANIA THAT WILL MAKE YOUR THUMBS GO RAW"
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
            "styleDescription": "UNE NOUVELLE GÉNÉRATION DE METROIDVANIA QUI RENDRA LA CHAIR DE VOS POUCES À VIF",
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
