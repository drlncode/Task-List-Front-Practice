import { Status } from '../../../types/statusValueTypes.tsx';
import { Wind } from '../../Icons/Icons.tsx';
import { useLang } from '../../../hooks/lang/useLang.ts';

export function NoTasks({ filter }: { filter: Status }) {
    const status: Status = filter;
    const { langText } = useLang();

    const messages = {
        all: langText.main?.manageTasks.noContent.states.all,
        slope: langText.main?.manageTasks.noContent.states.slope,
        complete: langText.main?.manageTasks.noContent.states.complete
    };

    const statusText = messages[status];

    return (
        <div className='text-zinc-500 text-lg flex flex-col justify-center items-center py-32'>
            <Wind />
            <h2>{ langText.main?.manageTasks.noContent.title } { statusText }</h2>
        </div>
    );
}
