import { useContext, useState } from 'react';
import { TasksContext } from '../../contexts/tasks/tasksContext.ts';
import { Status } from '../../types/statusValueTypes.ts';

export function useTasksFilter() {
    const [ filter, setFilter ] = useState<Status>('slope');
    const { tasks } = useContext(TasksContext);
    let filtredTasks;

    if (filter !== 'all') {
        filtredTasks = tasks!.filter(task => task.status === filter);
        return { tasks: filtredTasks, filter, setFilter };
    }

    return { tasks, filter, setFilter };
}