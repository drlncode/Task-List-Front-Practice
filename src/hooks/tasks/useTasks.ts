import { useContext } from 'react';
import { TasksContext } from '../../contexts/tasks/tasksContext.ts';

export function useTasks() {
    const tasksContext = useContext(TasksContext);

    if (!tasksContext.tasks) {
        throw new Error('No context provided to use this hook.');
    }

    return tasksContext;
}