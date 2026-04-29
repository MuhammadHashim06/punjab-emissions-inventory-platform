import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Upload, 
  FileCheck, 
  AlertTriangle, 
  ClipboardCheck, 
  MessageSquare,
  History,
  FileText,
  X,
  Paperclip,
  CheckCircle,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

const Submissions: React.FC = () => {
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);

  const tasks = [
    { id: 'TSK-101', title: 'Industrial Energy Audit 2024', status: 'Pending', deadline: '2024-12-15', department: 'Energy Dept' },
    { id: 'TSK-102', title: 'Vehicle Registration Records Q1', status: 'In Review', deadline: '2024-11-30', department: 'Transport Dept' },
    { id: 'TSK-103', title: 'Agriculture Stubble Burning Survey', status: 'Returned', deadline: '2024-11-10', department: 'Agri Dept' },
  ];

  const handleValidation = () => {
     setValidationResult({
       score: 82,
       errors: [
         'Missing value in Row 42 (Carbon Intensty)',
         'Invalid date format in Column C'
       ],
       warnings: [
         'Data outlier detected for Rawalpindi hub'
       ]
     });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-160px)]">
      {/* Left Sidebar: Task List */}
      <div className="lg:col-span-4 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
        <h2 className="text-sm font-black text-forest flex items-center gap-2 mb-4 uppercase tracking-[0.2em]">
          <Clock className="w-4 h-4 text-emerald-600" />
          Submission Queue
        </h2>
        {tasks.map((task) => (
          <Card 
            key={task.id} 
            className={`p-4 cursor-pointer transition-all border-l-4 ${
              selectedTask?.id === task.id ? 'border-l-forest bg-forest text-white shadow-xl' : 'border-l-transparent text-gray-600 border-gray-100 hover:bg-emerald-50'
            }`}
            onClick={() => setSelectedTask(task)}
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] font-black uppercase tracking-widest ${selectedTask?.id === task.id ? 'text-emerald-400' : 'text-gray-400'}`}>{task.id}</span>
              <Badge variant={task.status === 'Pending' ? 'neutral' : task.status === 'In Review' ? 'info' : 'error'}>
                {task.status}
              </Badge>
            </div>
            <h3 className={`text-sm font-bold uppercase tracking-tight leading-tight mb-2 ${selectedTask?.id === task.id ? 'text-white' : 'text-gray-800'}`}>{task.title}</h3>
            <div className={`flex items-center justify-between text-[10px] font-bold uppercase ${selectedTask?.id === task.id ? 'text-emerald-100/70' : 'text-gray-400'}`}>
               <span className="truncate max-w-[150px]">{task.department}</span>
               <span className="flex items-center gap-1 shrink-0"><History className="w-3 h-3" /> {task.deadline}</span>
            </div>
          </Card>
        ))}
        
        <Card className="p-4 bg-gray-50 border-dashed border-2 border-gray-200 opacity-60">
            <p className="text-[10px] text-gray-400 font-black text-center uppercase tracking-widest">+ Create Voluntary Sync</p>
        </Card>
      </div>

      {/* Main Content: Submission Workspace */}
      <div className="lg:col-span-8 flex flex-col gap-4">
        {selectedTask ? (
          <>
            <Card className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-xl font-black text-forest uppercase tracking-tighter">{selectedTask.title}</h1>
                  <p className="text-[10px] text-emerald-800/60 font-bold uppercase tracking-widest mt-1">Official Submission Node: {selectedTask.department}</p>
                </div>
                <div className="flex gap-2">
                   <Button variant="outline" className="h-9 px-4 text-[10px] font-black uppercase tracking-widest border-emerald-100 text-emerald-800 hover:bg-emerald-50"><Paperclip className="w-3.5 h-3.5 mr-2 opacity-60" /> Guidance</Button>
                   <Button variant="ghost" className="h-9 px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-forest"><MessageSquare className="w-3.5 h-3.5 mr-2 opacity-60" /> Support</Button>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                 {/* Upload Area */}
                 <div className="border-2 border-dashed border-emerald-100 rounded-3xl p-10 text-center hover:border-emerald-500 hover:bg-emerald-50/20 transition-all cursor-pointer group relative bg-emerald-50/5">
                    <div className="w-16 h-16 bg-white shadow-xl border border-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-forest group-hover:text-white transition-all duration-300">
                       <Upload className="w-8 h-8 text-emerald-600 transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-gray-800 mb-1 uppercase tracking-tight">Broadcast Activity Data Files</h3>
                    <p className="text-xs text-gray-400 font-medium mb-5 italic tracking-tight">Secure transmission accepts .xlsx, .csv, and JSON-LD formats</p>
                    <div className="flex justify-center gap-3">
                       <span className="px-3 py-1 bg-white border border-emerald-50 rounded-full text-[9px] font-black text-emerald-700 uppercase tracking-widest shadow-sm">Max 128MB Payload</span>
                       <span className="px-3 py-1 bg-white border border-emerald-50 rounded-full text-[9px] font-black text-emerald-700 uppercase tracking-widest shadow-sm">v4.1 Schema Node</span>
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                 </div>

                 {/* Form Fields */}
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                       <label className="text-[9px] font-black text-forest uppercase tracking-[0.2em] px-1">Authorized Official UID</label>
                       <input type="text" readOnly value="PNJ-AQ-NODE-9021" className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl p-3.5 text-xs font-bold text-forest outline-none" />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[9px] font-black text-forest uppercase tracking-[0.2em] px-1">Origin Classification</label>
                       <select className="w-full bg-white border border-emerald-100 rounded-xl p-3.5 text-xs font-bold text-gray-700 outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                          <option>Primary - High Confidence Telemetry</option>
                          <option>Secondary - Industry Declared Records</option>
                          <option>Statistical Proxy - Tier 1 Estimates</option>
                       </select>
                    </div>
                 </div>

                 <div className="space-y-1.5 flex-1 flex flex-col">
                    <label className="text-[9px] font-black text-forest uppercase tracking-[0.2em] px-1">Network Integrity Notes</label>
                    <textarea className="w-full flex-1 border border-emerald-100 rounded-2xl p-4 text-xs font-medium focus:ring-2 focus:ring-emerald-500 transition-all outline-none bg-emerald-50/5 min-h-[100px]" placeholder="Document data collection protocols, error margins, or regional extrapolations..."></textarea>
                 </div>
              </div>

              <div className="mt-8 flex justify-between items-center bg-forest -mx-6 -mb-6 p-6">
                 <div className="flex items-center gap-2 text-emerald-300 text-[10px] font-black uppercase tracking-[0.2em]">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                    Awaiting Encryption Verification
                 </div>
                 <div className="flex gap-3">
                    <Button variant="ghost" className="font-black uppercase tracking-[0.2em] text-[10px] border border-emerald-700 text-emerald-400 hover:bg-white/5" onClick={handleValidation}>Run Validation Node</Button>
                    <Button className="bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase tracking-[0.2em] text-[10px] px-8 py-3.5 rounded-xl shadow-[0_8px_20px_-4px_rgba(16,185,129,0.3)] transition-all" onClick={() => setIsSubmitting(true)}>Authorize & Dispatch</Button>
                 </div>
              </div>
            </Card>

            {/* Validation Panel */}
            {validationResult && (
              <Card className="p-5 border-emerald-200 bg-mint animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center shadow-inner">
                         <ClipboardCheck className="w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="text-sm font-black text-forest uppercase tracking-tight italic">
                           Pre-Validation Integrity: <span className={validationResult.score > 80 ? 'text-emerald-700' : 'text-orange-700'}>{validationResult.score}% QUALITY</span>
                         </h3>
                         <p className="text-[10px] text-emerald-800/60 font-bold uppercase tracking-widest mt-0.5">Analyzed 1.2M Sectoral Data Points</p>
                      </div>
                   </div>
                   <button onClick={() => setValidationResult(null)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-emerald-100 text-forest hover:bg-forest hover:text-white transition-colors">
                     <X className="w-4 h-4" />
                   </button>
                </div>
                <div className="space-y-3 mt-4">
                   {validationResult.errors.map((err: string, i: number) => (
                      <div key={i} className="flex gap-3 text-rose-700 bg-rose-50 p-3 rounded-xl text-[10px] font-bold border border-rose-100 uppercase tracking-tight">
                         <AlertTriangle className="w-4 h-4 shrink-0 opacity-70" />
                         {err}
                      </div>
                   ))}
                   {validationResult.warnings.map((warn: string, i: number) => (
                      <div key={i} className="flex gap-3 text-emerald-800 bg-white p-3 rounded-xl text-[10px] font-bold border border-emerald-100 uppercase tracking-tight">
                         <AlertTriangle className="w-4 h-4 shrink-0 text-emerald-500 opacity-70" />
                         {warn}
                      </div>
                   ))}
                </div>
              </Card>
            )}
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-emerald-100/50 rounded-[40px] bg-emerald-50/5">
             <div className="w-24 h-24 bg-mint text-emerald-200 rounded-[32px] flex items-center justify-center mb-6 shadow-inner">
                 <ClipboardCheck className="w-12 h-12" />
             </div>
             <h2 className="text-lg font-black text-forest uppercase tracking-[0.3em] mb-3">NODE STANDBY</h2>
             <p className="text-xs text-gray-400 max-w-xs font-bold leading-relaxed uppercase tracking-tight">Select a pending mission from the queue to start cryptographic data verification.</p>
          </div>
        )}
      </div>

      {isSubmitting && (
         <div className="fixed inset-0 bg-forest/60 backdrop-blur-xl z-[100] flex items-center justify-center p-6">
            <Card className="max-w-md w-full p-10 text-center bg-white shadow-[0_50px_100px_-20px_rgba(27,67,50,0.3)] pointer-events-auto border border-emerald-50">
               <motion.div initial={{ scale: 0.5, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[40px] flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <CheckCircle className="w-14 h-14" />
               </motion.div>
               <h2 className="text-3xl font-black text-forest uppercase tracking-tighter mb-3">TRANSMISSION COMPLETE</h2>
               <p className="text-gray-500 font-medium mb-10 leading-snug text-sm px-4">
                 Provincial Node <span className="text-emerald-700 font-black">PNJ-SYNC-404</span> has accepted and verified the payload for <span className="text-forest font-black italic underline decoration-emerald-200">"{selectedTask.title}"</span>.
               </p>
               <Button className="w-full bg-forest text-white font-black uppercase tracking-[0.3em] py-5 rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-xs" onClick={() => { setIsSubmitting(false); setSelectedTask(null); }}>
                 Synchronize Local Workspace
               </Button>
            </Card>
         </div>
      )}
    </div>
  );
};


export default Submissions;
