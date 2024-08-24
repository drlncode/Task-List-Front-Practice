import { Status } from './statusValueTypes'

export interface TaskStructure {
    id: string;
    status: Status;
    taskTitle: string;
    taskDesc: string;
    createdAt: number;
}