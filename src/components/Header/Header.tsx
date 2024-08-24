import { ChangeEvent } from 'react';
import { useLang } from '../../hooks/lang/useLang';
import { LangIcon } from '../Icons/Icons';
import { Lang } from '../../types/langTypes';

export default function Header() {
    const { lang, langText, changeLang } = useLang();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        if (changeLang) changeLang({ newLang: newLang as Lang });
    }

    return (
        <header className='w-full h-20 flex justify-between items-center border-b border-zinc-500 px-14'>
            <div>
                <h1 className='text-lg' >{ langText?.header?.title }</h1>
            </div>
            <div className='flex justify-center items-center gap-1' >
                <LangIcon />
                <select name="lang" onChange={handleChange} value={ lang?.currentLang } >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
        </header>
    );
}