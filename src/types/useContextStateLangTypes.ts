import { LangStructure } from './langObjectStructure';
import { Lang } from './langTypes';

export interface LangStateReturnedProperties {
    lang?: LangStructure;
    changeLang?: ({ newLang }: { newLang: Lang }) => void;
}