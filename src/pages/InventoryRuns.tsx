import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Lock, 
  Unlock, 
  Globe, 
  FileText, 
  Activity, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  History,
  Archive,
  Eye,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';

const InventoryRuns: React.FC = () => {
    const [runs, setRuns] = useState([
        { id: 'RUN-2024-01', year: 2024, status: 'Draft', updated: '2h ago', items: 12, quality: 92 },
        { id: 'RUN-2024-02', year: 2024, status: 'Calculated', updated: 'Yesterday', items: 156, quality: 88 },
        { id: 'RUN-2023-FINAL', year: 2023, status: 'Published', updated: '3 months ago', items: 242, quality: 98 },
        { id: 'RUN-2023-FROZEN', year: 2023, status: 'Frozen', updated: '4 months ago', items: 242, quality: 97 },
    ]);

    const [isFreezing, setIsFreezing] = useState(false);

    return (
        <div className="space-y-8 pb-20">
            <div className="flex justify-between items-end px-2">
                <div>
                    <h1 className="text-[32px] font-black text-forest tracking-[-0.05em] uppercase leading-none italic">Inventory Publication Lifecycle</h1>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4 italic opacity-60">Manage final inventory cycles, data freezing, and synchronized public releases</p>
                </div>
                <Button className="flex items-center gap-4 font-black uppercase text-[10px] h-12 border-none bg-forest text-emerald-400 shadow-2xl shadow-emerald-950/20 tracking-[0.2em] rounded-2xl px-8 italic">
                    <Activity className="w-5 h-5" />
                    Initialize Node Run
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 {[
                    { label: 'Active Drafts', val: '02', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Under Review', val: '05', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
                    { label: 'Frozen Vault', val: '12', icon: Lock, color: 'text-forest', bg: 'bg-mint' },
                    { label: 'Public Cycles', val: '08', icon: Globe, color: 'text-emerald-700', bg: 'bg-emerald-100' },
                 ].map((stat, i) => (
                    <Card key={i} className="p-8 border-none shadow-[0_15px_40px_-10px_rgba(6,78,59,0.06)] rounded-[32px] bg-white flex flex-col justify-between h-40 group hover:translate-y-[-4px] transition-all">
                        <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">{stat.label}</p>
                            <h4 className="text-3xl font-black text-forest italic mt-1">{stat.val}</h4>
                        </div>
                    </Card>
                 ))}
            </div>

            <Card className="border-none bg-white shadow-[0_30px_70px_-15px_rgba(6,78,59,0.1)] overflow-hidden rounded-[48px]">
                <div className="p-8 bg-emerald-50/20 border-b border-emerald-50 flex justify-between items-center group">
                    <div className="flex gap-8">
                        <button className="text-[10px] font-black uppercase tracking-[0.3em] text-forest border-b-4 border-forest pb-2 italic">Active Pipeline</button>
                        <button className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 hover:text-emerald-600 pb-2 italic transition-colors">Archive Node</button>
                    </div>
                    <Button variant="outline" className="h-10 text-[9px] font-black uppercase tracking-widest border-emerald-100 text-forest bg-white rounded-xl shadow-sm italic hover:bg-emerald-50"><RefreshCw className="w-3.5 h-3.5 mr-2" /> Synch Stack</Button>
                </div>

                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-forest text-[11px] font-black uppercase tracking-[0.2em] border-b border-emerald-50 italic">
                                <th className="px-10 py-8">Run Identity Matrix</th>
                                <th className="px-10 py-8">Fiscal Year</th>
                                <th className="px-10 py-8">Status</th>
                                <th className="px-10 py-8">Data Segments</th>
                                <th className="px-10 py-8">Quality Score</th>
                                <th className="px-10 py-8">Last Sync</th>
                                <th className="px-10 py-8 text-right">Node Controls</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-50 italic">
                            {runs.map((run) => (
                                <tr key={run.id} className="hover:bg-emerald-50/40 transition-all group cursor-pointer">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-3 h-3 rounded-full shadow-lg ${
                                                run.status === 'Published' ? 'bg-emerald-500 shadow-emerald-500/50' :
                                                run.status === 'Frozen' ? 'bg-forest shadow-emerald-950/20' :
                                                run.status === 'Calculated' ? 'bg-emerald-400 animate-pulse outline outline-8 outline-emerald-100' : 'bg-amber-500'
                                            }`} />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-black text-forest uppercase tracking-tight leading-none mb-1">{run.id}</span>
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic opacity-60 leading-none">NODE_PROTO_V3.4</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-xs font-black text-forest">{run.year}</td>
                                    <td className="px-10 py-8">
                                        <Badge variant={
                                            run.status === 'Published' ? 'success' :
                                            run.status === 'Frozen' ? 'neutral' :
                                            run.status === 'Calculated' ? 'info' : 'warning'
                                        } className="text-[8px] font-black uppercase px-3 py-1 rounded-md tracking-[0.1em] border-none shadow-sm">{run.status}</Badge>
                                    </td>
                                    <td className="px-10 py-8 text-xs font-black text-emerald-900/60 uppercase tracking-widest">{run.items} <span className="opacity-40">DOCS</span></td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1 w-24 bg-emerald-50 h-1.5 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" style={{ width: `${run.quality}%` }} />
                                            </div>
                                            <span className="text-[11px] font-black text-emerald-700">{run.quality}%</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">{run.updated}</td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" className="p-2.5 h-auto text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all" title="View Details"><Eye className="w-5 h-5" /></Button>
                                            {run.status === 'Calculated' && (
                                                <Button variant="ghost" className="p-2.5 h-auto text-amber-500 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-all" title="Freeze Record" onClick={() => setIsFreezing(true)}><Lock className="w-5 h-5" /></Button>
                                            )}
                                            {(run.status === 'Frozen') && (
                                                <Button variant="ghost" className="p-2.5 h-auto text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all" title="Publish Public"><Globe className="w-5 h-5" /></Button>
                                            )}
                                            <Button variant="ghost" className="p-2.5 h-auto text-gray-300 hover:text-emerald-800 hover:bg-emerald-50 rounded-xl transition-all"><Archive className="w-5 h-5" /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-10 border-none bg-emerald-50/40 rounded-[40px] shadow-[0_20px_50px_-12px_rgba(6,78,59,0.06)] relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xl font-black text-forest uppercase flex items-center gap-4 mb-6 tracking-tighter italic leading-none">
                             <Globe className="w-7 h-7 text-emerald-600" />
                             Public Portal Exposure
                        </h3>
                        <p className="text-[13px] text-gray-500 leading-relaxed font-bold mb-10 italic opacity-70">
                            Configure synchronized sectoral visibility on the <span className="text-emerald-700 font-black underline cursor-pointer hover:text-forest transition-colors">Public Transparency Matrix</span>. Sensitive granular data remains cryptographically restricted.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Sector Totals', active: true },
                                { label: 'District Maps', active: true },
                                { label: 'Raw Data', active: false },
                                { label: 'Methodology', active: true }
                            ].map((toggle, i) => (
                                <div key={i} className={`p-5 rounded-[22px] border flex items-center justify-between transition-all ${toggle.active ? 'bg-white border-emerald-100 shadow-sm' : 'bg-transparent border-emerald-200/50 opacity-40 grayscale'}`}>
                                    <span className="text-[11px] font-black text-forest uppercase tracking-widest italic">{toggle.label}</span>
                                    <div className={`w-12 h-6 rounded-full relative p-1.5 transition-colors cursor-pointer ${toggle.active ? 'bg-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-gray-300'}`}>
                                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transition-all ${toggle.active ? 'ml-auto' : ''}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Globe className="absolute -right-12 -bottom-12 w-48 h-48 text-emerald-500/5 rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                </Card>

                <Card className="p-10 border-none bg-forest rounded-[40px] shadow-2xl shadow-emerald-950/20 text-white relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-xl font-black uppercase flex items-center gap-4 mb-4 tracking-tighter italic leading-none text-emerald-400">
                            <AlertCircle className="w-7 h-7" />
                            Integrity Protocol
                        </h3>
                        <p className="text-[13px] text-emerald-200/60 font-medium italic mb-10 leading-relaxed group-hover:text-emerald-200 transition-colors">Once an inventory run is <span className="text-amber-400 font-black">FROZEN</span>, all data blocks undergo Audit-Hash encryption. Modifications require a multi-sig <span className="font-bold underline text-white cursor-pointer hover:text-emerald-400 transition-colors">Correction Protocol</span>.</p>
                        <div className="mt-auto pt-8 border-t border-white/5">
                             <div className="flex items-center gap-4 text-[10px] font-black uppercase text-emerald-400/40 tracking-[0.3em] italic group-hover:text-emerald-400 transition-colors">
                                 <ShieldCheckIcon className="w-5 h-5 shadow-[0_0_15px_rgba(16,185,129,0.3)]" /> 256-BIT CHAIN VALIDATION ACTIVE
                             </div>
                        </div>
                    </div>
                    <AlertCircle className="absolute -right-12 -bottom-12 w-64 h-64 text-emerald-400/5 rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                </Card>
            </div>

            {isFreezing && (
                <div className="fixed inset-0 bg-forest/80 backdrop-blur-xl z-[100] flex items-center justify-center p-8">
                    <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} className="bg-white rounded-[48px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] max-w-lg w-full overflow-hidden border border-white/10 relative">
                        <div className="p-16 text-center space-y-10">
                            <div className="w-24 h-24 bg-forest text-emerald-400 shadow-2xl shadow-emerald-950/40 rounded-[32px] flex items-center justify-center mx-auto relative group">
                                <Lock className="w-10 h-10 transition-transform group-hover:scale-110" />
                                <div className="absolute inset-0 bg-emerald-400/10 rounded-[32px] animate-ping opacity-20"></div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black text-forest uppercase tracking-tighter italic leading-none">Freeze Node Record?</h2>
                                <p className="text-gray-500 font-bold leading-relaxed italic opacity-80 pt-2">This protocol will encrypt <span className="text-forest font-black">RUN-2024-02</span>. All sectoral submissions will become immutable artifacts for the remainder of the Audit Cycle.</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <Button className="h-16 bg-forest hover:bg-emerald-800 text-emerald-400 border-none font-black uppercase text-[10px] tracking-[0.3em] italic rounded-2xl shadow-2xl shadow-emerald-950/20" onClick={() => setIsFreezing(false)}>Confirm Node Seal</Button>
                                <Button variant="outline" className="h-16 border-emerald-100 text-forest hover:bg-emerald-50 font-black uppercase text-[10px] tracking-[0.3em] italic rounded-2xl" onClick={() => setIsFreezing(false)}>Abort Command</Button>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};


export default InventoryRuns;

const ShieldCheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);
