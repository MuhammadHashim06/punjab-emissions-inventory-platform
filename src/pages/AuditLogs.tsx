import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  ShieldCheck, 
  Search, 
  Calendar, 
  Filter, 
  Download, 
  RefreshCw, 
  Eye, 
  Lock, 
  User, 
  Database, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

const AuditLogs: React.FC = () => {
    const logs = [
        { id: 'LOG-4501', time: '2024-04-28 14:15:22', user: 'Zahid Khan', module: 'Auth-Node', action: 'Login CERTIFIED', details: 'IP: 192.168.1.1, Node: Web-Matrix-01' },
        { id: 'LOG-4502', time: '2024-04-28 13:45:10', user: 'Sara Ahmed', module: 'Inventory', action: 'Freeze EPOCH-2023', details: 'Signature Check: SHA-256:8b4f...12a' },
        { id: 'LOG-4503', time: '2024-04-28 12:30:05', user: 'System-Auto', module: 'Aggregator', action: 'Matrix-Run Execute', details: 'Top-Level ID: RUN-24-Ω, Agg: 15420.5 kt' },
        { id: 'LOG-4504', time: '2024-04-28 11:20:00', user: 'Bilal Malik', module: 'Request-Hub', action: 'Draft Initialized', details: 'Target: REQ-005, Industry: Waste-Tier-2' },
        { id: 'LOG-4505', time: '2024-04-28 10:15:33', user: 'Sara Ahmed', module: 'Governance', action: 'Role Provision', details: 'Focal: Asma Bibi, Tier: GIS-L4' },
    ];

    return (
        <div className="space-y-6">
             <div className="flex justify-between items-center px-1">
                <div>
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase whitespace-nowrap">Registry Integrity Ledger</h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1 italic">Cryptographically sealed provincial activity logs and system heuristics</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2 font-black uppercase text-[10px] h-11 tracking-widest border-emerald-100 text-emerald-800 bg-white"><RefreshCw className="w-4 h-4" /> Sync Chain</Button>
                    <Button className="flex items-center gap-2 font-black uppercase text-[10px] h-11 tracking-widest bg-forest text-emerald-400 shadow-xl shadow-emerald-950/10"><Download className="w-4 h-4" /> Export Ledger</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-8 border-none bg-white rounded-3xl shadow-xl shadow-emerald-900/5 relative overflow-hidden group">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-8">
                            <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest italic opacity-50">Operational Nodes</h4>
                            <div className="p-2 bg-emerald-50 rounded-xl group-hover:scale-110 transition-transform">
                                <User className="w-5 h-5 text-emerald-600" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-black text-forest tracking-tighter mb-2 italic">12 <span className="text-xs text-gray-400 font-black tracking-widest uppercase not-italic opacity-40 ml-2">Active Terminals</span></h2>
                        <p className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.3em] leading-none">Status: Zero-Latency Hubs</p>
                    </div>
                </Card>
                <Card className="p-8 border-none bg-mint rounded-3xl shadow-xl shadow-emerald-900/5 group border border-emerald-50">
                    <div className="flex justify-between items-start mb-8">
                        <h4 className="text-[10px] font-black text-emerald-800 uppercase tracking-widest italic opacity-50">Compliance Fidelity</h4>
                        <div className="p-2 bg-emerald-100 rounded-xl group-hover:rotate-12 transition-transform">
                            <ShieldCheck className="w-5 h-5 text-emerald-700" />
                        </div>
                    </div>
                    <h2 className="text-4xl font-black text-forest tracking-tighter mb-2 italic uppercase">100%</h2>
                    <p className="text-[9px] font-black text-emerald-800 uppercase tracking-[0.3em] leading-none italic opacity-60">Provincial Trust Anchor: OK</p>
                </Card>
                <Card className="p-8 bg-forest text-white border-none relative overflow-hidden group shadow-2xl shadow-emerald-950/20 rounded-3xl">
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-8">
                            <h4 className="text-[10px] font-black text-emerald-400/50 uppercase tracking-[0.3em] italic">Chain Root Hash</h4>
                            <RefreshCw className="w-5 h-5 text-emerald-400/50 animate-spin-slow" />
                        </div>
                        <h2 className="text-2xl font-black text-white tracking-tighter mb-2 select-all font-mono italic">0x4F_PK_PN_Ω82</h2>
                        <p className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.3em] leading-none mt-2 opacity-50">Sealed at 14:15:22 GMT+5</p>
                    </div>
                    <Lock className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                </Card>
            </div>

            <Card className="border-emerald-50 overflow-hidden shadow-[0_20px_50px_-12px_rgba(6,78,59,0.06)] rounded-[32px] bg-white">
                <div className="p-4 bg-emerald-50/20 border-b border-emerald-50 flex flex-wrap gap-4 items-center">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="w-3.5 h-3.5 absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400" />
                        <input type="text" placeholder="Lookup logs by UUID, officer focal or action node..." className="w-full pl-12 pr-4 py-3 text-[10px] uppercase font-black tracking-widest bg-white border border-emerald-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:italic" />
                    </div>
                    <Button variant="outline" className="h-12 text-[10px] font-black uppercase tracking-widest border-emerald-100 bg-white text-forest rounded-2xl px-6"><Calendar className="w-4 h-4 mr-2 text-emerald-600" /> Epoch Filter</Button>
                    <Button variant="outline" className="h-12 text-[10px] font-black uppercase tracking-widest border-emerald-100 bg-white text-forest rounded-2xl px-6"><Filter className="w-4 h-4 mr-2 text-emerald-600" /> Module Node</Button>
                </div>

                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-emerald-50/10 text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] border-b border-emerald-50 italic">
                                <th className="px-8 py-6">Unique Event ID</th>
                                <th className="px-8 py-6">Aggregated Timestamp</th>
                                <th className="px-8 py-6">Officer focal</th>
                                <th className="px-8 py-6">System Node</th>
                                <th className="px-8 py-6">Signed Action</th>
                                <th className="px-8 py-6 max-w-[200px]">Payload Digest</th>
                                <th className="px-8 py-6 text-right"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-50">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-emerald-50/40 transition-all group cursor-pointer">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                             <div className="w-1 h-5 bg-emerald-100 rounded-full group-hover:bg-emerald-500 group-hover:scale-y-125 transition-all duration-300"></div>
                                             <span className="text-[11px] font-black text-gray-400 uppercase tracking-tighter group-hover:text-forest transition-colors italic">{log.id}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-[10px] font-black text-gray-500 tracking-widest uppercase italic opacity-60">{log.time}</td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-forest flex items-center justify-center text-[10px] font-black text-emerald-400 italic shadow-lg shadow-emerald-950/20">{log.user.slice(0,2)}</div>
                                            <span className="text-[10px] font-black text-forest uppercase tracking-tight italic">{log.user}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                         <Badge variant="neutral" className="text-[8px] font-black px-3 py-1 border-none bg-emerald-50 text-emerald-700 uppercase tracking-[0.2em] rounded-md shadow-sm">{log.module}</Badge>
                                    </td>
                                    <td className="px-8 py-5">
                                         <span className={`text-[10px] font-black uppercase tracking-[0.1em] italic ${
                                             log.action.includes('CERTIFIED') ? 'text-emerald-600' : 
                                             log.action.includes('EPOCH') ? 'text-forest animate-pulse' : 'text-gray-400'
                                         }`}>{log.action}</span>
                                    </td>
                                    <td className="px-8 py-5">
                                         <p className="text-[9px] font-black text-gray-400 truncate max-w-[150px] select-all group-hover:text-emerald-800 transition-colors uppercase tracking-widest italic opacity-40">"{log.details}"</p>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <Button variant="ghost" className="p-3 h-auto text-gray-300 hover:text-emerald-600 transition-all hover:bg-emerald-50 rounded-xl">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 bg-emerald-50/20 border-t border-emerald-50 flex justify-center">
                    <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 group text-gray-400 hover:text-forest transition-colors h-10 italic">
                        Fetch Historical Sync Ledger <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pb-10">
                <Card className="p-10 border-emerald-50 bg-mint/50 shadow-xl rounded-[40px] relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-sm font-black text-forest uppercase flex items-center gap-4 mb-4 tracking-[0.2em] italic">
                             <Database className="w-5 h-5 text-emerald-600" />
                             Chain Topology Verification
                        </h3>
                        <p className="text-[10px] text-gray-500 font-black leading-relaxed italic mb-8 uppercase tracking-widest opacity-70">The provincial ledger uses a decentralized proof-of-authority model. All activities are immutable and verified against PK-Gov root nodes.</p>
                        <div className="flex gap-4 mt-auto">
                            <Button className="h-12 text-[10px] font-black uppercase px-6 bg-forest text-white rounded-2xl shadow-xl shadow-emerald-950/20 hover:bg-emerald-800 transition-all">Verify Matrix Hash</Button>
                            <Button variant="outline" className="h-12 text-[10px] font-black uppercase px-6 border-emerald-100 bg-white text-emerald-800 rounded-2xl shadow-sm">Audit Protocol</Button>
                        </div>
                    </div>
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px]"></div>
                </Card>
                <Card className="p-10 border-none bg-white shadow-xl rounded-[40px] flex flex-col justify-center">
                    <h3 className="text-sm font-black text-forest uppercase flex items-center gap-4 mb-6 tracking-[0.2em] italic">
                         <Activity className="w-5 h-5 text-emerald-500" />
                         Integrity Sync Status
                    </h3>
                    <div className="flex items-center justify-between mb-4">
                         <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic leading-none">Security Entropy Drift:</span>
                         <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] italic group-hover:animate-pulse">STABLE (0.4ms)</span>
                    </div>
                    <div className="w-full bg-emerald-50 h-2 rounded-full overflow-hidden shadow-inner">
                        <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1, ease: 'easeOut' }} className="h-full bg-forest shadow-[0_0_20px_rgba(6,78,59,0.3)]"></motion.div>
                    </div>
                    <p className="mt-6 text-[9px] font-black text-gray-400 uppercase tracking-widest italic text-center">Global Node Consensus reached across 3 Provincial Datacenters</p>
                </Card>
            </div>
        </div>
    );
};


export default AuditLogs;
