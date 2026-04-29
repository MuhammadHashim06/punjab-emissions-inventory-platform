import React from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Users, 
  FileText, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  MapPin, 
  Activity,
  ArrowUpRight,
  BarChart4,
  RefreshCw
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { PUNJAB_DISTRICTS } from '../constants';
import { motion } from 'motion/react';

const trendData = [
  { month: 'Jan', emissions: 4200 },
  { month: 'Feb', emissions: 4100 },
  { month: 'Mar', emissions: 4800 },
  { month: 'Apr', emissions: 5200 },
  { month: 'May', emissions: 5100 },
  { month: 'Jun', emissions: 5800 },
];

const districtData = [
  { name: 'Lahore', value: 8500, color: 'bg-emerald-600' },
  { name: 'Faisalabad', value: 6100, color: 'bg-emerald-500' },
  { name: 'Rawalpindi', value: 4200, color: 'bg-emerald-400' },
  { name: 'Multan', value: 3800, color: 'bg-emerald-300' },
  { name: 'Gujranwala', value: 2900, color: 'bg-emerald-200' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
          <span className="text-gray-400">Home</span> <span>/</span> <span className="text-emerald-800">Executive Dashboard</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 italic">Inventory Cycle: 2023-24</span>
            <Badge variant="success">In Progress</Badge>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Active Requests', val: '24', color: 'border-blue-500', sub: '12 Pending Actions', subColor: 'text-blue-600' },
          { label: 'Awaiting Validation', val: '08', color: 'border-orange-500', sub: 'High Priority: 03', subColor: 'text-orange-600' },
          { label: 'EF Updates', val: '152', color: 'border-emerald-500', sub: 'Tier-2 Compliant (92%)', subColor: 'text-emerald-600' },
          { label: 'CO2e (Total Prov.)', val: '14.2', unit: 'Mt', color: 'border-purple-500', sub: '+2.1% vs prev. cycle', subColor: 'text-purple-600' },
        ].map((stat, i) => (
          <Card key={i} className={`p-4 border-l-4 ${stat.color}`}>
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{stat.label}</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">
              {stat.val}
              {stat.unit && <span className="text-sm font-normal text-gray-400 ml-1">{stat.unit}</span>}
            </div>
            <div className={`text-[10px] font-semibold mt-1 ${stat.subColor}`}>{stat.sub}</div>
          </Card>
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">District-wise Emission Trends</h3>
            <div className="flex gap-2 text-[10px]">
              <button className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200 font-bold uppercase tracking-widest">2023</button>
              <button className="px-3 py-1 bg-white text-gray-400 rounded border border-gray-100 font-bold uppercase tracking-widest">2022</button>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            {districtData.map((d, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-24 text-xs font-semibold text-gray-600">{d.name}</span>
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(d.value / 10000) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`h-full ${d.color} rounded-full`}
                  />
                </div>
                <span className="w-12 text-xs font-bold text-gray-800">{(d.value / 1000).toFixed(1)}M</span>
              </div>
            ))}

            <div className="mt-4 border-t pt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <div className="text-[10px] text-emerald-700 font-bold uppercase mb-2 tracking-widest">Sectoral Breakdown</div>
                <div className="space-y-1">
                  {[
                    { label: 'Energy', val: '42%' },
                    { label: 'Agriculture', val: '28%' },
                    { label: 'Waste', val: '18%' },
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between text-[10px] text-emerald-800/80">
                      <span>{s.label}</span>
                      <span className="font-bold">{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex flex-col justify-center items-center text-center">
                <div className="text-[10px] text-gray-600 font-bold uppercase mb-2 tracking-widest">Verification Status</div>
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold">
                   <CheckCircle2 className="w-4 h-4" />
                   GIS Integration Active
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 flex flex-col">
          <h3 className="font-bold text-gray-800 mb-4 tracking-tight">Recent Workflow Activity</h3>
          <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {[
              { title: 'Data Submitted: Agriculture Dept', desc: 'Wheat Residue Burning Data (Sahiwal Div)', time: '12 Minutes Ago', color: 'bg-blue-500' },
              { title: 'EF Validation Failed', desc: 'Transport: Heavy Vehicle Factor mismatch', time: '1 Hour Ago', color: 'bg-orange-500' },
              { title: 'Inventory Run Executed', desc: 'Batch #882 (Greenhouse Gases)', time: '4 Hours Ago', color: 'bg-emerald-500' },
              { title: 'Report Exported', desc: 'Executive Summary - Q2', time: 'Yesterday', color: 'bg-gray-300' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-3 group cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors">
                <div className={`w-1 ${activity.color} rounded-full`}></div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-gray-800 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{activity.title}</p>
                  <p className="text-[10px] text-gray-500 font-medium italic leading-tight">{activity.desc}</p>
                  <p className={`text-[9px] ${activity.color.replace('bg-', 'text-')} mt-1 uppercase font-bold tracking-tighter opacity-80`}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t border-gray-100 italic">
            <Button className="w-full py-2.5 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-[10px] font-black">
              <RefreshCw className="w-3.5 h-3.5" />
              Initiate Provincial Sync
            </Button>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                       <BarChart4 className="w-5 h-5 text-emerald-600" />
                       Temporal Emission Projection
                  </h3>
                  <select className="text-[10px] font-bold uppercase tracking-widest bg-gray-50 border-gray-200 rounded px-2 py-1 outline-none">
                      <option>Monthly</option>
                      <option>Quarterly</option>
                  </select>
              </div>
              <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trendData}>
                          <defs>
                              <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                              </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 10}} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 10}} />
                          <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                          <Area type="monotone" dataKey="emissions" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorEmissions)" />
                      </AreaChart>
                  </ResponsiveContainer>
              </div>
          </Card>

          <Card className="p-6 bg-forest text-white border-none shadow-xl">
               <div className="flex justify-between items-start mb-6">
                   <div>
                       <h3 className="text-lg font-bold uppercase tracking-tight">System Node Status</h3>
                       <p className="text-[10px] text-emerald-300 uppercase tracking-[0.2em] font-bold opacity-80">Infrastructure Health</p>
                   </div>
                   <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                       <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                       <span className="text-[9px] font-bold uppercase tracking-widest">Live Node</span>
                   </div>
               </div>
               <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs">
                        <span className="opacity-60 font-medium">Regional Governance Anchor</span>
                        <span className="font-bold text-emerald-400">0x4F...E82</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="opacity-60 font-medium">Compliance Buffer Level</span>
                        <span className="font-bold">98.4%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <span className="opacity-60 font-medium">Sync Latency</span>
                        <span className="font-bold text-emerald-500">42ms</span>
                    </div>
               </div>
               <Button variant="ghost" className="w-full mt-6 text-emerald-400 hover:bg-white/5 border border-emerald-500/30 uppercase tracking-[0.2em] text-[10px] font-black">
                   Network Management Dashboard
               </Button>
          </Card>
      </div>

      <footer className="pt-8 pb-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-medium border-t border-gray-100">
          <div>&copy; 2024 Environment Protection Department, Govt. of Punjab</div>
          <div className="flex gap-4 mt-2 md:mt-0 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Live Server</span>
              <span>v1.2.4-stable</span>
          </div>
      </footer>
    </div>
  );
};

export default Dashboard;
