import { useState } from 'react';
import { LangStructure } from '../../types/langObjectStructure';

export function useContextState() {
    const [lang, setLang] = useState<LangStructure>(() => {
        const lang = window.localStorage.getItem('lang');

        if (lang) {
            return JSON.parse(lang);
        }

        return { currentLang: 'es' }
    });

    const changeLang = () => {
        if (lang.currentLang === 'es') {
            const newLang = structuredClone(lang);
            newLang.currentLang = 'en';
            setLang(newLang);
            return;
        }

        const newLang = structuredClone(lang);
        newLang.currentLang = 'es';
        setLang(newLang);
    }

    return { lang, changeLang };
}