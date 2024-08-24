import { ReturnedProperties } from '../../types/useContextStateTypes.ts';
import { createContext } from 'react';

const defaultValue: ReturnedProperties = {}; 
export const TasksContext = createContext(defaultValue);