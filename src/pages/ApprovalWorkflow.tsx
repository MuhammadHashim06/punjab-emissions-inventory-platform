import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  FileCheck, 
  UserCheck, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  MessageSquare,
  History,
  Activity,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ApprovalWorkflow: React.FC = () => {
    const [selectedEntry, setSelectedEntry] = useState<any>(null);

    const pendingApprovals = [
        { id: 'AUTH-901', type: 'Inventory Epoch', title: 'Annual Cycle 2024 - Final Sync', stage: 'Tech-Audit', requester: 'Dr. Zahid', date: '2024-04-20', priority: 'Critical' },
        { id: 'AUTH-902', type: 'Framework', title: 'Tertiary Methodology v2.1', stage: 'Admin-Review', requester: 'Engr. Sara', date: '2024-04-18', priority: 'Medium' },
        { id: 'AUTH-903', type: 'Factor Node', title: 'Carbon Multipliers - Q3 Alpha', stage: 'Tech-Audit', requester: 'Dr. Zahid', date: '2024-04-22', priority: 'Critical' },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
            <div className="lg:col-span-5 space-y-4 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar pr-2">
                <div className="mb-8 px-2">
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase whitespace-nowrap">Governance Hub</h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1 italic">Decisive multi-tiered validation nexus</p>
                </div>
                
                {pendingApprovals.map((app) => (
                    <Card 
                        key={app.id} 
                        className={`p-6 cursor-pointer transition-all border-none relative overflow-hidden group ${
                            selectedEntry?.id === app.id ? 'bg-forest text-white shadow-2xl scale-[1.02]' : 'bg-white hover:bg-emerald-50 shadow-sm border border-emerald-50'
                        } rounded-[24px]`}
                        onClick={() => setSelectedEntry(app)}
                    >
                        <div className="flex justify-between items-start mb-4 relative z-10">
                             <div className="flex flex-col">
                                 <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${selectedEntry?.id === app.id ? 'text-emerald-400' : 'text-gray-400'}`}>{app.id}</span>
                                 <Badge variant={app.priority === 'Critical' ? 'error' : 'neutral'} className={`mt-2 border-none font-black text-[8px] uppercase tracking-widest px-3 py-1 rounded-lg ${selectedEntry?.id === app.id ? 'bg-emerald-400 text-forest' : ''}`}>{app.priority}</Badge>
                             </div>
                             <div className={`p-2 rounded-xl h-fit ${selectedEntry?.id === app.id ? 'bg-emerald-400/20' : 'bg-emerald-50'}`}>
                                 <ShieldCheck className={`w-4 h-4 ${selectedEntry?.id === app.id ? 'text-emerald-400' : 'text-emerald-600'}`} />
                             </div>
                        </div>
                        <h3 className={`text-sm font-black uppercase tracking-tight mb-4 leading-relaxed ${selectedEntry?.id === app.id ? 'text-white' : 'text-forest'}`}>{app.title}</h3>
                        <div className="flex items-center justify-between mt-6 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)] ${selectedEntry?.id === app.id ? 'bg-emerald-400' : 'bg-emerald-500'}`}></div>
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] italic ${selectedEntry?.id === app.id ? 'text-emerald-200' : 'text-emerald-700'}`}>{app.stage}</span>
                            </div>
                            <span className={`text-[9px] font-black uppercase tracking-widest flex items-center gap-2 opacity-50 ${selectedEntry?.id === app.id ? 'text-white' : 'text-gray-400'}`}>
                                <Clock className="w-3 h-3" /> {app.date}
                            </span>
                        </div>
                        {selectedEntry?.id === app.id && (
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        )}
                    </Card>
                ))}

                <Card className="p-8 bg-mint/50 border-emerald-50 shadow-xl rounded-[32px] mt-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 mb-6 flex items-center gap-3">
                        <History className="w-4 h-4 text-emerald-600" />
                        Provincial Audit Trail
                    </h4>
                    <div className="space-y-4">
                        {[
                            { title: 'Sector A-1 Dataset', action: 'Certified', date: '2d ago' },
                            { title: 'EF-0', action: 'Flagged', date: '5d ago' },
                        ].map((h, i) => (
                            <div key={i} className="flex justify-between items-center bg-white border border-emerald-50 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-forest uppercase tracking-tight group-hover:text-emerald-600 transition-colors">{h.title}</span>
                                    <span className="text-[8px] text-gray-400 font-black uppercase tracking-widest mt-1 italic">{h.date}</span>
                                </div>
                                <Badge variant={h.action === 'Certified' ? 'success' : 'error'} className="border-none text-[8px] font-black uppercase px-3 py-1 rounded-lg italic tracking-widest">{h.action}</Badge>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                    {selectedEntry ? (
                        <motion.div 
                            key={selectedEntry.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.02 }}
                            className="space-y-6"
                        >
                            <Card className="p-10 border-none bg-white shadow-2xl rounded-[40px] relative overflow-hidden">
                                <div className="flex justify-between items-start mb-12 pb-8 border-b border-emerald-50 relative z-10">
                                    <div>
                                        <Badge variant="info" className="mb-4 uppercase font-black text-[8px] px-4 py-1.5 bg-emerald-50 text-emerald-800 border-none tracking-[0.3em] rounded-lg">{selectedEntry.type}</Badge>
                                        <h2 className="text-3xl font-black text-forest tracking-tighter uppercase italic leading-none">{selectedEntry.title}</h2>
                                        <p className="text-[10px] font-black text-gray-400 mt-4 uppercase tracking-widest italic">Provenance: {selectedEntry.requester} • ID: PK_PN_NOD_2024_Σ</p>
                                    </div>
                                    <div className="text-center group cursor-pointer">
                                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[24px] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-forest group-hover:text-emerald-400 transition-all duration-500 shadow-xl shadow-emerald-950/5">
                                            <FileCheck className="w-8 h-8" />
                                        </div>
                                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] group-hover:text-forest transition-colors italic">Payload</span>
                                    </div>
                                </div>

                                <div className="space-y-10 relative z-10">
                                    <div className="relative pl-4">
                                        <div className="absolute left-[34px] top-4 bottom-4 w-1 bg-emerald-50 rounded-full"></div>
                                        <div className="space-y-12 relative z-10">
                                            {[
                                                { step: 'Data Verification', status: 'Certified', user: 'Dr. Zahid', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                                                { step: 'Technical Review', status: 'In-Queue', user: 'Authenticated User', icon: Activity, color: 'text-forest', bg: 'bg-emerald-400 shadow-xl shadow-emerald-900/10 scale-110' },
                                                { step: 'Executive Sign-off', status: 'Awaiting', user: 'DG EPD / Minister', icon: ShieldCheck, color: 'text-gray-200', bg: 'bg-gray-50 border-2 border-dashed border-gray-100' },
                                            ].map((t, i) => (
                                                <div key={i} className="flex gap-8 items-center group">
                                                    <div className={`w-12 h-12 rounded-[18px] border-4 border-white shadow-lg flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:-rotate-12 ${t.bg} ${t.color}`}>
                                                        <t.icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-4 mb-1">
                                                            <h4 className="text-[11px] font-black text-forest uppercase tracking-widest">{t.step}</h4>
                                                            <Badge variant={t.status === 'Certified' ? 'success' : t.status === 'In-Queue' ? 'info' : 'neutral'} className="text-[7px] font-black uppercase tracking-widest border-none px-3 py-1 rounded-md italic">{t.status}</Badge>
                                                        </div>
                                                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic opacity-60">Identity: {t.user}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 bg-emerald-50/20 p-8 rounded-[32px] border border-emerald-50">
                                        <label className="text-[10px] font-black text-forest uppercase tracking-[0.3em] flex items-center gap-3">
                                            <MessageSquare className="w-4 h-4 text-emerald-500" />
                                            Governance Log / Justification
                                        </label>
                                        <textarea className="w-full h-32 bg-white border border-emerald-100 rounded-2xl p-6 text-[11px] font-black outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:italic uppercase tracking-widest shadow-inner text-forest" placeholder="Enter scientific or regulatory justification for cryptographic sign-off..."></textarea>
                                    </div>

                                    <div className="flex gap-4">
                                        <Button className="flex-1 bg-forest hover:bg-emerald-700 text-emerald-400 border-none font-black uppercase tracking-[0.3em] py-6 flex items-center justify-center gap-4 shadow-2xl shadow-emerald-950/20 rounded-2xl transform active:scale-95 transition-all text-xs italic">
                                            <CheckCircle2 className="w-6 h-6" />
                                            Certify Payload
                                        </Button>
                                        <Button className="flex-1 bg-white border-2 border-rose-50 hover:bg-rose-50 text-rose-500 font-black uppercase tracking-[0.3em] py-6 flex items-center justify-center gap-4 shadow-xl shadow-rose-900/5 rounded-2xl transform active:scale-95 transition-all text-xs italic">
                                            <XCircle className="w-6 h-6" />
                                            Recalibrate Req
                                        </Button>
                                    </div>
                                </div>
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"></div>
                            </Card>

                            <Card className="p-8 border-none bg-mint shadow-xl rounded-[32px] border border-emerald-50">
                                <p className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.3em] mb-3 flex items-center gap-3 italic">
                                     <ShieldCheck className="w-4 h-4 text-emerald-600" /> Cryptographic Integrity Mandate
                                </p>
                                <p className="text-[9px] text-emerald-700/70 leading-relaxed font-black uppercase tracking-widest italic">Attestation of this data block will generate a unique SHA-256 fingerprint within the Provincial Registry. This action is final and subject to secondary multi-sig verification by the focal council.</p>
                            </Card>
                        </motion.div>
                    ) : (
                        <div className="h-full bg-white rounded-[40px] border-2 border-dashed border-emerald-50 p-20 flex flex-col items-center justify-center text-center opacity-40 mt-10 group">
                            <div className="w-24 h-24 bg-mint/50 border border-emerald-100 rounded-[32px] flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 text-emerald-200 group-hover:text-emerald-500 shadow-xl shadow-emerald-900/5">
                                <UserCheck className="w-12 h-12" />
                            </div>
                            <h2 className="text-2xl font-black text-forest uppercase tracking-widest mb-4 italic">Nexus Idle</h2>
                            <p className="text-[10px] text-gray-400 max-w-xs font-black uppercase leading-[2] tracking-[0.2em]">Select a governance request from the provincial queue to initiate review protocol.</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};


export default ApprovalWorkflow;
