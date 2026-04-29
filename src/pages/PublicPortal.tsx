import React from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Globe, 
  ExternalLink, 
  Search, 
  TrendingUp, 
  FileDown, 
  Leaf, 
  BarChart4, 
  Map,
  ShieldCheck,
  Building
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PublicPortal: React.FC = () => {
    const publicStats = [
        { label: 'Verified Inventories', val: '12 Cycles', icon: Globe },
        { label: 'Participating Agencies', val: '45+', icon: Building },
        { label: 'Net-Zero Protocol', val: '2050', icon: Leaf },
        { label: 'Integrity Index', val: 'High', icon: ShieldCheck }
    ];

    return (
        <div className="min-h-screen bg-mint/30">
            {/* Minimalist Public Nav */}
            <nav className="h-20 bg-white border-b border-emerald-50 flex items-center justify-between px-12 fixed top-0 w-full z-50">
                <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-forest rounded-2xl flex items-center justify-center text-emerald-400 font-black text-2xl shadow-xl shadow-emerald-900/10 italic">P</div>
                    <div>
                        <h1 className="text-xl font-black text-forest tracking-tighter uppercase leading-none">Government of Punjab</h1>
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Environmental Transparency Nexus</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-10">
                    {['Emissions Matrix', 'GIS Nodes', 'Governance', 'Methodology'].map(item => (
                        <a key={item} href="#" className="text-[10px] font-black uppercase text-gray-500 hover:text-emerald-700 transition-all tracking-[0.2em]">{item}</a>
                    ))}
                    <Button className="font-black text-[10px] uppercase tracking-widest h-11 px-8 bg-forest shadow-xl shadow-emerald-900/20">Portal Access</Button>
                </div>
            </nav>

            <div className="pt-40 pb-20 px-8 max-w-7xl mx-auto space-y-20">
                {/* Hero Section */}
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-50 text-emerald-800 rounded-full text-[9px] font-black uppercase tracking-[0.3em] border border-emerald-100 shadow-sm animate-bounce">
                        <Activity className="w-4 h-4" /> Global Sustainability Standard
                    </div>
                    <h2 className="text-6xl md:text-7xl font-black text-forest tracking-tighter leading-[0.85]">Punjab's <span className="text-emerald-600 italic">Ecology</span> <br/>Under Scientific <span className="underline decoration-emerald-200 decoration-8 underline-offset-[-4px]">Focus</span></h2>
                    <p className="text-gray-500 font-bold text-xl leading-relaxed italic max-w-2xl mx-auto">Official multi-tier repository for GHG and Pollutant analytics. Bridging industrial progress with atmospheric accountability.</p>
                </div>

                {/* Counter Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
                    {publicStats.map((stat, i) => (
                        <Card key={i} className="p-10 border-none bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[32px] hover:translate-y-[-8px] transition-all text-center group border border-emerald-50">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-[22px] flex items-center justify-center mx-auto mb-6 group-hover:bg-forest group-hover:text-emerald-400 transition-all duration-500">
                                <stat.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-3xl font-black text-forest tracking-tighter uppercase italic">{stat.val}</h4>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-2 opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</p>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Insights Preview */}
                    <div className="lg:col-span-8 space-y-8">
                        <Card className="p-10 border-none shadow-[0_40px_80px_-20px_rgba(6,78,59,0.1)] rounded-[40px] relative overflow-hidden bg-white">
                            <div className="flex justify-between items-center mb-12">
                                <div>
                                    <h3 className="text-3xl font-black text-forest uppercase tracking-tighter">Emission Trajectory</h3>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Sovereign Aggregate Trendline</p>
                                </div>
                                <div className="flex gap-2">
                                    <Badge variant="neutral" className="bg-forest text-emerald-400 border-none py-2 px-6 font-black text-[10px] tracking-[0.3em] uppercase rounded-full shadow-lg">Verified</Badge>
                                </div>
                            </div>
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={[
                                        { year: '2018', val: 3200 }, { year: '2019', val: 3500 }, { year: '2020', val: 3400 },
                                        { year: '2021', val: 4100 }, { year: '2022', val: 4500 }, { year: '2023', val: 4850 }
                                    ]}>
                                        <defs>
                                            <linearGradient id="colorPublicActive" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 11, fontWeight: '900', letterSpacing: '0.2em'}} dy={15} />
                                        <YAxis hide />
                                        <Tooltip contentStyle={{borderRadius: '24px', border: 'none', background: '#064e3b', color: '#10b981', fontFamily: 'monospace', fontWeight: 'bold'}} />
                                        <Area type="monotone" dataKey="val" stroke="#10b981" strokeWidth={6} fill="url(#colorPublicActive)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-10 pt-10 border-t border-emerald-50 flex flex-col md:flex-row justify-between items-center gap-6">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic leading-loose">Audit Cycle Complete: Dec 2023 <br/>Next Projection: Q3 2024</p>
                                <Button className="text-[10px] font-black uppercase tracking-[0.2em] h-14 px-12 group bg-forest shadow-xl rounded-2xl transform hover:scale-105 active:scale-95 transition-all">
                                    Full Dataset (.CSV) <FileDown className="w-4 h-4 ml-3 group-hover:translate-y-1 transition-transform" />
                                </Button>
                            </div>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="p-10 border-none shadow-2xl bg-forest text-white group overflow-hidden rounded-[36px]">
                                <div className="relative z-10">
                                    <Map className="w-12 h-12 text-emerald-400 mb-8" />
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 leading-none">Spatial Atlas</h3>
                                    <p className="text-sm font-bold text-emerald-100/60 mb-8 leading-relaxed italic uppercase tracking-tight">Interactive spectral mapping across 36 district nodes.</p>
                                    <Button className="bg-emerald-400 text-forest border-none font-black text-[10px] uppercase tracking-widest px-10 h-12 rounded-xl group overflow-hidden">
                                        Launch Viewer <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </div>
                                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]"></div>
                            </Card>
                            <Card className="p-10 border-none shadow-2xl bg-white group overflow-hidden rounded-[36px] border border-emerald-50">
                                <div className="relative z-10">
                                    <BarChart4 className="w-12 h-12 text-emerald-600 mb-8" />
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 text-forest leading-none">Sector Benchmarks</h3>
                                    <p className="text-sm font-bold text-gray-400 mb-8 leading-relaxed italic uppercase tracking-tight">Comparative analysis across core industrial pillars.</p>
                                    <Button className="bg-emerald-50 text-emerald-700 border-none font-black text-[10px] uppercase tracking-widest px-10 h-12 rounded-xl hover:bg-emerald-100 transition-colors">Compare Stats</Button>
                                </div>
                                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-50 rounded-full blur-[80px]"></div>
                            </Card>
                        </div>
                    </div>

                    {/* Side News / Updates */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white p-3 rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-emerald-50">
                             <div className="p-8">
                                 <h4 className="text-[10px] font-black uppercase text-emerald-600 tracking-[0.3em] mb-8 border-b border-emerald-50 pb-4">Scientific Publications</h4>
                                 <div className="space-y-6">
                                     {[ 
                                         { year: '2023', title: 'State of Air (SoA) Punjab' },
                                         { year: '2022', title: 'GHG Executive Strategy' },
                                         { year: '2021', title: 'Transport Topology V2' }
                                     ].map((report, i) => (
                                         <div key={i} className="flex gap-5 group cursor-pointer p-2 rounded-2xl hover:bg-emerald-50 transition-all">
                                             <div className="w-14 h-16 bg-forest border border-emerald-800 rounded-2xl flex flex-col items-center justify-center shrink-0 group-hover:scale-110 transition-all shadow-lg">
                                                 <span className="text-[10px] font-black text-emerald-400/60 leading-none mb-1">{report.year}</span>
                                                 <FileDown className="w-4 h-4 text-emerald-400" />
                                             </div>
                                             <div className="py-1">
                                                 <h5 className="text-xs font-black text-forest uppercase leading-tight group-hover:text-emerald-700 transition-colors">{report.title}</h5>
                                                 <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic mt-1 flex items-center gap-2">
                                                     <div className="w-1 h-1 bg-emerald-500 rounded-full"></div> PDF • 4.2 MB
                                                 </span>
                                             </div>
                                         </div>
                                     ))}
                                 </div>
                             </div>
                             <div className="p-6 bg-emerald-50/50 rounded-b-[36px] border-t border-emerald-50">
                                 <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-[0.2em] h-12 text-forest hover:bg-forest hover:text-white rounded-xl">Heritage Archive</Button>
                             </div>
                        </div>

                        <Card className="p-10 border-none shadow-2xl relative overflow-hidden bg-emerald-600 text-white rounded-[40px]">
                             <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10 leading-none">Citizen <br/>Accountability</h4>
                             <p className="text-xs font-bold leading-relaxed mb-8 italic relative z-10 opacity-80 uppercase tracking-tight">Help improve inventory grounding with localized observations.</p>
                             <Button className="w-full bg-white text-emerald-700 border-none font-black text-[10px] uppercase tracking-widest relative z-10 h-14 rounded-2xl shadow-xl hover:translate-y-[-4px] transition-transform">Contribution Form</Button>
                             <Leaf className="absolute -left-12 -bottom-12 w-48 h-48 text-white/10 rotate-12" />
                             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-forest py-20 px-12 border-t border-emerald-950">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                     <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-forest font-black text-2xl italic">P</div>
                        <div>
                            <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">Official Transparency Platform</p>
                            <p className="text-[10px] font-black text-emerald-100/30 uppercase tracking-[0.2em] italic mt-1 italic">© 2024 Government of Punjab. Scientific Integrity Authority.</p>
                        </div>
                     </div>
                     <div className="flex flex-wrap justify-center items-center gap-10">
                        {['FOIA Protocol', 'Research Grants', 'Privacy Node', 'Global Sync'].map(f => (
                            <a key={f} href="#" className="text-[10px] font-black uppercase text-emerald-100/40 hover:text-emerald-400 transition-colors tracking-[0.2em]">{f}</a>
                        ))}
                     </div>
                </div>
            </footer>
        </div>
    );
};


export default PublicPortal;

const Activity = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);
