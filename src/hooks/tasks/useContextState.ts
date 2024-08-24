import { useState } from 'react';
import { TaskStructure } from '../../types/taskStructure.ts';
import { Status } from '../../types/statusValueTypes';
import { ReturnedProperties } from '../../types/useContextStateTypes.ts';

export function useContextState(): ReturnedProperties {
    const initialValue: TaskStructure[] = [];

    const [tasks, setTasks] = useState(() => {
        const storagedValue = window.localStorage.getItem('userTasks');
        
        if (storagedValue) {
            const value: TaskStructure[] = JSON.parse(storagedValue);
            return value;
        }

        return initialValue;
    });

    const setTask = ({ taskTitle, taskDesc }: { taskTitle: string, taskDesc: string }) => {
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                status: 'slope',
                taskTitle,
                taskDesc,
                createdAt: Date.now()
            }
        ]);
    }

    const updateTaskState = ({ taskId, newState }: { taskId: string, newState: Status }) => {
        const tasksCopy = structuredClone(tasks);
        const taskToUpdateIndex = tasksCopy.findIndex(task => {
            return task.id === taskId
        });

        if (taskToUpdateIndex === -1) return;

        tasksCopy[taskToUpdateIndex].status = newState;
        setTasks(tasksCopy);
    }

    const deleteTask = ({ taskId }: { taskId: string }) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
    }

    const clearAllTasks = () => {
        setTasks(initialValue);
    }

    return { tasks: tasks, setTask, updateTaskState, deleteTask, clearAllTasks };
}