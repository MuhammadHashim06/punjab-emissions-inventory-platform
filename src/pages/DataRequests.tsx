import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { Plus, Search, Filter, MoreVertical, Calendar, User, Building, Trash2, Edit, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_REQUESTS, DEPARTMENTS, SECTORS } from '../constants';

const DataRequests: React.FC = () => {
  const [requests, setRequests] = useState(MOCK_REQUESTS);
  const [showNewModal, setShowNewModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <div>
          <h1 className="text-2xl font-black text-forest tracking-tighter">DATA REQUESTS</h1>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Inter-departmental Data Acquisition</p>
        </div>
        <Button onClick={() => setShowNewModal(true)} className="flex items-center gap-2 bg-forest shadow-lg shadow-emerald-900/10 hover:opacity-90">
          <Plus className="w-4 h-4" />
          New Structured Request
        </Button>
      </div>

      <Card className="p-4 border-emerald-50/50 bg-emerald-50/10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search by ID, title or department..." 
              className="w-full bg-white border border-emerald-100 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-white border border-emerald-100 rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-widest outline-none">
              <option>All Statuses</option>
              {['Draft', 'Sent', 'Submitted', 'Approved'].map(s => <option key={s}>{s}</option>)}
            </select>
            <select className="bg-white border border-emerald-100 rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-widest outline-none">
              <option>All Departments</option>
              {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
            </select>
            <Button variant="outline" className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest py-2.5">
              <Filter className="w-3.5 h-3.5" />
              Filters
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {requests.map((req) => (
          <Card key={req.id} className="p-0 border-emerald-100/50 hover:border-emerald-300 transition-colors group">
            <div className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded uppercase">{req.id}</span>
                  <h3 className="text-base font-bold text-gray-800 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{req.title}</h3>
                  <Badge variant={
                    req.status === 'Sent' ? 'info' : 
                    req.status === 'Submitted' ? 'warning' :
                    req.status === 'Approved' ? 'success' : 'neutral'
                  }>{req.status}</Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-tight">
                    <div className="flex items-center gap-1.5 text-gray-600">
                        <Building className="w-3 h-3 opacity-60" />
                        {req.department}
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded">
                        <span className="opacity-50">Sector:</span>
                        <span>{req.sector}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 opacity-60" />
                        Due {req.dueDate}
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 rounded">
                        <User className="w-3 h-3 opacity-60" />
                        Rep: Focal
                    </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="mr-6 text-right">
                    <div className="w-24 bg-gray-100 h-1.5 rounded-full mt-1 overflow-hidden">
                        <div className={`h-full ${req.status === 'Sent' ? 'w-1/4 bg-blue-500' : 'w-3/4 bg-emerald-500'} rounded-full`} />
                    </div>
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">Node Synchronization</p>
                </div>
                <Button variant="ghost" className="p-2 h-auto text-gray-400 hover:text-forest transition-colors"><Edit className="w-4 h-4" /></Button>
                <Button variant="ghost" className="p-2 h-auto text-rose-300 hover:text-rose-600 transition-colors"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
            
            <div className="px-5 py-3 bg-gray-50/50 border-t border-emerald-50 flex items-center justify-between">
                <p className="text-[11px] text-gray-600 italic font-medium">"{req.instructions}"</p>
                <div className="flex items-center gap-4">
                     <span className={`text-[10px] font-black uppercase tracking-widest ${req.priority === 'High' ? 'text-rose-600' : 'text-gray-400 opacity-60'}`}>Priority::{req.priority}</span>
                </div>
            </div>
          </Card>
        ))}
      </div>

      {showNewModal && (
        <div className="fixed inset-0 bg-forest/40 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-emerald-100">
            <div className="p-6 border-b border-emerald-50 flex justify-between items-center bg-emerald-50/30">
              <h2 className="text-lg font-black text-forest uppercase tracking-tight">Structured Data Request</h2>
              <button onClick={() => setShowNewModal(false)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-emerald-100 text-forest hover:bg-forest hover:text-white transition-colors">×</button>
            </div>
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-forest uppercase tracking-widest">Request Title</label>
                  <input type="text" className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-3 text-sm font-medium outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all font-medium" placeholder="2024 Waste Generation Profiles" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-forest uppercase tracking-widest">Target Department</label>
                  <select className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-3 text-sm font-medium outline-none">
                    {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-forest uppercase tracking-widest">Economic Sector</label>
                   <select className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-3 text-sm font-medium outline-none">
                    {SECTORS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-forest uppercase tracking-widest">Reporting Year</label>
                  <input type="number" defaultValue={2024} className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-3 text-sm font-medium outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-forest uppercase tracking-widest">Hard Deadline</label>
                  <input type="date" className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-3 text-sm font-medium outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-forest uppercase tracking-widest">Priority Class</label>
                  <select className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-3 text-sm font-medium outline-none">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-forest uppercase tracking-widest">Structured Data Instructions</label>
                <textarea className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-4 text-sm font-medium min-h-[120px] outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="Specify required Excel schema, metadata fields, and validation protocols..."></textarea>
              </div>
              <div className="p-4 bg-forest text-white rounded-2xl border border-emerald-800 shadow-xl">
                  <p className="text-[10px] text-emerald-400 font-black uppercase mb-1 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5" /> SECURITY PROTOCOL
                  </p>
                  <p className="text-[11px] text-emerald-100/70 leading-relaxed font-medium">This request will be cryptographically signed and broadcast to departmental nodes. All responses are audited for integrity.</p>
              </div>
            </div>
            <div className="p-6 bg-emerald-50/30 border-t border-emerald-50 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setShowNewModal(false)} className="text-[10px] uppercase font-black tracking-widest px-6">Cancel</Button>
              <Button onClick={() => setShowNewModal(false)} className="bg-forest text-white text-[10px] uppercase font-black tracking-widest px-8 py-3 rounded-xl shadow-lg shadow-emerald-900/20">Authorize & Dispatch</Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};


export default DataRequests;
