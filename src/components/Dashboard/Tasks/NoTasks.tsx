import { Status } from '../../../types/statusValueTypes.tsx';
import { Wind } from '../../Icons/Icons.tsx';

export function NoTasks({ filter }: { filter: Status }) {
    const status: Status = filter;

    const messages = {
        all: 'actualmente',
        slope: 'pendientes',
        complete: 'completadas'
    };

    const statusText = messages[status];

    return (
        <div className='text-zinc-500 text-lg flex flex-col justify-center items-center py-32'>
            <Wind />
            <h2>No tienes tareas { statusText }.</h2>
        </div>
    );
}
