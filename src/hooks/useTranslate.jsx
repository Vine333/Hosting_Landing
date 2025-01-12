
import React, { useCallback } from "react";
import { translations } from "/public/locales/Translation.js";
import useGlobalStore  from "/src/store/useGlobalStore.js";
import { useShallow } from "zustand/react/shallow";


export const useLanguage = () => {
    const { language, setLanguage } = useGlobalStore(
        useShallow((state) => ({
            language: state.language,
            setLanguage: state.setLanguage,
        }))
    );

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const __i = useCallback(
        (text) => {
            return translations[language]?.[text] || text;
        },
        [language]
    );

    return { language, changeLanguage, __i };
};
