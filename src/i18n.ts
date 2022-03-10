import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "A GAME BY:": "A game by:",
            "SCROLL UP TO CLIMB": "SCROLL UP TO CLIMB",
            "gameplayTitle": "YOU WILL NEED TO REWIRE YOUR BRAIN TO CRAWL, CLIMB AND JUMP LIKE A BIPED",
            "webDescription": "OR USE WEBS TO SWING AND CATCH YOURSELF",
            "gripDescription": "GRIP ROCKS AND PLATFORMS MIDAIR",
            "gameDescription": "A STRANGE GAME ABOUT AN ARACHNID LONGING FOR HIS LONG LOST LIMBS",
            "styleDescription": "A NEW GENERATION OF METROIDVANIA THAT WILL MAKE YOUR THUMBS GO RAW"
        }
    },
    fr: {
        translation: {
            "A GAME BY:": "UN JEU PAR:",
            "SCROLL UP TO CLIMB": "DÉFILLER VERS LE HAUT POUR GRIMPER",
            "gameplayTitle": "VOUS AUREZ BESOIN DE RECONFIGURER VOTRE CERVEAU POUR RAMPER, GRIMPER ET SAUTER COMME UN BIPED",
            "webDescription": "OU UTILISER DES TOILES D'ARAIGNÉES POUR VOUS BALANCER OU VOUS RATRAPPER",
            "gripDescription": "AGRIPPER LES ROCHES ET LES PLATFORMES EN PLEIN VOL",
            "gameDescription": "UN JEU ÉTRANGE À PROPOS D'UN ARACHNIDE NOSTALIQUE DE SES JAMBES LONGTEMPS PERDUES",
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