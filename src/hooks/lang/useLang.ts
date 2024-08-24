import { useContext } from 'react';
import { LangContext } from '../../contexts/lang/langContext';

export function useLang() {
    const langContext = useContext(LangContext);

    if (!langContext.lang && !langContext.changeLang) {
        throw new Error('Cannot use this hook here. No context provided.');
    }

    return langContext;
}