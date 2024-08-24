import { useContext } from 'react';
import { LangContext } from '../../contexts/lang/langContext.ts';
import { LangMock } from '../../types/LangMockTypes.ts'; 
import SpanishLang from '../../mocks/spanishLang.json';
import EnglishLang from '../../mocks/englishLang.json';

export function useLang() {
    const langContext = useContext(LangContext);
    let langText: LangMock = {};

    if (!langContext.lang && !langContext.changeLang) {
        throw new Error('Cannot use this hook here. No context provided.');
    }

    if (langContext.lang!.currentLang === 'es') {
        langText = SpanishLang;
        return { langText, ...langContext };
    }

    langText = EnglishLang;
    return { langText, ...langContext };
}