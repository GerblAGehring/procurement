import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, FileText } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col p-6 space-y-4">
      <h1 className="text-xl font-bold">Procurement AI</h1>
      <nav className="flex flex-col space-y-2">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-300' : 'text-white'}>
          <div className="flex items-center gap-2">
            <Home size={18} /> Home
          </div>
        </NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-300' : 'text-white'}>
          <div className="flex items-center gap-2">
            <LayoutDashboard size={18} /> Dashboard
          </div>
        </NavLink>
        <NavLink to="/bewertung" className={({ isActive }) => isActive ? 'text-blue-300' : 'text-white'}>
          <div className="flex items-center gap-2">
            <FileText size={18} /> Lieferantenbewertung
          </div>
        </NavLink>
      </nav>
    </aside>
  );
};
