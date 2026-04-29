import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Database, 
  FileCheck, 
  BarChart3, 
  Map, 
  Settings, 
  LogOut, 
  Users, 
  ShieldCheck, 
  ClipboardList, 
  FlaskConical, 
  BookOpen, 
  Globe, 
  Bell,
  Layers,
  Activity,
  FileText
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { cn } from '../components/ui/BaseComponents';

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', roles: Object.values(UserRole) },
    { name: 'Data Requests', icon: ClipboardList, path: '/data-requests', roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.FOCAL_PERSON, UserRole.GIS_SPECIALIST] },
    { name: 'Submissions', icon: Database, path: '/submissions', roles: [UserRole.FOCAL_PERSON, UserRole.MANAGER, UserRole.GIS_SPECIALIST] },
    { name: 'Emissions Factors', icon: FlaskConical, path: '/factors', roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.GIS_SPECIALIST] },
    { name: 'Methodologies', icon: BookOpen, path: '/methodologies', roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.AUDITOR, UserRole.GIS_SPECIALIST] },
    { name: 'Inventory Runs', icon: Activity, path: '/inventory-runs', roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.GIS_SPECIALIST] },
    { name: 'Calculation Engine', icon: Layers, path: '/calculator', roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.GIS_SPECIALIST] },
    { name: 'GIS Visualization', icon: Map, path: '/gis', roles: Object.values(UserRole) },
    { name: 'Executive Insights', icon: BarChart3, path: '/executive', roles: [UserRole.ADMIN, UserRole.EXECUTIVE, UserRole.MANAGER, UserRole.GIS_SPECIALIST] },
    { name: 'Approvals', icon: FileCheck, path: '/approvals', roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EXECUTIVE] },
    { name: 'Reports & Docs', icon: FileText, path: '/reporting', roles: [UserRole.ADMIN, UserRole.MANAGER, UserRole.EXECUTIVE, UserRole.AUDITOR, UserRole.GIS_SPECIALIST] },
    { name: 'Notifications', icon: Bell, path: '/notifications', roles: Object.values(UserRole) },
    { name: 'Public Portal Draft', icon: Globe, path: '/public-portal', roles: [UserRole.ADMIN, UserRole.MANAGER] },
    { name: 'Audit Logs', icon: ShieldCheck, path: '/audit', roles: [UserRole.ADMIN, UserRole.AUDITOR] },
    { name: 'User Management', icon: Users, path: '/users', roles: [UserRole.ADMIN] },
    { name: 'Settings', icon: Settings, path: '/settings', roles: [UserRole.ADMIN] },
  ];

  const filteredItems = navItems.filter(item => user && item.roles.includes(user.role));

  return (
    <aside className="w-72 bg-forest text-white flex flex-col h-screen fixed left-0 top-0 z-40 border-r border-emerald-800/50">
      <div className="p-6 border-b border-emerald-800/50">
        <h1 className="text-lg font-bold leading-tight">Punjab E-Inventory</h1>
        <p className="text-[10px] text-emerald-300 uppercase tracking-widest font-semibold mt-1">Air Quality & GHG Platform</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-0 space-y-0.5 custom-scrollbar">
        <div className="px-4 mb-2 text-[10px] uppercase text-emerald-400 font-bold tracking-widest opacity-60">CORE OPERATIONS</div>
        {filteredItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              cn(
                "flex items-center gap-3 px-4 py-2.5 transition-all text-sm font-medium border-l-4",
                isActive 
                  ? "bg-white/10 border-emerald-400 text-white" 
                  : "border-transparent text-emerald-50/70 hover:bg-white/5 hover:text-white"
              )
            }
          >
            <item.icon className="w-4 h-4 opacity-70" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-emerald-800/50 space-y-2">
        <div className="flex items-center gap-3 px-3 py-2 mb-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold text-white uppercase italic">
            {user?.name.charAt(0)}
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-semibold truncate">{user?.name}</p>
            <p className="text-[10px] text-emerald-400 uppercase tracking-tighter">{user?.role}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-emerald-300 hover:bg-rose-500/10 hover:text-rose-400 transition-all font-medium"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
