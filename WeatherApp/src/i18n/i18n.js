import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fr from './fr.json';
import es from './es.json';
import du from './du.json';

const resources = {
    en: {translation: en},
    fr: {translation: fr},
    es: {translation: es},
    du: {translation: du}
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en', // set the default to English
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

    export default i18n;