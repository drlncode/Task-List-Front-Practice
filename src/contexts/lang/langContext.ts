import { createContext } from 'react';
import { LangStateReturnedProperties } from '../../types/useContextStateLangTypes';

const defaultValue: LangStateReturnedProperties = {};
export const LangContext = createContext(defaultValue);