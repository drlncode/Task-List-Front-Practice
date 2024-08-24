import { TaskStructure } from '../types/taskStructure.ts';
import { Status } from '../types/statusValueTypes';

export interface ReturnedProperties {
    tasks?: TaskStructure[];
    setTask?: ({ taskTitle, taskDesc }: { taskTitle: string, taskDesc: string }) => void;
    updateTaskState?: ({ taskId, newState }: { taskId: string, newState: Status }) => void;
    deleteTask?: ({ taskId }: { taskId: string }) => void;
    clearAllTasks?: () => void;
}