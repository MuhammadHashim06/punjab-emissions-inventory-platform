import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  FileText, 
  FileDown, 
  FileSearch, 
  Plus, 
  Calendar, 
  Building, 
  CheckCircle2, 
  Clock,
  History,
  Download,
  Share2,
  MoreVertical,
  Printer,
  ChevronRight,
  BarChart4,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';

const Reporting: React.FC = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [reportReady, setReportReady] = useState(false);

    const reports = [
        { id: 'REP-2024-001', title: 'Provincial GHG Summary v1.0', type: 'Annual Inventory', date: '2024-04-20', status: 'Generated', user: 'Dr. Zahid' },
        { id: 'REP-2024-002', title: 'Transport Sectoral Insight Q1', type: 'Sectoral Deep-dive', date: '2024-03-15', status: 'Archived', user: 'Engr. Sara' },
        { id: 'REP-2023-FINAL', title: 'Punjab Annual Emission Report 2023', type: 'Official Publication', date: '2023-12-10', status: 'Publicly Released', user: 'System' },
    ];

    const generateReport = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setReportReady(true);
        }, 3000);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center px-1">
                <div>
                    <h1 className="text-2xl font-black text-forest tracking-tighter uppercase whitespace-nowrap">Document Synthesis Matrix</h1>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1 italic">Generate, certify, and archive official regulatory environmental records</p>
                </div>
                <Button onClick={() => setReportReady(false)} className="flex items-center gap-3 font-black uppercase text-[10px] h-11 border-none bg-forest text-emerald-400 shadow-xl shadow-emerald-950/20 tracking-[0.2em] rounded-2xl px-6 italic">
                    <Plus className="w-4 h-4" />
                    New Document Spec
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-8">
                    <Card className="p-10 border-none bg-white shadow-[0_20px_50px_-12px_rgba(6,78,59,0.06)] rounded-[40px] relative overflow-hidden group">
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-lg font-black text-forest uppercase tracking-tighter mb-6 flex items-center gap-4 italic leading-none">
                                <FileText className="w-6 h-6 text-emerald-600" />
                                Report Architect
                            </h3>

                            <div className="space-y-6 uppercase">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 tracking-[0.3em] pl-1 italic">Target Epoch Node</label>
                                    <select className="w-full bg-emerald-50/30 border border-emerald-100 rounded-2xl p-4 text-[11px] font-black uppercase tracking-widest italic outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-forest">
                                        <option>RUN-2024-02 (CALCULATED)</option>
                                        <option>RUN-2023-FINAL (PUBLISHED)</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 tracking-[0.3em] pl-1 italic">Document Template</label>
                                    <select className="w-full bg-emerald-50/30 border border-emerald-100 rounded-2xl p-4 text-[11px] font-black uppercase tracking-widest italic outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all text-forest">
                                        <option>Provincial Aggregate Summary</option>
                                        <option>Sector Profile - Detailed</option>
                                        <option>GIS Spatial Heatmap Export</option>
                                        <option>Audit Compliance Log</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 tracking-[0.3em] pl-1 italic">Export Protocol</label>
                                    <div className="flex gap-4 p-2 bg-emerald-50/30 rounded-[22px] border border-emerald-100/50">
                                        <button className="flex-1 text-[9px] font-black uppercase tracking-widest h-10 rounded-xl bg-forest text-emerald-400 shadow-lg shadow-emerald-950/20 italic">DIGITAL (PDF/A)</button>
                                        <button className="flex-1 text-[9px] font-black uppercase tracking-widest h-10 rounded-xl text-emerald-800 hover:bg-emerald-100/50 transition-colors italic">RAW (XLSX/JSON)</button>
                                    </div>
                                </div>
                            </div>

                            <Button 
                                onClick={generateReport}
                                disabled={isGenerating}
                                className="w-full py-6 text-xs font-black uppercase tracking-[0.3em] bg-forest hover:bg-emerald-800 text-emerald-400 border-none flex items-center justify-center gap-4 shadow-2xl shadow-emerald-950/20 disabled:bg-gray-100 disabled:text-gray-400 rounded-2xl italic transform active:scale-95 transition-all"
                            >
                                {isGenerating ? <RefreshCw className="animate-spin w-5 h-5" /> : <FileDown className="w-6 h-6" />}
                                {isGenerating ? 'Synthesizing...' : 'Execute Synthesis'}
                            </Button>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
                    </Card>

                    <Card className="p-8 bg-forest text-white border-none shadow-2xl rounded-[32px] relative overflow-hidden group">
                        <div className="relative z-10">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-400/50 mb-6 flex items-center gap-3 italic">
                                <History className="w-4 h-4" />
                                Synchronized Generations
                            </h4>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl group/item hover:bg-white/10 transition-all cursor-pointer">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-10 h-10 bg-emerald-400/10 text-emerald-400 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform">
                                                <Printer className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.1em] text-white/90">Registry Node #{1020 + i}</p>
                                                <p className="text-[8px] text-emerald-400/40 font-black uppercase tracking-widest mt-1 italic">MAY 0{i}, 2024</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-emerald-400/30 group-hover/item:text-emerald-400 transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <FileSearch className="absolute -right-8 -bottom-8 w-32 h-32 text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                    </Card>
                </div>

                <div className="lg:col-span-8">
                     {isGenerating ? (
                         <div className="h-[730px] bg-white border-2 border-dashed border-emerald-50 rounded-[40px] flex flex-col items-center justify-center text-center p-12 shadow-inner">
                             <div className="relative mb-16">
                                 <motion.div 
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                        rotate: [0, 2, -2, 0]
                                    }} 
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-32 h-44 bg-white border border-emerald-100 shadow-[0_30px_60px_-15px_rgba(6,78,59,0.15)] rounded-2xl p-6 space-y-4"
                                 >
                                     <div className="w-full h-1.5 bg-emerald-500 rounded-full mb-3 shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
                                     <div className="space-y-2">
                                         <div className="w-full h-1 bg-emerald-50 rounded-full opacity-50"></div>
                                         <div className="w-3/4 h-1 bg-emerald-50 rounded-full opacity-50"></div>
                                     </div>
                                     <div className="w-full h-24 bg-mint/30 rounded-xl border border-emerald-100/30 flex flex-col justify-center items-center">
                                         <BarChart4 className="w-10 h-10 text-emerald-200" />
                                     </div>
                                     <div className="w-1/2 h-1 bg-emerald-100/20 rounded-full mx-auto"></div>
                                 </motion.div>
                                 <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
                                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                      <span className="w-2 h-2 bg-emerald-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                 </div>
                             </div>
                             <h2 className="text-3xl font-black text-forest tracking-tighter uppercase mb-4 italic">Assembling Provincial Payload</h2>
                             <p className="text-[11px] text-gray-400 font-black max-w-sm leading-[2] tracking-widest uppercase italic opacity-60">Synthesizing 14,000+ sectoral matrix points into a cryptographically sealed document block.</p>
                         </div>
                     ) : reportReady ? (
                         <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 pb-20">
                              <Card className="p-0 border-none bg-white shadow-[0_30px_70px_-15px_rgba(6,78,59,0.12)] overflow-hidden rounded-[48px]">
                                  <div className="p-10 border-b border-emerald-50 bg-mint/20 flex justify-between items-center group">
                                      <div className="flex items-center gap-6">
                                          <div className="w-14 h-14 bg-white text-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-900/5 group-hover:scale-110 transition-transform border border-emerald-50">
                                              <CheckCircle2 className="w-8 h-8" />
                                          </div>
                                          <div>
                                              <h3 className="text-xl font-black text-forest uppercase tracking-tighter leading-none italic">Synthesis Validated</h3>
                                              <p className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.3em] mt-3 italic opacity-60">ID: PK_INV_2024_ΩX_891</p>
                                          </div>
                                      </div>
                                      <div className="flex gap-4">
                                          <Button variant="outline" className="h-12 border-emerald-100 bg-white text-[10px] font-black uppercase tracking-widest px-6 rounded-xl hover:bg-emerald-50"><Share2 className="w-4 h-4 mr-2" /> Internal Dispatch</Button>
                                          <Button className="h-12 text-[10px] font-black uppercase bg-forest text-emerald-400 tracking-widest px-8 rounded-xl shadow-xl shadow-emerald-950/20"><Download className="w-4 h-4 mr-2" /> Download PDF/A</Button>
                                      </div>
                                  </div>
                                  {/* Report Preview */}
                                  <div className="aspect-[1/1.414] bg-gray-50/50 p-16 overflow-hidden relative group/preview">
                                       <div className="max-w-2xl mx-auto space-y-16 bg-white p-16 shadow-[0_0_100px_rgba(0,0,0,0.05)] rounded-2xl border border-white">
                                            <div className="flex justify-between items-start border-b-4 border-forest pb-12">
                                                <div className="space-y-4">
                                                    <div className="w-16 h-16 bg-forest rounded-2xl flex items-center justify-center text-emerald-400 font-black text-3xl italic shadow-2xl shadow-emerald-950/30">P</div>
                                                    <h1 className="text-3xl font-black text-forest leading-none uppercase tracking-tighter italic">Government of Punjab</h1>
                                                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] italic opacity-60">Environmental Protection & Climate Hub</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-4xl font-black text-forest tracking-tighter italic leading-none">2024</p>
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">Fiscal Cycle Ω</p>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <h2 className="text-2xl font-black text-forest uppercase tracking-tighter italic">Executive Inventory Digest</h2>
                                                <div className="grid grid-cols-2 gap-10">
                                                     <div className="p-8 bg-mint/20 rounded-[32px] border border-emerald-50">
                                                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 italic">Aggregated CO2e</p>
                                                          <p className="text-4xl font-black text-forest tracking-tighter italic">15,420.5 <span className="text-xs uppercase not-italic text-emerald-600">kt</span></p>
                                                     </div>
                                                     <div className="p-8 bg-forest rounded-[32px] text-white border-none shadow-2xl shadow-emerald-950/20">
                                                          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2 italic">Primary Vector</p>
                                                          <p className="text-3xl font-black tracking-tighter uppercase italic leading-tight">Lahore <br/><span className="text-emerald-400 opacity-60">District</span></p>
                                                     </div>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <h2 className="text-xl font-black text-forest uppercase tracking-tighter italic mb-4">Cryptographic Seal Analysis</h2>
                                                <div className="p-6 bg-gray-50 border border-emerald-50 rounded-2xl font-mono text-[9px] text-gray-400 break-all select-all leading-relaxed uppercase tracking-widest italic overscroll-none">
                                                     MATRIX_SIG: 8C1943F_PK_PN_E8B2A90C_Ω7721D_X8B20C_SIGN_OK
                                                </div>
                                            </div>

                                            <div className="space-y-4 pt-16">
                                                 <div className="h-1 w-full bg-emerald-50/50 rounded-full"></div>
                                                 <p className="text-[10px] font-black text-gray-400 text-center italic leading-relaxed uppercase tracking-widest opacity-40">This is a system-generated governance block and remains valid without physical endorsement when accessed via verified Provincial Intranet ranges.</p>
                                            </div>
                                       </div>
                                       <div className="absolute inset-0 bg-forest/5 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
                                            <div className="bg-forest text-emerald-400 px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl border border-emerald-900/50 italic">Digital Matrix Artifact</div>
                                       </div>
                                  </div>
                              </Card>
                         </motion.div>
                     ) : (
                         <Card className="border-none bg-white shadow-[0_20px_60px_-15px_rgba(6,78,59,0.08)] overflow-hidden rounded-[48px]">
                              <div className="p-6 bg-emerald-50/20 border-b border-emerald-50 flex justify-between items-center uppercase tracking-[0.3em] text-[9px] font-black text-gray-400 italic">
                                  <span>Regulatory Document Repository</span>
                                  <div className="flex gap-8">
                                       <span className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> SEC_LEAD_01</span>
                                       <span className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-forest" /> ARCH_LEDGER</span>
                                  </div>
                              </div>
                              <div className="overflow-x-auto custom-scrollbar">
                                 <table className="w-full text-left">
                                     <thead>
                                         <tr className="border-b border-emerald-50 text-[10px] font-black uppercase text-forest tracking-widest italic">
                                             <th className="px-10 py-6">Unique Document UID</th>
                                             <th className="px-10 py-6">Identity / Specification</th>
                                             <th className="px-10 py-6">Fidelity Status</th>
                                             <th className="px-10 py-6">Officer focal</th>
                                             <th className="px-10 py-6 text-right">Action Dispatch</th>
                                         </tr>
                                     </thead>
                                     <tbody className="divide-y divide-emerald-50 italic">
                                         {reports.map((report) => (
                                             <tr key={report.id} className="hover:bg-emerald-50/40 transition-all group cursor-pointer">
                                                 <td className="px-10 py-6 text-[11px] font-black text-gray-400 uppercase tracking-tighter select-all group-hover:text-forest transition-colors">{report.id}</td>
                                                 <td className="px-10 py-6">
                                                     <div className="flex flex-col">
                                                         <span className="text-xs font-black text-forest uppercase tracking-tight leading-none mb-2">{report.title}</span>
                                                         <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic opacity-60 leading-none">{report.type}</span>
                                                     </div>
                                                 </td>
                                                 <td className="px-10 py-6">
                                                     <Badge variant={report.status.includes('Public') ? 'success' : report.status === 'Generated' ? 'info' : 'neutral'} className="text-[8px] font-black uppercase border-none px-3 py-1 rounded-md tracking-widest shadow-sm">
                                                         {report.status}
                                                     </Badge>
                                                 </td>
                                                 <td className="px-10 py-6 text-[10px] font-black text-forest uppercase tracking-widest italic opacity-70">{report.user}</td>
                                                 <td className="px-10 py-6 text-right">
                                                      <div className="flex items-center gap-2 justify-end opacity-40 group-hover:opacity-100 transition-opacity">
                                                          <Button variant="ghost" className="p-2 h-auto text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"><Download className="w-5 h-5" /></Button>
                                                          <Button variant="ghost" className="p-2 h-auto text-gray-400 hover:text-forest hover:bg-emerald-50 rounded-lg transition-all"><MoreVertical className="w-5 h-5" /></Button>
                                                      </div>
                                                 </td>
                                             </tr>
                                         ))}
                                     </tbody>
                                 </table>
                              </div>
                              <div className="p-8 bg-emerald-50/20 border-t border-emerald-50 flex justify-center">
                                   <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.4em] group text-gray-400 hover:text-forest h-12 italic">
                                       Browse Extended Document Vault <ChevronRight className="w-4 h-4 ml-4 group-hover:translate-x-3 transition-transform" />
                                   </Button>
                              </div>
                          </Card>
                     )}
                </div>
            </div>
        </div>
    );
};


export default Reporting;
