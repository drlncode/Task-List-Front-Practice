import { LangStructure } from './langObjectStructure';

export interface LangStateReturnedProperties {
    lang?: LangStructure;
    changeLang?: () => void;
}