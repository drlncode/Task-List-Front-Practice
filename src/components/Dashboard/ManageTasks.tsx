import { ChangeEvent } from 'react';
import { useTasksFilter } from '../../hooks/tasks/useTasksFilter.ts';
import { useTasks } from '../../hooks/tasks/useTasks.ts';
import { useLang } from '../../hooks/lang/useLang.ts';
import { List } from '../Icons/Icons.tsx';
import { Erased } from '../Icons/Icons.tsx';
import Tasks from './Tasks/index.tsx';
import { Status } from '../../types/statusValueTypes.ts';

export function ManageTasks() {
    const { clearAllTasks } = useTasks();
    const { langText } = useLang();

    const {
        tasks,
        filter,
        setFilter
    } = useTasksFilter();

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFilter(value as Status);
    }

    const handleClickDeleteAllTasks = () => {
        if (clearAllTasks) {
            clearAllTasks();
        }
    }

    return (
        <section className='flex flex-col flex-grow md:pl-4 text-sm'>
            <div>
                <div className='flex text-xl justify-center items-center gap-1 mb-9'>
                    <div>
                        <List />
                    </div>
                    <h2>{ langText.main?.manageTasks.title }</h2>
                </div>
                <div className='flex items-center mb-5 *:flex *:justify-center *:items-center'>
                    <div className=''>
                        { langText.main?.manageTasks.options.filter.title }
                        <select 
                            className='py-1 px-2 bg-zinc-800 ml-2 flex rounded-sm outline-none'
                            name='status' 
                            onChange={handleChange} 
                        >
                            <option value='slope' >{ langText.main?.manageTasks.options.filter.select.firstOption }</option>
                            <option value='complete' >{ langText.main?.manageTasks.options.filter.select.secondOption }</option>
                            <option value='all'>{ langText.main?.manageTasks.options.filter.select.thirdOption }</option>
                        </select>
                    </div>
                    <div className='ml-4 pl-3 border-l border-l-zinc-500' >
                        <button 
                            className='flex justify-center items-center gap-1'
                            onClick={handleClickDeleteAllTasks}
                        >
                            <Erased />
                            <span>{ langText.main?.manageTasks.options.cleanAll.label }</span>
                        </button>
                    </div>
                </div>
            </div>
            <Tasks tasks={tasks!} filter={filter} />
        </section>
    );
}