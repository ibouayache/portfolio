import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import en from './en';
import fr from './fr';
import ar from './ar';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend) // passes i18n down to react-i18next
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            },
            ar: {
                translation: ar
            }
        },
        // react: {
        //     useSuspense: false,
        //     wait: false
        // },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
