import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from "../../src/locales/en/translation.json";
import tAr from "../../src/locales/ar/translation.json";

const resources = {
  en: {
    translation: tEn,
  },
  ar: {
    translation: tAr,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
