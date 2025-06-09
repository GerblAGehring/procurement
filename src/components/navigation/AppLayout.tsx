import { Outlet } from 'react-router-dom';
import { Sidebar } from '../layout/Sidebar';

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};
