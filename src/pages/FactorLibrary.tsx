import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Plus, 
  Search, 
  History, 
  FileEdit, 
  CheckCircle, 
  AlertCircle, 
  FlaskConical, 
  Info,
  Clock,
  ArrowRight
} from 'lucide-react';
import { MOCK_FACTORS, SECTORS, POLLUTANTS } from '../constants';

const FactorLibrary: React.FC = () => {
    const [factors] = useState(MOCK_FACTORS);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
                <div>
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase">Factor & Parameter Matrix</h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1">Multi-tier emission coefficients for provincial accounting</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2 font-black uppercase text-[10px] h-10 tracking-widest border-emerald-100 text-emerald-800"><History className="w-3.5 h-3.5" /> Archive</Button>
                    <Button className="flex items-center gap-2 font-black uppercase text-[10px] h-10 tracking-widest bg-forest shadow-lg shadow-emerald-900/10"><Plus className="w-3.5 h-3.5" /> Registry</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                 {[
                    { label: 'Total Factors', val: '842', color: 'bg-emerald-50 text-emerald-900' },
                    { label: 'Pending Updates', val: '12', color: 'bg-orange-50 text-orange-900' },
                    { label: 'IPCC Compatible', val: '98%', color: 'bg-emerald-700 text-white shadow-xl shadow-emerald-900/10' },
                    { label: 'Custom Regional', val: '46', color: 'bg-white border border-emerald-100 text-forest' },
                 ].map((stat, i) => (
                    <Card key={i} className={`p-4 border-none ${stat.color} rounded-2xl`}>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">{stat.label}</p>
                        <h4 className="text-2xl font-black italic">{stat.val}</h4>
                    </Card>
                 ))}
            </div>

            <Card className="overflow-hidden border-emerald-50 bg-white shadow-xl rounded-3xl">
                <div className="p-4 bg-emerald-50/20 border-b border-emerald-50 flex flex-wrap gap-4 items-center">
                    <div className="relative flex-1 min-w-[200px]">
                        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400" />
                        <input type="text" placeholder="Filter through emission registry..." className="w-full pl-10 pr-4 py-2.5 text-xs font-black uppercase bg-white border border-emerald-100 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 transition-all tracking-widest placeholder:opacity-50" />
                    </div>
                    <select className="text-[10px] font-black uppercase tracking-widest border border-emerald-100 bg-white rounded-xl px-4 py-2.5 outline-none">
                        <option>All Sectors</option>
                        {SECTORS.map(s => <option key={s}>{s}</option>)}
                    </select>
                    <select className="text-[10px] font-black uppercase tracking-widest border border-emerald-100 bg-white rounded-xl px-4 py-2.5 outline-none">
                        <option>All Pollutants</option>
                        {POLLUTANTS.map(p => <option key={p}>{p}</option>)}
                    </select>
                </div>

                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-emerald-50/10 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-emerald-50">
                                <th className="px-6 py-5">UID Reference</th>
                                <th className="px-6 py-5">Economic Activity</th>
                                <th className="px-6 py-5">Pollutant</th>
                                <th className="px-6 py-5">Coefficient / Unit</th>
                                <th className="px-6 py-5">Integrity Node</th>
                                <th className="px-6 py-5">Protocol Date</th>
                                <th className="px-6 py-5 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-emerald-50">
                            {factors.map((factor) => (
                                <tr key={factor.id} className="hover:bg-emerald-50/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-forest leading-none mb-1.5 tracking-tighter">{factor.id}</span>
                                            <Badge variant="neutral" className="text-[8px] font-bold px-1.5 py-0 bg-emerald-50 text-emerald-800">v{factor.version}</Badge>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black text-white bg-emerald-600 px-2 py-0.5 rounded-full w-fit mb-1 shadow-sm shadow-emerald-900/10 uppercase tracking-widest">{factor.sector}</span>
                                            <span className="text-[10px] font-bold text-gray-400 truncate max-w-[150px] uppercase">{factor.fuelType}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-black text-forest text-sm italic">{factor.pollutant}</td>
                                    <td className="px-6 py-4">
                                        <span className="font-black text-emerald-700 text-base">{factor.value.toLocaleString()} </span> 
                                        <span className="text-[9px] ml-1 text-gray-400 font-black uppercase tracking-widest">:: {factor.unit}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-tight">{factor.source}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-[10px] font-black text-gray-400 whitespace-nowrap uppercase tracking-widest">{factor.effectiveDate}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2.5 text-gray-300 hover:text-forest transition-colors rounded-lg hover:bg-emerald-100">
                                            <FileEdit className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-8 border-emerald-50 bg-emerald-900 text-white shadow-2xl relative overflow-hidden">
                    <h3 className="text-sm font-black text-emerald-400 uppercase flex items-center gap-3 mb-6 tracking-[0.2em] relative z-10">
                        <Clock className="w-4 h-4" />
                        GWP & AR-Cycle Parameters
                    </h3>
                    <div className="space-y-4 relative z-10">
                        <div className="flex justify-between p-4 bg-emerald-950/50 rounded-2xl border border-emerald-700 border-l-4 border-l-emerald-400 shadow-xl">
                            <div>
                                <p className="text-xs font-black text-white uppercase tracking-tight">Global Warming Potential (GWP)</p>
                                <p className="text-[9px] text-emerald-400/60 font-black uppercase tracking-widest mt-1">Standard: IPCC AR6 PROTOCOL</p>
                            </div>
                            <Button variant="ghost" className="h-8 text-[9px] font-black uppercase tracking-widest text-emerald-300 hover:bg-emerald-500 hover:text-white">Configure</Button>
                        </div>
                        <div className="flex justify-between p-4 bg-emerald-950/50 rounded-2xl border border-emerald-700 border-l-4 border-l-white/20 shadow-xl">
                             <div>
                                <p className="text-xs font-black text-white uppercase tracking-tight">Mass to Energy Units (TJ/kt)</p>
                                <p className="text-[9px] text-emerald-400/60 font-black uppercase tracking-widest mt-1">Mapping: STD-VERSION-2023</p>
                            </div>
                            <Button variant="ghost" className="h-8 text-[9px] font-black uppercase tracking-widest text-white/40 hover:bg-white/5">Analyze Sync</Button>
                        </div>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                </Card>

                <Card className="p-8 border-emerald-50 bg-mint shadow-xl">
                    <h3 className="text-sm font-black text-forest uppercase flex items-center gap-3 mb-6 tracking-[0.2em]">
                         <Info className="w-4 h-4 text-emerald-600" />
                         Governance Protocol
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-bold mb-6 italic uppercase tracking-tight">
                        Mutation of coefficients triggers a recursive system-wide recalculation audit. Authorizations require <span className="text-forest underline">Technical Approval Lv.3</span>.
                    </p>
                    <div className="p-4 bg-white/50 rounded-2xl border border-emerald-100 shadow-inner">
                        <p className="text-[9px] font-black text-emerald-700 uppercase flex items-center gap-2 tracking-[0.15em] mb-2">
                             <AlertCircle className="w-4 h-4 text-orange-500" />
                             Validator Pool Status
                        </p>
                        <p className="text-[10px] font-black text-gray-400 leading-tight">4 Nodes Active • Cryptographic Sync Hash: 0x9021-AF</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};


export default FactorLibrary;
