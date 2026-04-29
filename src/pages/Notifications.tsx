import React from 'react';
import { Card, Badge, Button } from '../components/ui/BaseComponents';
import { 
  Bell, 
  MessageSquare, 
  UserPlus, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Activity,
  ArrowRight
} from 'lucide-react';

const Notifications: React.FC = () => {
    const notifications = [
        { id: 1, title: 'New Data Request Assigned', msg: 'Department request REQ-089 has been assigned to your sectoral node.', time: '14 mins ago', type: 'request', unread: true },
        { id: 2, title: 'Submission Received', msg: 'Transport Dept has submitted Q1 activity logs for verification.', time: '2 hours ago', type: 'submission', unread: true },
        { id: 3, title: 'Approval Pending', msg: 'Methodology Framework MET-02 is awaiting your administrative sign-off.', time: '5 hours ago', type: 'approval', unread: false },
        { id: 4, title: 'Inventory Frozen', msg: 'Fiscal Year 2023 Cycle has been successfully frozen and hashed.', time: 'Yesterday', type: 'system', unread: false },
        { id: 5, title: 'Inventory Published', msg: 'Aggregate summary for 2023 is now live on the Public Portal.', time: '2 days ago', type: 'public', unread: false },
    ];

    return (
        <div className="space-y-8 max-w-4xl mx-auto pb-20">
            <div className="flex justify-between items-end px-2">
                <div>
                    <h1 className="text-[32px] font-black text-forest tracking-[-0.05em] uppercase leading-none italic">Activity Ledger</h1>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4 italic opacity-60">Synchronized environmental workflow events & node-state alerts</p>
                </div>
                <Button variant="outline" className="text-[10px] font-black uppercase tracking-widest h-11 px-8 border-emerald-100 text-forest bg-white rounded-xl shadow-sm hover:bg-emerald-50 italic">Mark All Validated</Button>
            </div>

            <div className="space-y-6">
                {notifications.map((n) => (
                    <Card key={n.id} className={`p-8 transition-all hover:translate-x-2 border-none rounded-[32px] relative overflow-hidden group shadow-[0_10px_40px_-10px_rgba(6,78,59,0.04)] ${
                        n.unread ? 'bg-white ring-2 ring-emerald-500/20' : 'bg-emerald-50/20 grayscale-[0.2]'
                    }`}>
                        <div className="flex gap-8 relative z-10">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xl transition-transform group-hover:scale-110 ${
                                n.type === 'request' ? 'bg-forest text-emerald-400 shadow-emerald-950/20' :
                                n.type === 'submission' ? 'bg-emerald-600 text-white shadow-emerald-600/20' :
                                n.type === 'approval' ? 'bg-amber-600 text-white shadow-amber-600/20' :
                                n.type === 'system' ? 'bg-rose-700 text-white shadow-rose-700/20' : 'bg-forest text-white shadow-emerald-950/20'
                            }`}>
                                {n.type === 'request' ? <FileText className="w-7 h-7" /> :
                                 n.type === 'submission' ? <CheckCircle2 className="w-7 h-7" /> :
                                 n.type === 'approval' ? <MessageSquare className="w-7 h-7" /> :
                                 n.type === 'system' ? <AlertCircle className="w-7 h-7" /> : <Activity className="w-7 h-7" />}
                            </div>
                            <div className="flex-1 space-y-3">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-black text-forest uppercase tracking-tighter leading-none italic">{n.title}</h3>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic opacity-50">{n.time}</span>
                                </div>
                                <p className="text-[13px] font-bold text-gray-500 leading-relaxed italic opacity-80">{n.msg}</p>
                                <div className="pt-4 flex items-center gap-8">
                                     <button className="text-[10px] font-black uppercase text-emerald-700 hover:text-forest flex items-center gap-2 group/btn tracking-widest italic transition-colors">
                                         Commence Protocol <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                     </button>
                                     <button className="text-[10px] font-black uppercase text-gray-300 hover:text-rose-600 tracking-widest italic transition-colors">Abort</button>
                                </div>
                            </div>
                            {n.unread && (
                                <div className="absolute top-0 right-0 p-4">
                                     <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                                     <div className="w-3 h-3 bg-emerald-500 rounded-full absolute inset-0 m-4 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                                </div>
                            )}
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000 pointer-events-none"></div>
                    </Card>
                ))}
            </div>
            
            <div className="flex flex-col items-center gap-6 pt-12">
                 <div className="w-1 h-12 bg-emerald-100 rounded-full"></div>
                 <Button variant="ghost" className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 hover:text-forest transition-all italic hover:tracking-[0.5em] h-12">
                     Retrieve Historical Archive
                 </Button>
            </div>
        </div>
    );
};


export default Notifications;
