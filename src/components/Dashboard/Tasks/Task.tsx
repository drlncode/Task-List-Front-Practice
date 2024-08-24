import { TaskStructure } from '../../../types/taskStructure.ts';
import { CheckedBox, SquareCross } from '../../Icons/Icons.tsx';
import { useTasks } from '../../../hooks/tasks/useTasks.ts';

export function Task({ task }: { task: TaskStructure }) {
    const { updateTaskState, deleteTask } = useTasks();

    const handleClickUpdateState = () => {
        if (updateTaskState) {
            updateTaskState({ newState: 'complete', taskId: task.id });
        }
    }

    const handleClikcDeleteTask = () => {
        if (deleteTask) {
            deleteTask({ taskId: task.id });
        }
    }

    const date = new Date(task.createdAt).toLocaleString();
    const status = task.status;
    
    const statusMessage = {
        slope: 'Pendiente',
        complete: 'Completado',
        all: ''
    };
    const statusColor = {
        slope: 'bg-amber-500',
        complete: 'bg-green-500',
        all: ''
    };

    return (
        <div className='bg-zinc-800 py-2 px-4 rounded-sm hover:bg-zinc-700 transition-all relative pb-20'>
            <div className='flex justify-between items-center mb-2'>
                <div className='flex items-center gap-[6px]' >
                    <div className={`${statusColor[status]} w-2 h-2 rounded-full`} ></div>
                    <span>{ statusMessage[status] }</span>
                </div>
                <div className='w-fit flex'>
                    <small className='text-end max-h-10' >{ date }</small>
                </div>
            </div>
            <div className='flex justify-between gap-1'>
                <div className='text-lg font-bold max-w-[320px]'>
                    <h4>{ task.taskTitle }</h4>
                </div>
            </div>
            {
                task.taskDesc.length > 0 && (
                    <div className='italic mt-2 pt-2 border-t border-zinc-500 pb-5' >
                        <p>{ task.taskDesc }</p>
                    </div>
                )
            }
            <div className='flex justify-end gap-2 *:flex *:justify-center *:items-center *:gap-1 absolute bottom-4 right-4 *:transition-all *:duration-300'>
                {task.status !== 'complete' && (
                    <button 
                        onClick={handleClickUpdateState}
                        className='bg-green-500 py-1.5 px-2 rounded hover:bg-green-400'
                    >
                        <span>Completada</span>
                        <CheckedBox />
                    </button>
                )}
                <button 
                    onClick={handleClikcDeleteTask}
                    className='py-1.5 px-2 hover:text-red-600 border border-transparent hover:border-red-600 rounded'
                >
                    <span>Eliminar</span>
                    <SquareCross />
                </button>
            </div>
        </div>
    )
}