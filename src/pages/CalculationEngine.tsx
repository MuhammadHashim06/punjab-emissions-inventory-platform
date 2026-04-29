import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Play, 
  Settings2, 
  Cpu, 
  FileSearch, 
  History, 
  CheckCircle2, 
  AlertCircle,
  Database,
  Calculator,
  RefreshCw,
  Box,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CalculationEngine: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<any>(null);

  const steps = [
    'Initializing Core Sync Node',
    'Applying Emission Co-efficients',
    'Aggregating District Saturation',
    'Performing Key Category Audit',
    'Calculating Uncertainty Flux',
    'Finalizing Result Topology'
  ];

  const handleRun = () => {
    setIsRunning(true);
    setStep(0);
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev === steps.length - 1) {
          clearInterval(interval);
          setIsRunning(false);
          setResults({
            total: 15420.5,
            change: +4.2,
            confidence: 94.8,
            topSectors: [
              { name: 'Transport Hubs', val: 5600 },
              { name: 'Energy Grid', val: 4200 },
              { name: 'Agri-Pillars', val: 3800 }
            ]
          });
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <div>
          <h1 className="text-2xl font-black text-forest tracking-tighter uppercase">Calculation & Aggregation Nexus</h1>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mt-1 italic">Scientific computation engine for multi-tier provincial modeling</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2 font-black uppercase text-[10px] h-11 tracking-widest border-emerald-100 text-emerald-800"><History className="w-3.5 h-3.5" /> History</Button>
            <Button variant="outline" className="flex items-center gap-2 font-black uppercase text-[10px] h-11 tracking-widest border-emerald-100 text-emerald-800"><Settings2 className="w-3.5 h-3.5" /> Config</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
            <Card className="p-8 border-none bg-forest text-white shadow-2xl relative overflow-hidden group rounded-[32px]">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-950/20 transform group-hover:rotate-12 transition-transform">
                             <Cpu className="w-7 h-7 text-forest" />
                        </div>
                        <h3 className="text-lg font-black uppercase tracking-tighter italic">Computation Matrix</h3>
                    </div>
                    
                    <div className="space-y-6 mb-10 uppercase">
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-emerald-400 tracking-[0.2em] px-1">Inventory Epoch</label>
                            <select className="w-full bg-emerald-950/50 border border-emerald-800 rounded-[18px] p-4 text-[11px] font-black outline-none ring-offset-forest focus:ring-2 focus:ring-emerald-500 tracking-widest transition-all">
                                <option className="bg-forest text-white">Punjab Annual 2024</option>
                                <option className="bg-forest text-white">Punjab Annual 2023</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[9px] font-black text-emerald-400 tracking-[0.2em] px-1">Analytical Tier</label>
                            <select className="w-full bg-emerald-950/50 border border-emerald-800 rounded-[18px] p-4 text-[11px] font-black outline-none focus:ring-2 focus:ring-emerald-500 tracking-widest transition-all">
                                <option className="bg-forest text-white">Hybrid Tier 1 & 2</option>
                                <option className="bg-forest text-white">Standard Tier 1</option>
                            </select>
                        </div>
                    </div>

                    <Button 
                        disabled={isRunning}
                        onClick={handleRun}
                        className="w-full py-5 text-xs font-black uppercase tracking-[0.3em] bg-emerald-500 text-forest hover:bg-white border-none transition-all flex items-center justify-center gap-4 rounded-2xl shadow-xl active:scale-95 disabled:bg-emerald-900 disabled:opacity-50"
                    >
                        {isRunning ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5 fill-current" />}
                        {isRunning ? 'Processing...' : 'Execute Run'}
                    </Button>
                </div>
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] -mr-16 -mt-16"></div>
                <div className="absolute -left-10 bottom-20 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
            </Card>

            <Card className="p-8 border-emerald-50 bg-white shadow-xl rounded-[32px]">
                 <h4 className="text-[10px] font-black uppercase text-emerald-800 mb-6 flex items-center gap-3 tracking-[0.2em]">
                    <Database className="w-4 h-4 text-emerald-500" />
                    Registry Freshness
                 </h4>
                 <div className="space-y-5">
                    {[
                        { label: 'Transport Activity', status: 'Updated', date: '2h ago', color: 'bg-emerald-500' },
                        { label: 'Agriculture Static', status: 'Cached', date: '5d ago', color: 'bg-emerald-200' },
                        { label: 'Industrial Output', status: 'Live-Sync', date: 'Real-time', color: 'bg-emerald-400' }
                    ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">{item.label}</span>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-forest leading-none uppercase">{item.status}</p>
                                <p className="text-[8px] text-gray-300 font-black uppercase tracking-tighter mt-1">{item.date}</p>
                            </div>
                        </div>
                    ))}
                 </div>
            </Card>
        </div>

        <div className="lg:col-span-8 flex flex-col min-h-[500px]">
            <AnimatePresence mode="wait">
                {isRunning ? (
                    <motion.div 
                        key="running"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="flex-1 bg-white rounded-[40px] border border-emerald-50 p-12 flex flex-col justify-center items-center text-center shadow-[0_50px_100px_-20px_rgba(6,78,59,0.06)]"
                    >
                        <div className="w-32 h-32 relative mb-12 transform hover:scale-110 transition-transform cursor-pointer">
                            <div className="absolute inset-0 border-[6px] border-emerald-50 rounded-[40px] rotate-45"></div>
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 border-[6px] border-emerald-500 rounded-[40px] border-t-transparent border-r-transparent rotate-45 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                            ></motion.div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Calculator className="w-10 h-10 text-emerald-600 animate-pulse" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-black text-forest uppercase tracking-tighter mb-8 leading-none italic">Computing Spectral Matrix</h2>
                        <div className="w-80 bg-emerald-50 h-3 rounded-full overflow-hidden mb-12 shadow-inner">
                            <motion.div 
                                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                                className="h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                            ></motion.div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-3 max-w-md w-full">
                             {steps.map((s, i) => (
                                <motion.p 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ 
                                        opacity: i === step ? 1 : i < step ? 0.4 : 0.1,
                                        x: i === step ? 0 : i < step ? -5 : -10,
                                        scale: i === step ? 1.05 : 1
                                    }}
                                    className={`text-[9px] font-black uppercase tracking-[0.2em] text-left flex items-center gap-3 ${i === step ? 'text-forest' : 'text-gray-400'}`}
                                >
                                    <div className={`w-1.5 h-1.5 rounded-full ${i <= step ? 'bg-emerald-500' : 'bg-gray-100'}`}></div>
                                    {s}
                                </motion.p>
                             ))}
                        </div>
                    </motion.div>
                ) : results ? (
                    <motion.div 
                        key="results"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 flex-1 flex flex-col"
                    >
                        <Card className="p-10 border-none bg-emerald-600 text-white shadow-2xl rounded-[40px] flex flex-col md:flex-row gap-10 items-center overflow-hidden relative">
                             <div className="shrink-0 text-center md:text-left relative z-10">
                                 <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-3 italic">Aggregated Result Node</p>
                                 <h2 className="text-6xl font-black tracking-tighter leading-none italic">{results.total.toLocaleString()}</h2>
                                 <p className="text-xs font-black opacity-80 uppercase tracking-[0.2em] mt-3">kilo-tonnes CO2e</p>
                             </div>
                             <div className="w-1.5 h-20 bg-emerald-400/30 rounded-full hidden md:block relative z-10"></div>
                             <div className="flex-1 grid grid-cols-2 gap-10 w-full relative z-10">
                                 <div className="group">
                                      <p className="text-[9px] font-black uppercase opacity-60 mb-2 tracking-widest">Confidence Flux</p>
                                      <div className="flex items-baseline gap-3">
                                          <span className="text-3xl font-black tracking-tighter italic">±{results.confidence}%</span>
                                          <Badge variant="success" className="bg-emerald-400 text-forest border-none py-1 px-3 text-[8px] font-black uppercase rounded-lg shadow-lg">High-Fidelity</Badge>
                                      </div>
                                 </div>
                                 <div className="group">
                                      <p className="text-[9px] font-black uppercase opacity-60 mb-2 tracking-widest">Annual Epoch Delta</p>
                                      <div className="flex items-center gap-3">
                                          <span className="text-3xl font-black tracking-tighter italic">+{results.change}%</span>
                                          <div className="w-8 h-8 bg-emerald-950/20 rounded-full flex items-center justify-center">
                                              <TrendingUp className="w-5 h-5 text-emerald-200" />
                                          </div>
                                      </div>
                                 </div>
                             </div>
                             <div className="absolute top-0 right-0 w-64 h-64 bg-forest/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                            <Card className="p-10 border-none bg-white shadow-xl rounded-[36px] flex flex-col">
                                <h4 className="text-[10px] font-black uppercase text-emerald-800 mb-10 flex items-center justify-between tracking-[0.2em]">
                                    Economic Multipliers
                                    <Box className="w-4 h-4 text-emerald-500" />
                                </h4>
                                <div className="space-y-6 flex-1">
                                    {results.topSectors.map((s: any, i: number) => (
                                        <div key={i} className="flex items-center justify-between group cursor-pointer">
                                            <div className="flex items-center gap-5">
                                                <div className="w-1.5 h-10 bg-emerald-500 rounded-full group-hover:scale-y-125 transition-transform duration-500"></div>
                                                <span className="text-[11px] font-black text-forest uppercase tracking-widest leading-none">{s.name}</span>
                                            </div>
                                            <span className="text-sm font-black text-emerald-700 italic">{s.val.toLocaleString()} kt</span>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-12 text-[10px] font-black uppercase tracking-[0.2em] h-14 border-emerald-100 text-emerald-800 rounded-2xl hover:bg-emerald-50 group">
                                    Deep Structural Breakdown
                                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Card>

                            <Card className="p-10 bg-mint/20 border-emerald-50 rounded-[36px] flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                     <h4 className="text-[10px] font-black uppercase text-emerald-800 tracking-[0.2em]">Spectral Forecast</h4>
                                     <Badge variant="neutral" className="bg-forest text-emerald-400 border-none font-black text-[8px] uppercase tracking-widest px-3 py-1 rounded-lg">Draft Topology</Badge>
                                </div>
                                <div className="flex-1 w-full bg-white rounded-[24px] shadow-2xl shadow-emerald-900/5 p-4 border border-emerald-50">
                                     <ResponsiveContainer width="100%" height="100%">
                                         <AreaChart data={[
                                             { x: 1, y: 15400 }, { x: 2, y: 15410 }, { x: 3, y: 15420 }, { x: 4, y: 15415 }, { x: 5, y: 15430 }
                                         ]}>
                                             <defs>
                                                 <linearGradient id="colorCalc" x1="0" y1="0" x2="0" y2="1">
                                                     <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                                                     <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                                 </linearGradient>
                                             </defs>
                                             <Area type="monotone" dataKey="y" stroke="#10b981" strokeWidth={4} fill="url(#colorCalc)" />
                                         </AreaChart>
                                     </ResponsiveContainer>
                                </div>
                                <div className="mt-8 flex gap-3">
                                     <Button className="flex-1 bg-forest text-white text-[9px] font-black uppercase tracking-[0.2em] h-12 rounded-xl shadow-lg transform active:scale-95 transition-all">Commit Integrity Run</Button>
                                     <Button variant="outline" className="text-[9px] font-black uppercase tracking-[0.2em] h-12 px-6 border-emerald-100 text-emerald-800 rounded-xl bg-white shadow-sm" onClick={() => setResults(null)}>Reset Matrix</Button>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                ) : (
                    <div className="flex-1 bg-white rounded-[40px] border-2 border-dashed border-emerald-50 p-12 flex flex-col items-center justify-center text-center group">
                         <div className="w-24 h-24 bg-mint/50 border border-emerald-100 rounded-[32px] flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-emerald-900/5">
                            <Calculator className="w-10 h-10 text-emerald-600/40 group-hover:text-emerald-600 transition-colors" />
                         </div>
                         <h2 className="text-xl font-black text-forest uppercase tracking-widest mb-3 italic">Engine Idle</h2>
                         <p className="text-[10px] text-gray-400 max-w-xs font-black uppercase leading-relaxed tracking-widest">Select spectral parameters on the focal point and execute to generate provincial aggregated datasets.</p>
                    </div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


export default CalculationEngine;

const TrendingUp = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
