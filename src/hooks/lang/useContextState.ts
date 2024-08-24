import { useState } from 'react';
import { Lang } from '../../types/langTypes';
import { LangStructure } from '../../types/langObjectStructure';

export function useContextState() {
    const [lang, setLang] = useState<LangStructure>(() => {
        const lang = window.localStorage.getItem('lang');

        if (lang) {
            return JSON.parse(lang);
        }

        return { currentLang: 'es' }
    });

    const changeLang = ({ newLang }: { newLang: Lang }) => {
        const langCopy = structuredClone(lang);
        langCopy.currentLang = newLang;
        setLang(langCopy);
    }

    return { lang, changeLang };
}