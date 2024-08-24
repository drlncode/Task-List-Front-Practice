import { LangContext } from './langContext';
import { useContextState } from '../../hooks/lang/useContextState';

export function LangProvider({ children }: { children: JSX.Element }) {
    const { lang, changeLang  } = useContextState();

    return (
        <LangContext.Provider value={{
            lang,
            changeLang
        }}>
            { children }
        </LangContext.Provider>
    )
}