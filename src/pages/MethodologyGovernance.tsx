import React from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  BookOpen, 
  Plus, 
  Search, 
  GitBranch, 
  ShieldCheck, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Database
} from 'lucide-react';

const MethodologyGovernance: React.FC = () => {
    const methodologies = [
        { id: 'MET-01', name: 'IPCC Tier 1: Road Transport', category: 'Energy', version: '2.0', status: 'Approved', updated: '2024-01-10' },
        { id: 'MET-02', name: 'Tier 2: Electricity Generation (Fuel Specific)', category: 'Energy', version: '1.4', status: 'In Review', updated: '2024-03-22' },
        { id: 'MET-03', name: 'Agriculture (Livestock) - Enteric Fermentation', category: 'Agriculture', version: '1.0', status: 'Approved', updated: '2023-11-15' },
        { id: 'MET-04', name: 'Solid Waste Management Hub Profiles', category: 'Waste', version: '2.1', status: 'Draft', updated: '2024-04-01' },
    ];

    return (
        <div className="space-y-8 pb-20">
            <div className="flex justify-between items-end px-2">
                <div>
                    <h1 className="text-[32px] font-black text-forest tracking-[-0.05em] uppercase leading-none italic">Scientific Framework Registry</h1>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4 italic opacity-60">Approved calculation logic & synchronized regulatory frameworks</p>
                </div>
                <Button className="flex items-center gap-4 font-black uppercase text-[10px] h-12 border-none bg-forest text-emerald-400 shadow-2xl shadow-emerald-950/20 tracking-[0.2em] rounded-2xl px-8 italic">
                    <Plus className="w-5 h-5" />
                    Register New Protocol
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                 <div className="lg:col-span-2 space-y-6">
                     <Card className="p-8 border-none bg-white shadow-[0_15px_40px_-12px_rgba(6,78,59,0.06)] rounded-[32px]">
                         <div className="flex gap-6">
                             <div className="relative flex-1">
                                 <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-600 transition-colors" />
                                 <input type="text" placeholder="FILTER PROTOCOLS BY NODE..." className="w-full pl-14 pr-6 py-4 text-[11px] font-black italic bg-emerald-50/30 border border-emerald-100 rounded-2xl outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-forest" />
                             </div>
                             <Button variant="outline" className="text-[10px] font-black uppercase tracking-widest border-emerald-100 text-forest bg-white px-8 rounded-2xl hover:bg-emerald-50 italic">Archive Matrix</Button>
                         </div>
                     </Card>

                     <div className="space-y-4">
                        {methodologies.map((m) => (
                            <Card key={m.id} className="p-8 border-none bg-white shadow-[0_10px_40px_-10px_rgba(6,78,59,0.04)] rounded-[40px] group hover:translate-x-2 transition-all cursor-pointer relative overflow-hidden">
                                <div className="flex justify-between items-center relative z-10">
                                    <div className="flex gap-8 items-center">
                                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[22px] flex items-center justify-center group-hover:bg-forest group-hover:text-emerald-400 transition-all duration-500 shadow-sm border border-emerald-100/50">
                                            <BookOpen className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-4 mb-3">
                                                <h3 className="text-lg font-black text-forest group-hover:text-emerald-700 transition-colors uppercase tracking-tight italic leading-none">{m.name}</h3>
                                                <Badge variant={m.status === 'Approved' ? 'success' : m.status === 'Draft' ? 'neutral' : 'warning'} className="text-[8px] font-black uppercase tracking-widest py-1 px-3 border-none shadow-sm">{m.status}</Badge>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-black text-gray-400 italic uppercase tracking-[0.2em]">
                                                <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md opacity-60">{m.category}</span>
                                                <span className="flex items-center gap-2"><GitBranch className="w-3.5 h-3.5" /> Version {m.version}</span>
                                                <span className="flex items-center gap-2 opacity-50 italic">Sync: {m.updated}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Button variant="outline" className="px-5 h-11 border-emerald-100 text-forest hover:bg-emerald-50 text-[9px] font-black uppercase tracking-widest rounded-xl italic">
                                            <Database className="w-4 h-4 mr-2" /> Sectoral Map
                                        </Button>
                                        <Button variant="ghost" className="w-12 h-11 bg-emerald-50/50 text-forest hover:bg-forest hover:text-emerald-400 rounded-xl transition-all flex items-center justify-center group/btn">
                                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                            </Card>
                        ))}
                     </div>
                 </div>

                 <div className="space-y-8">
                    <Card className="p-8 bg-forest text-white border-none shadow-2xl rounded-[40px] relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 italic leading-none text-emerald-400">
                                <ShieldCheck className="w-7 h-7 shadow-lg shadow-emerald-400/20" />
                                Governance Node
                            </h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 group/item hover:bg-white/10 transition-colors">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400/60 italic">Technical Advisory Node</p>
                                        <div className="relative flex">
                                            <span className="w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-70"></span>
                                            <span className="w-3 h-3 bg-emerald-500 rounded-full absolute inset-0 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
                                        </div>
                                    </div>
                                    <p className="text-base font-black italic">08 Verified Experts Syncing</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 group/item hover:bg-white/10 transition-colors">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400/60 mb-4 italic">Pending Framework RFCs</p>
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-2xl border-4 border-forest bg-emerald-600 font-black text-[10px] flex items-center justify-center italic text-white shadow-xl">EX</div>)}
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-widest italic opacity-80">12 Methodology RFCs</p>
                                    </div>
                                </div>
                            </div>
                            <Button className="w-full mt-10 bg-emerald-600 hover:bg-white text-white hover:text-forest border-none font-black text-[10px] uppercase tracking-[0.3em] py-6 shadow-2xl shadow-emerald-950/40 rounded-2xl transition-all italic">Commence Discussion Hub</Button>
                        </div>
                        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-emerald-400/5 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
                    </Card>

                    <Card className="p-10 border-none bg-white shadow-[0_20px_50px_-12px_rgba(6,78,59,0.06)] rounded-[40px]">
                        <h3 className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] mb-8 flex items-center gap-4 italic opacity-60">
                            <FileText className="w-5 h-5 text-emerald-600 shadow-sm" />
                            Official Documentation
                        </h3>
                        <div className="space-y-4">
                            {[
                                'Punjab-GHG-Protocol-2024.pdf',
                                'Tier-2-Verification-Standard.docx',
                                'IPCC-2006-Ref-Guide.url'
                            ].map((doc, i) => (
                                <a key={i} href="#" className="flex items-center justify-between p-5 rounded-2xl hover:bg-emerald-50/50 border border-emerald-50 transition-all group/item">
                                    <span className="text-[11px] font-black text-forest truncate uppercase tracking-widest italic opacity-80">{doc}</span>
                                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover/item:bg-forest group-hover/item:text-emerald-400 transition-colors">
                                        <ExternalLink className="w-4 h-4 shadow-sm" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Card>
                 </div>
            </div>
        </div>
    );
};


export default MethodologyGovernance;
