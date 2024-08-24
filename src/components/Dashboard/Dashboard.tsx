import { CreateTasks } from './CreateTasks.tsx';
import { ManageTasks } from './ManageTasks.tsx';

export default function Dashboard() {
    return (
        <main className='flex flex-col px-6 md:flex-row p-4 md:!px-8 flex-grow'>
            <CreateTasks />
            <ManageTasks />
        </main>
    );
}