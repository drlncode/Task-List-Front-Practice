import { useEffect } from 'react';
import { useContextState } from '../../hooks/tasks/useContextState.ts';
import { TasksContext } from './tasksContext.ts';

export function TasksProvider({ children }: { children: JSX.Element }) {
    const {
        tasks,
        setTask,
        updateTaskState,
        deleteTask,
        clearAllTasks
    } = useContextState();

    useEffect(() => {
        window.localStorage.setItem('userTasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TasksContext.Provider value={{
            tasks,
            setTask,
            updateTaskState,
            deleteTask,
            clearAllTasks
        }}>
            { children }
        </TasksContext.Provider>
    );
}