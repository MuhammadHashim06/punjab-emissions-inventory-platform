import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MOCK_USERS } from '../constants';
import { Card, Button } from '../components/ui/BaseComponents';
import { Shield, Lock, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showMfa, setShowMfa] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = MOCK_USERS.find(u => u.email === email);
    if (user) {
      setShowMfa(true);
      setError('');
    } else {
      setError('Credentials not found in government directory.');
    }
  };

  const handleMfaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '123456') {
      await login(email);
      navigate('/dashboard');
    } else {
      setError('Invalid code. Please use 123456 for demo.');
    }
  };

  return (
    <div className="min-h-screen bg-mint flex items-center justify-center p-6 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-forest text-emerald-400 shadow-2xl mb-4 group hover:rotate-12 transition-transform duration-500">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black text-forest tracking-tighter">PUNJAB E-INVENTORY</h1>
          <p className="text-emerald-800/60 font-bold uppercase tracking-[0.3em] text-[10px]">Ministry of Environment Protection</p>
        </div>

        <Card className="p-8 border border-emerald-100 shadow-[0_32px_64px_-16px_rgba(27,67,50,0.1)]">
          <AnimatePresence mode="wait">
            {!showMfa ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                key="login-step"
              >
                <form onSubmit={handleInitialSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-forest uppercase tracking-widest flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5" />
                      Government Credential
                    </label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@punjab.gov.pk"
                      className="w-full px-4 py-3.5 rounded-xl border border-emerald-100 bg-emerald-50/30 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-forest uppercase tracking-widest flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5" />
                      Encrypted Key
                    </label>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      className="w-full px-4 py-3.5 rounded-xl border border-emerald-100 bg-emerald-50/30 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm font-medium"
                    />
                  </div>

                  {error && <p className="text-[10px] font-bold text-rose-600 bg-rose-50 p-2 rounded-lg border border-rose-100 text-center uppercase tracking-widest">{error}</p>}

                  <Button className="w-full py-4 text-xs tracking-widest rounded-xl font-black uppercase transition-all shadow-xl shadow-emerald-900/10 group bg-forest">
                    Access Infrastructure
                    <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                key="mfa-step"
              >
                <form onSubmit={handleMfaSubmit} className="space-y-6 text-center">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-forest">Multifactor Challenge</h3>
                  <p className="text-xs text-gray-500 font-medium">Verify your session via government-issued authenticator.</p>

                  <input 
                    type="text" 
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="000000"
                    className="w-full bg-emerald-50/30 border-2 border-emerald-100 focus:border-emerald-500 focus:ring-0 rounded-xl px-4 py-4 text-center text-3xl font-mono tracking-[0.5em] outline-none transition-all"
                    maxLength={6}
                  />

                  {error && <p className="text-[10px] font-bold text-rose-600 uppercase italic">{error}</p>}

                  <Button className="w-full py-4 rounded-xl font-black uppercase text-[10px] tracking-widest bg-forest">
                    Validate Hardware Token
                  </Button>

                  <button 
                    type="button"
                    onClick={() => setShowMfa(false)}
                    className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors"
                  >
                    Resend Code (123456)
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        {/* Improved Demo Selector */}
        <div className="bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-emerald-100/50">
           <p className="text-[9px] font-black text-forest uppercase mb-3 tracking-[0.2em] opacity-60">Directory Nodes (Live)</p>
           <div className="flex flex-wrap gap-2">
             {MOCK_USERS.map(u => (
               <button 
                 key={u.id}
                 onClick={() => setEmail(u.email)}
                 className="text-[9px] font-bold px-3 py-1.5 rounded-lg bg-white border border-emerald-100 text-forest hover:bg-emerald-600 hover:text-white transition-all shadow-sm uppercase tracking-tight"
               >
                 {u.name.split(' ')[0]} ({u.role.split('_')[0]})
               </button>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
