import React from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Settings as SettingsIcon, 
  Globe, 
  Bell, 
  ShieldCheck, 
  Database, 
  Building, 
  Activity,
  Layers,
  FlaskConical,
  Zap,
  Lock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const Settings: React.FC = () => {
    return (
        <div className="space-y-8 pb-12">
            <div className="flex justify-between items-center px-1">
                <div>
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase whitespace-nowrap">Core Architecture Hub</h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1 italic">Platform-wide parameters, architectural governance, and regional standards</p>
                </div>
                <Button className="flex items-center gap-3 font-black uppercase text-[10px] h-11 tracking-widest bg-forest text-emerald-400 shadow-xl shadow-emerald-950/20 rounded-2xl px-8">
                    Apply Matrix Sync
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Navigation Pills */}
                <div className="lg:col-span-3 space-y-3">
                    {[
                        { name: 'Provincial Standards', icon: Globe, active: true },
                        { name: 'Notification Matrix', icon: Bell, active: false },
                        { name: 'Security & Access', icon: ShieldCheck, active: false },
                        { name: 'Data Pipeline Config', icon: Database, active: false },
                        { name: 'Agency Mapping', icon: Building, active: false },
                    ].map((item, i) => (
                        <button key={i} className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all group ${
                            item.active ? 'bg-forest text-emerald-400 shadow-2xl shadow-emerald-950/20 scale-105 z-10' : 'text-gray-400 hover:bg-emerald-50 hover:text-forest'
                        }`}>
                            <div className="flex items-center gap-4">
                                <item.icon className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest italic">{item.name}</span>
                            </div>
                            {item.active && <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></div>}
                        </button>
                    ))}

                    <div className="pt-10 border-t border-emerald-50 mt-10 space-y-4">
                         <div className="p-6 bg-forest rounded-[32px] text-white relative overflow-hidden group shadow-2xl shadow-emerald-950/10 border border-emerald-900/50">
                              <p className="text-[8px] font-black text-emerald-400 uppercase tracking-[0.3em] mb-2 italic">Architecture Node</p>
                              <p className="text-xs font-black uppercase mb-6 tracking-tighter leading-none">PUNJAB_ROOT_v3.4.2</p>
                              <div className="flex items-center justify-between text-[8px] font-black uppercase text-emerald-400/50 tracking-widest mb-2 italic">
                                  <span>System Entropy</span>
                                  <span>Nominal</span>
                              </div>
                              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden shadow-inner border border-white/5">
                                  <div className="w-1/3 bg-emerald-400 h-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                              </div>
                              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                         </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-9 space-y-8">
                    <Card className="p-10 border-none bg-white shadow-[0_20px_60px_-15px_rgba(6,78,59,0.08)] rounded-[48px] relative overflow-hidden">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-xl font-black text-forest uppercase tracking-tighter flex items-center gap-4 italic leading-none">
                                <Layers className="w-6 h-6 text-emerald-600" />
                                Inventory Framework Settings
                            </h3>
                            <Badge variant="neutral" className="text-[8px] font-black uppercase tracking-[0.3em] px-4 py-1.5 bg-emerald-50 text-emerald-800 border-none rounded-lg italic">PK-PN-CONFIG-2024</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] pl-1 h-3 flex items-center italic">Primary GHG Standard</label>
                                    <select className="w-full bg-emerald-50/30 border border-emerald-100 rounded-2xl p-4 text-[11px] font-black uppercase tracking-widest italic outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-forest">
                                        <option>IPCC 2006 (GWP AR6)</option>
                                        <option>IPCC 2006 (GWP AR5)</option>
                                        <option>IPCC 1996 Legacy</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] pl-1 h-3 flex items-center italic">Sectoral Mode</label>
                                    <div className="flex gap-4 p-2 bg-emerald-50/30 rounded-[22px] border border-emerald-100/50">
                                        <button className="flex-1 text-[10px] font-black uppercase tracking-widest h-10 rounded-xl bg-forest text-emerald-400 shadow-lg shadow-emerald-950/20 italic">Detailed (6)</button>
                                        <button className="flex-1 text-[10px] font-black uppercase tracking-widest h-10 rounded-xl text-emerald-800 hover:bg-emerald-100/50 transition-colors italic">Simplified (4)</button>
                                    </div>
                                </div>
                                <div className="space-y-3 pt-4">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] pl-1 h-3 flex items-center italic">District Granularity</label>
                                    <div className="flex items-center justify-between p-5 bg-mint/30 border border-emerald-100 rounded-[28px] group cursor-pointer hover:bg-mint/50 transition-colors">
                                        <span className="text-[10px] font-black text-forest uppercase tracking-widest italic">Breakdown Mapping Node</span>
                                        <div className="w-14 h-8 bg-forest rounded-full flex items-center justify-end p-1.5 shadow-inner border border-emerald-900/10">
                                            <div className="w-5 h-5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/20"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] pl-1 h-3 flex items-center italic">Reporting Fiscal Phase</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[8px] font-black text-emerald-700/50 uppercase tracking-widest text-center italic">Hub Start</span>
                                            <input type="text" value="JUL_01" className="w-full bg-white border border-emerald-100 rounded-2xl p-4 text-[11px] font-black text-forest text-center italic tracking-[0.2em] shadow-inner" readOnly />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[8px] font-black text-emerald-700/50 uppercase tracking-widest text-center italic">Hub Terminus</span>
                                            <input type="text" value="JUN_30" className="w-full bg-white border border-emerald-100 rounded-2xl p-4 text-[11px] font-black text-forest text-center italic tracking-[0.2em] shadow-inner" readOnly />
                                        </div>
                                    </div>
                                    <p className="text-[8px] font-black text-emerald-600/50 uppercase tracking-widest mt-2 italic text-center opacity-30 leading-snug">Synced to PB Govt Financial Protocols</p>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] pl-1 h-3 flex items-center italic">Scientific Confidence</label>
                                    <select className="w-full bg-emerald-50/30 border border-emerald-100 rounded-2xl p-4 text-[11px] font-black uppercase tracking-widest italic outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-forest">
                                        <option>Monte Carlo Simulation Hub</option>
                                        <option>Error Propagation (Tier 1)</option>
                                        <option>Empirical Buffers (Tier 2)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-10 bg-forest rounded-[40px] relative overflow-hidden group border border-emerald-900/50 shadow-2xl shadow-emerald-950/20">
                             <div className="relative z-10 flex items-center justify-between">
                                 <div>
                                     <h4 className="text-emerald-400 text-base font-black uppercase tracking-tighter mb-2 italic flex items-center gap-3"><Zap className="w-5 h-5" /> Periodic Calculation Sync</h4>
                                     <p className="text-emerald-400/50 text-[10px] font-black uppercase tracking-widest italic opacity-60">System triggers a provincial matrix generation every <span className="text-white underline decoration-emerald-400/30 underline-offset-4 font-black">1st of Quarter</span>.</p>
                                 </div>
                                 <Button className="bg-white text-forest border-none font-black text-[10px] uppercase tracking-[0.3em] h-12 px-10 whitespace-nowrap shadow-2xl rounded-2xl hover:bg-emerald-50 transition-all italic">Recalibrate Epoch</Button>
                             </div>
                             <div className="absolute -left-10 -bottom-10 w-56 h-56 bg-emerald-400/5 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000"></div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
                        <Card className="p-8 border-none bg-mint/50 rounded-[40px] shadow-xl relative overflow-hidden group border border-emerald-50">
                             <h4 className="text-xs font-black uppercase text-forest mb-4 flex items-center gap-4 tracking-widest italic relative z-10">
                                 <FlaskConical className="w-5 h-5 text-emerald-600" />
                                 Technical Deviation
                             </h4>
                             <p className="text-[10px] text-emerald-800/60 font-black italic leading-relaxed mb-10 uppercase tracking-widest relative z-10 opacity-70">Enable tier-3 focal nodes to override <span className="text-emerald-900 font-black underline underline-offset-2">Regional specific EF data</span> via peer-reviewed studies.</p>
                             <div className="p-4 bg-white/50 backdrop-blur-md rounded-2xl border border-rose-100 flex items-center justify-between relative z-10 shadow-xl shadow-rose-900/5">
                                 <span className="text-[9px] font-black text-rose-600 uppercase tracking-[0.3em] flex items-center gap-3 italic">
                                     Matrix Security Lock-Out
                                 </span>
                                 <div className="p-2 bg-rose-50 text-rose-500 rounded-xl">
                                    <Lock className="w-3 h-3" />
                                 </div>
                             </div>
                        </Card>
                        <Card className="p-10 border-none bg-white rounded-[40px] shadow-xl border border-emerald-50">
                             <h4 className="text-xs font-black uppercase text-forest mb-3 tracking-widest italic">Matrix API Hooks</h4>
                             <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-8 italic opacity-40">Integration Sync Status: UNCLASSIFIED</p>
                             <div className="space-y-4">
                                 <div className="flex items-center justify-between text-[10px] font-black text-forest p-4 bg-emerald-50/30 rounded-2xl border border-emerald-50 group hover:bg-emerald-50 transition-colors cursor-pointer">
                                     <span className="uppercase tracking-[0.2em] italic">Federal_SEED_Node_PK</span>
                                     <Badge variant="success" className="text-[7px] font-black uppercase border-none px-3 py-1 rounded-md tracking-widest italic shadow-sm shadow-emerald-900/10 animate-pulse">ACTIVE_TLS</Badge>
                                 </div>
                                 <div className="flex items-center justify-between text-[10px] font-black text-gray-400 p-4 bg-gray-50/50 rounded-2xl border border-gray-100 group opacity-40">
                                     <span className="uppercase tracking-[0.2em] italic">Global_WB_Sync</span>
                                     <Badge variant="neutral" className="text-[7px] font-black uppercase border-none px-3 py-1 rounded-md tracking-widest italic">STALE_ACK</Badge>
                                 </div>
                             </div>
                             <Button variant="ghost" className="w-full mt-8 text-[9px] font-black uppercase tracking-[0.4em] flex items-center justify-center p-0 text-emerald-600 hover:text-forest transition-colors italic">
                                 Matrix Endpoint Management <ChevronRight className="w-4 h-4 ml-3" />
                             </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Settings;
