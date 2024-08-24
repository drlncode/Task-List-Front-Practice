import Dashboard from './components/Dashboard/Dashboard.tsx';
import Header from './components/Header/Header.tsx';
import { TasksProvider } from './contexts/tasks/tasksProvider.tsx';

export function App() {
    return (
        <div className='w-full flex flex-col gap-5' >
            <Header />
            <TasksProvider>
                <Dashboard />
            </TasksProvider>
        </div>
    );
}