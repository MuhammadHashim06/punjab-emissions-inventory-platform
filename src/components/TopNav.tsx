import React from 'react';
import { Search, Bell, History, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const TopNav: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-30 ml-72 shadow-sm">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search data, reports, or districts..." 
            className="w-full bg-gray-50 border border-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
            <History className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-8 w-px bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-gray-800">{user?.name}</p>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">Punjab Admin</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs text-white shadow-sm">
            {user?.name.charAt(0)}{user?.name.split(' ')[1]?.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
