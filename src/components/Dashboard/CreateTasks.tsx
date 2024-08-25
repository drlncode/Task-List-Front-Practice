import { FormEvent, useRef } from 'react';
import { ArrowRight, SquarePlus } from '../Icons/Icons.tsx';
import { useTasks } from '../../hooks/tasks/useTasks.ts';
import { useLang } from '../../hooks/lang/useLang.ts';

export function CreateTasks() {
    const taskTitle = useRef<HTMLInputElement>(null);
    const taskDesc = useRef<HTMLTextAreaElement>(null);
    const { setTask } = useTasks();
    const { langText } = useLang();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (taskTitle.current && taskTitle.current.value.length > 3 && taskDesc.current && setTask) {
            setTask({ 
                taskTitle: taskTitle.current.value, 
                taskDesc: taskDesc.current.value 
            });

            taskTitle.current.value = '';
            taskDesc.current.value = '';
        }
    }

    return (
        <section className='w-full md:max-w-[30%] flex flex-col border-b border-zinc-500 mb-4 md:border-b-0 md:mb-0 md:border-r md:border-zinc-500 md:pr-4 pb-8'>
            <div className='flex gap-1 text-xl justify-center md:justify-start items-center mb-7'>
                <div>
                    <SquarePlus />
                </div>
                <h2>{ langText.main?.createTasks.title }</h2>
            </div>
            <form onSubmit={handleSubmit} >
                <div className=''>
                    <label className='flex flex-col gap-2 mb-3' >
                        <span>{ langText.main?.createTasks.form.inputs.firstInput.title }</span>
                        <input 
                            ref={taskTitle}
                            name='taskTitle' 
                            placeholder={ langText.main?.createTasks.form.inputs.firstInput.placeholder } 
                            className='w-full outline-none p-1.5 border border-zinc-500 rounded-sm text-sm'
                        />
                    </label>
                    <label className='flex flex-col gap-2 mb-3' >
                        <span>{ langText.main?.createTasks.form.inputs.secondInput.title }</span>
                        <textarea 
                            ref={taskDesc}
                            name='taskDesc' 
                            placeholder={ langText.main?.createTasks.form.inputs.secondInput.placeholder } 
                            rows={5}
                            className='w-full outline-none p-1.5 border border-zinc-500 rounded-sm text-sm'
                        ></textarea>
                    </label>
                </div>
                <div className='flex justify-end items-center'>
                    <button className='flex justify-center items-center gap-1 py-2 px-3 rounded-[4px] border border-zinc-500 text-sm hover:bg-zinc-500 hover:text-zinc-100 transition-all'>
                        { langText.main?.createTasks.form.buttons.firstButton.label }
                        <div>
                            <ArrowRight />
                        </div>
                    </button>
                </div>
            </form>
        </section>
    );
}
