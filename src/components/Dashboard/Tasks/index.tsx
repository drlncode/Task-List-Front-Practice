import { Status } from '../../../types/statusValueTypes.ts';
import { TaskStructure } from '../../../types/taskStructure.ts';
import { NoTasks } from './NoTasks.tsx';
import { Task } from './Task.tsx';

export default function Tasks({ tasks, filter }: { tasks: TaskStructure[], filter: Status }) {
    const content = tasks.length
        ? (
            <div className='grid grid-cols-minmax-250-1fr gap-3 mt-5' >
                {
                    tasks.map(task => (
                        <Task task={task} key={task.id} />
                    ))
                }
            </div>
        )
        : <NoTasks filter={filter} />

    return content;
}