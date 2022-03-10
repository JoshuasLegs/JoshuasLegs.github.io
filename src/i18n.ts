import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "A GAME BY:": "A game by:",
            "SCROLL UP TO CLIMB": "SCROLL UP TO CLIMB",
            "gameplayTitle": "REWIRE YOUR BRAIN TO CRAWL, CLIMB AND JUMP LIKE A BIPED",
            "webDescription": "USE WEBS TO SWING OR SAVE YOURSELF IN A FREE FALL",
            "gripDescription": "GRIP ROCKS AND PLATFORMS MIDAIR",
            "gameDescription": "A STRANGE GAME ABOUT AN ARACHNID HOPING TO FIND HIS LONG LOST LEGS",
            "gameDescription2": "VENTURE IN A WORLD THAT WILL ONLY REVEAL ITS SECRETS TO THE TRUE HARDENED CLIMBERS",
            "styleDescription": "A NEW GENERATION OF METROIDVANIA THAT WILL MAKE YOUR THUMBS GO RAW"
        }
    },
    fr: {
        translation: {
            "A GAME BY:": "Un jeu par:",
            "SCROLL UP TO CLIMB": "DÉFILER VERS LE HAUT POUR GRIMPER",
            "gameplayTitle": "RECONFIGURER VOTRE CERVEAU POUR RAMPER, GRIMPER ET SAUTER COMME UN BIPED",
            "webDescription": "UTILISEZ DES TOILES D'ARAIGNÉES POUR VOUS BALANCER OU VOUS SAUVER D'UNE CHUTE LIBRE",
            "gripDescription": "AGRIPPEZ LES ROCHES ET LES PLATFORMES EN PLEIN VOL",
            "gameDescription": "UN JEU ÉTRANGE À PROPOS D'UN ARACHNIDE QUI ESPÈRE RETROUVER SES PATTES LONGTEMPS PERDUES",
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