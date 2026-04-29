import React from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Zap, 
  BarChart4, 
  PieChart as PieIcon,
  ChevronRight,
  Download,
  Share2,
  Calendar,
  AlertTriangle
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, Legend 
} from 'recharts';

const ExecutiveInsights: React.FC = () => {
    const pieData = [
        { name: 'Transport', value: 4200, color: '#064e3b' }, // forest 900
        { name: 'Energy', value: 3800, color: '#059669' }, // emerald 600
        { name: 'Agriculture', value: 3200, color: '#34d399' }, // emerald 400
        { name: 'Waste', value: 1200, color: '#d1fae5' }, // emerald 100
    ];

    const lineData = [
        { year: '2020', emissions: 14200, target: 14500 },
        { year: '2021', emissions: 14500, target: 14200 },
        { year: '2022', emissions: 14800, target: 13900 },
        { year: '2023', emissions: 15200, target: 13500 },
        { year: '2024', emissions: 15420, target: 13000 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                <div>
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase">Executive Intelligence Unit</h1>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Provincial Scale Analytical Node</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2 font-black uppercase text-[10px] h-10 tracking-widest border-emerald-100 text-emerald-800"><Share2 className="w-3.5 h-3.5" /> Share Data</Button>
                    <Button className="flex items-center gap-2 font-black uppercase text-[10px] h-10 tracking-widest bg-forest shadow-lg shadow-emerald-900/10"><Download className="w-3.5 h-3.5" /> Export Briefing</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 border-emerald-50 bg-white relative overflow-hidden group">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Net-Zero Trajectory</h4>
                            <Target className="w-4 h-4 text-emerald-400 group-hover:rotate-45 transition-transform" />
                        </div>
                        <h2 className="text-4xl font-black text-forest tracking-tighter mb-1">18.4% <span className="text-xl text-rose-500 italic font-medium">Skew</span></h2>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-6">Relative to 2030 NDC Baseline</p>
                        <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white border border-rose-100 flex items-center justify-center text-rose-500 shadow-sm"><AlertTriangle className="w-4 h-4" /></div>
                            <p className="text-[10px] font-black text-rose-700 uppercase tracking-tight">Requires 4.2% annual curtailment to re-sync.</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6 border-emerald-50 bg-emerald-50/20 group">
                    <div className="flex justify-between items-start mb-6">
                        <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">High Performance Hub</h4>
                        <Zap className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h2 className="text-3xl font-black text-forest tracking-tighter mb-1 uppercase">Sargodha Zone</h2>
                    <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest leading-none mb-6 italic">-6.2% Sectoral Decoupling</p>
                    <div className="h-3 w-full bg-emerald-100/50 rounded-full overflow-hidden p-0.5">
                        <div className="h-full bg-emerald-500 w-[72%] rounded-full shadow-[0_0_12px_rgba(16,185,129,0.4)]"></div>
                    </div>
                </Card>

                <Card className="p-6 bg-forest text-white border-none relative overflow-hidden group">
                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest opacity-80">Economic Exposure</h4>
                            <BarChart4 className="w-4 h-4 text-emerald-400 opacity-60" />
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tighter mb-1 select-none">$42.8M <span className="text-xs text-emerald-400 font-bold tracking-widest align-middle">EST</span></h2>
                        <p className="text-[10px] font-black text-emerald-100/40 uppercase tracking-widest leading-none mb-4">Carbon Obligation Inventory</p>
                        <Button className="mt-auto bg-emerald-500 hover:bg-emerald-400 border-none font-black text-[10px] uppercase py-3.5 tracking-[0.2em] rounded-xl shadow-xl shadow-black/20">Revenue Projections</Button>
                    </div>
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-8 group">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-black text-forest uppercase tracking-tighter italic">Compositional Matrix</h3>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sectoral Contribution Breakdown</p>
                        </div>
                        <PieIcon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="h-[250px] w-full md:w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={pieData} innerRadius={65} outerRadius={100} paddingAngle={2} dataKey="value" stroke="none">
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                      contentStyle={{borderRadius: '16px', border: 'none', background: '#1b4332', color: '#fff', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.2)'}} 
                                      itemStyle={{color: '#fff', fontSize: '12px', fontWeight: 'bold'}}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            {pieData.map((d, i) => (
                                <div key={i} className="flex flex-col gap-1.5 group/item">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black text-gray-500 flex items-center gap-2 uppercase tracking-wide">
                                            <div className="w-2.5 h-2.5 rounded-full ring-2 ring-offset-2 ring-transparent group-hover/item:ring-emerald-200 transition-all" style={{ backgroundColor: d.color }}></div>
                                            {d.name}
                                        </span>
                                        <span className="text-xs font-black text-forest">{((d.value / 12400) * 100).toFixed(1)}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                                        <div className="h-full group-hover/item:scale-x-105 transition-transform origin-left rounded-full" style={{ backgroundColor: d.color, width: `${(d.value / 4200) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                <Card className="p-8">
                    <div className="flex items-center justify-between mb-8">
                         <div>
                            <h3 className="text-lg font-black text-forest uppercase tracking-tighter">Performance Trajectory</h3>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Actual Volatility vs NDC Goal</p>
                        </div>
                        <div className="flex gap-4">
                             <div className="flex items-center gap-2">
                                <div className="w-3 h-1 bg-emerald-600 rounded-full"></div>
                                <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Actual</span>
                             </div>
                             <div className="flex items-center gap-2">
                                <div className="w-3 h-1 bg-forest/20 border border-emerald-200 rounded-full"></div>
                                <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Target</span>
                             </div>
                        </div>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} />
                                <Tooltip 
                                    contentStyle={{borderRadius: '16px', border: '1px solid #d1fae5', background: 'rgba(255,255,255,0.9)', backdropBlur: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05)'}}
                                />
                                <Line type="monotone" dataKey="emissions" stroke="#059669" strokeWidth={5} dot={{r: 5, fill: '#059669', strokeWidth: 3, stroke: '#fff'}} activeDot={{r: 7, fill: '#1b4332'}} />
                                <Line type="monotone" dataKey="target" stroke="#1b4332" strokeWidth={2} strokeDasharray="8 8" dot={false} opacity={0.3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-8 flex justify-between items-center bg-emerald-50/50 -mx-8 -mb-8 p-6 border-t border-emerald-50 rounded-b-3xl">
                        <div className="flex gap-8">
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Peak Emittance</p>
                                <h4 className="text-xs font-black text-forest">2024 Projective Cycle</h4>
                            </div>
                            <div>
                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Efficiency Index</p>
                                <h4 className="text-xs font-black text-rose-600 bg-rose-50 px-2 rounded-md">Low Threshold (0.42)</h4>
                            </div>
                        </div>
                        <Button variant="outline" className="text-[10px] font-black uppercase tracking-[0.2em] h-10 px-6 group border-forest text-forest hover:bg-forest hover:text-white transition-all rounded-xl">
                            Model Details <ChevronRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};


export default ExecutiveInsights;
