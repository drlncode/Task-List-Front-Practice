import Dashboard from './components/Dashboard/Dashboard.tsx';
import Header from './components/Header/Header.tsx';
import { TasksProvider } from './contexts/tasks/tasksProvider.tsx';
import { LangProvider } from './contexts/lang/langProvider.tsx';

export function App() {
    return (
        <div className='w-full flex flex-col gap-5' >
            <LangProvider>
                <>
                    <Header />
                    <TasksProvider>
                        <Dashboard />
                    </TasksProvider>
                </>
            </LangProvider>
        </div>
    );
}