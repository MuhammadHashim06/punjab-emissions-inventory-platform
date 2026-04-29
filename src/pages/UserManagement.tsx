import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Users, 
  UserPlus, 
  Search, 
  Building, 
  ShieldCheck, 
  MoreVertical, 
  Mail,
  ShieldAlert,
  ArrowRight,
  Filter,
  UserCog
} from 'lucide-react';
import { MOCK_USERS, DEPARTMENTS } from '../constants';
import { UserRole } from '../types';

const UserManagement: React.FC = () => {
    const [users] = useState(MOCK_USERS);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
                <div>
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase">Identity Governance Node</h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">Provincial access matrices & agency focal point management</p>
                </div>
                <Button className="flex items-center gap-2 font-black uppercase text-[10px] h-11 tracking-[0.2em] bg-forest shadow-xl shadow-emerald-900/10 rounded-xl">
                    <UserPlus className="w-4 h-4" />
                    Provision Officer
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                 {[
                    { label: 'Total Officers', val: '242', color: 'bg-emerald-50 text-emerald-900' },
                    { label: 'Active Sessions', val: '46', color: 'bg-emerald-700 text-white shadow-xl shadow-emerald-900/10' },
                    { label: 'Privileged Nodes', val: '12', color: 'bg-white border border-emerald-100 text-forest' },
                    { label: 'Gov Integrity', val: '100%', color: 'bg-mint text-emerald-800 border border-emerald-100' },
                 ].map((stat, i) => (
                    <Card key={i} className={`p-5 border-none ${stat.color} rounded-2xl`}>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">{stat.label}</p>
                        <h4 className="text-2xl font-black italic">{stat.val}</h4>
                    </Card>
                 ))}
            </div>

            <Card className="border-emerald-50 overflow-hidden shadow-[0_20px_50px_-12px_rgba(6,78,59,0.08)] rounded-3xl bg-white">
                 <div className="p-4 bg-emerald-50/20 border-b border-emerald-50 flex flex-wrap gap-4 items-center">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400" />
                        <input type="text" placeholder="Lookup official identity by UID..." className="w-full pl-10 pr-4 py-2.5 text-xs font-black uppercase bg-white border border-emerald-100 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm tracking-[0.1em]" />
                    </div>
                    <select className="text-[10px] font-black uppercase tracking-widest border border-emerald-100 bg-white rounded-xl px-5 py-2.5 outline-none shadow-sm h-11">
                        <option>All Agencies</option>
                        {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
                    </select>
                    <Button variant="outline" className="h-11 text-[9px] font-black uppercase tracking-[0.2em] border-emerald-100 text-emerald-800 rounded-xl bg-white shadow-sm hover:bg-emerald-50"><Filter className="w-4 h-4 mr-2" /> Tier Filter</Button>
                </div>

                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-emerald-50/10 text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] border-b border-emerald-50">
                                <th className="px-6 py-6">Official Identity</th>
                                <th className="px-6 py-6">Economic Agency</th>
                                <th className="px-6 py-6">Governance Tier</th>
                                <th className="px-6 py-6">Sync Status</th>
                                <th className="px-6 py-6 font-black italic">Recent Node Activity</th>
                                <th className="px-6 py-6 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-emerald-50/30 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-[18px] bg-emerald-50 flex items-center justify-center text-xs font-black text-emerald-800 uppercase tracking-tighter italic border-2 border-white shadow-xl shadow-emerald-900/5 group-hover:bg-forest group-hover:text-emerald-400 transition-all duration-300">
                                                {user.name.charAt(0)}{user.name.split(' ')[1]?.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[11px] font-black text-forest uppercase tracking-tight leading-none mb-1.5 group-hover:text-emerald-600 transition-colors">{user.name}</span>
                                                <span className="text-[9px] font-black text-gray-400 flex items-center gap-2 uppercase tracking-widest">
                                                    <Mail className="w-3 h-3 text-emerald-400" /> {user.email}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2.5">
                                             <div className="p-1.5 bg-emerald-50 rounded-lg">
                                                 <Building className="w-3 h-3 text-emerald-600" />
                                             </div>
                                             <span className="text-[10px] font-black text-gray-500 uppercase italic tracking-widest">{user.department || 'Central Integrity Hub'}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-emerald-100 rounded-xl w-fit shadow-lg shadow-emerald-900/5 select-none">
                                            <ShieldAlert className={`w-3.5 h-3.5 ${user.role === UserRole.ADMIN ? 'text-forest animate-pulse' : 'text-emerald-500'}`} />
                                            <span className="text-[9px] font-black uppercase text-forest tracking-widest">{user.role}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                            <span className="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em] italic">Encrypted Connection</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-[10px] font-black text-emerald-700 italic tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">Node_Log: 2h 14m ago</td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex items-center gap-2 justify-end opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                                            <Button variant="ghost" className="p-2.5 h-auto text-gray-300 hover:text-forest transition-colors rounded-xl hover:bg-emerald-100" title="Modify Permissions"><UserCog className="w-4 h-4" /></Button>
                                            <Button variant="ghost" className="p-2.5 h-auto text-gray-300 hover:text-forest transition-colors rounded-xl hover:bg-emerald-100"><MoreVertical className="w-4 h-4" /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 bg-emerald-50/20 border-t border-emerald-50 flex justify-center">
                     <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 group text-gray-400 hover:text-forest">
                        Official Identity Registry Fullsync <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Button>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-8 border-emerald-50 bg-mint/50 shadow-xl rounded-[32px]">
                     <h3 className="text-sm font-black text-forest uppercase flex items-center gap-3 mb-6 tracking-[0.2em]">
                          <ShieldCheck className="w-5 h-5 text-emerald-600" />
                          RBAC Governance Directive
                     </h3>
                     <p className="text-xs text-gray-500 leading-relaxed font-bold italic mb-8 uppercase tracking-tight">Identity provisioning is strictly governed by hierarchical department mandates. Permission mutation requires <span className="text-forest underline">Root-Hash verification</span>.</p>
                     <div className="space-y-4">
                         <div className="flex items-center justify-between p-4 bg-white border border-emerald-50 rounded-2xl shadow-inner group cursor-pointer hover:border-emerald-200 transition-all">
                            <span className="text-[9px] font-black uppercase text-gray-400 group-hover:text-forest transition-colors tracking-widest">Biometric MFA Mandate</span>
                            <div className="w-10 h-5 bg-emerald-600 rounded-full flex items-center justify-end p-1 shrink-0 shadow-lg shadow-emerald-900/20"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                         </div>
                         <div className="flex items-center justify-between p-4 bg-white border border-emerald-50 rounded-2xl shadow-inner group cursor-pointer hover:border-emerald-200 transition-all">
                            <span className="text-[9px] font-black uppercase text-gray-400 group-hover:text-forest transition-colors tracking-widest">Cross-Agency Visibility</span>
                            <div className="w-10 h-5 bg-gray-200 rounded-full flex items-center p-1 shrink-0"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                         </div>
                     </div>
                </Card>

                <Card className="p-8 relative overflow-hidden bg-forest shadow-2xl rounded-[32px] group">
                    <div className="relative z-10 flex flex-col h-full text-white">
                         <h3 className="text-sm font-black uppercase flex items-center gap-3 mb-8 tracking-[0.2em] text-emerald-400">
                             Agency Sync Monitor
                         </h3>
                         <div className="space-y-4 mb-8">
                             <div className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                                 <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest">E.P.D Focal Node</span>
                                 <span className="text-[10px] font-black text-emerald-400 italic">:: OPERATIONAL</span>
                             </div>
                             <div className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md opacity-40">
                                 <span className="text-[10px] font-black text-emerald-100 uppercase tracking-widest">Agri-Stats Terminal</span>
                                 <span className="text-[10px] font-black text-rose-400 italic">:: L3-LOCKOUT</span>
                             </div>
                         </div>
                         <Button className="mt-auto bg-emerald-500 border-none font-black text-[10px] uppercase tracking-[0.2em] py-4 rounded-2xl shadow-xl shadow-emerald-950/20 transform active:scale-95 transition-all">Global Node Integrity Sync</Button>
                    </div>
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-[60px]"></div>
                    <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-[60px]"></div>
                </Card>
            </div>
        </div>
    );
};


export default UserManagement;
