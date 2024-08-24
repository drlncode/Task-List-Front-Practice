import { useEffect } from 'react';
import { LangContext } from './langContext';
import { useContextState } from '../../hooks/lang/useContextState';

export function LangProvider({ children }: { children: JSX.Element }) {
    const { lang, changeLang  } = useContextState();

    useEffect(() => {
        window.localStorage.setItem('lang', JSON.stringify(lang));
    }, [lang]);

    return (
        <LangContext.Provider value={{
            lang,
            changeLang
        }}>
            { children }
        </LangContext.Provider>
    )
}