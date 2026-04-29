/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

// Lazy load pages for performance
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const DataRequests = lazy(() => import('./pages/DataRequests'));
const Submissions = lazy(() => import('./pages/Submissions'));
const FactorLibrary = lazy(() => import('./pages/FactorLibrary'));
const MethodologyGovernance = lazy(() => import('./pages/MethodologyGovernance'));
const CalculationEngine = lazy(() => import('./pages/CalculationEngine'));
const InventoryRuns = lazy(() => import('./pages/InventoryRuns'));
const GISVisualization = lazy(() => import('./pages/GISVisualization'));
const ExecutiveInsights = lazy(() => import('./pages/ExecutiveInsights'));
const ApprovalWorkflow = lazy(() => import('./pages/ApprovalWorkflow'));
const PublicPortal = lazy(() => import('./pages/PublicPortal'));
const AuditLogPage = lazy(() => import('./pages/AuditLogs'));
const UserManagement = lazy(() => import('./pages/UserManagement'));
const Settings = lazy(() => import('./pages/Settings'));
const Reporting = lazy(() => import('./pages/Reporting'));
const Notifications = lazy(() => import('./pages/Notifications'));

const ProtectedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) return <div className="h-screen w-screen flex flex-col items-center justify-center bg-white font-black text-forest uppercase tracking-[0.4em] italic gap-6">
    <div className="w-16 h-16 bg-forest rounded-2xl animate-spin shadow-2xl shadow-emerald-900/20 flex items-center justify-center text-emerald-400">P</div>
    Synchronizing Matrix...
  </div>;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <TopNav />
      <main className="ml-72 p-10 pt-28 transition-all duration-300">
        <Suspense fallback={<div className="p-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 italic animate-pulse">Initializing Module...</div>}>
          {children}
        </Suspense>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Suspense fallback={null}><Login /></Suspense>} />
          <Route path="/public-portal" element={<Suspense fallback={null}><PublicPortal /></Suspense>} />
          
          <Route path="/" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
          <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
          <Route path="/data-requests" element={<ProtectedLayout><DataRequests /></ProtectedLayout>} />
          <Route path="/submissions" element={<ProtectedLayout><Submissions /></ProtectedLayout>} />
          <Route path="/factors" element={<ProtectedLayout><FactorLibrary /></ProtectedLayout>} />
          <Route path="/methodologies" element={<ProtectedLayout><MethodologyGovernance /></ProtectedLayout>} />
          <Route path="/calculator" element={<ProtectedLayout><CalculationEngine /></ProtectedLayout>} />
          <Route path="/inventory-runs" element={<ProtectedLayout><InventoryRuns /></ProtectedLayout>} />
          <Route path="/gis" element={<ProtectedLayout><GISVisualization /></ProtectedLayout>} />
          <Route path="/executive" element={<ProtectedLayout><ExecutiveInsights /></ProtectedLayout>} />
          <Route path="/approvals" element={<ProtectedLayout><ApprovalWorkflow /></ProtectedLayout>} />
          <Route path="/audit" element={<ProtectedLayout><AuditLogPage /></ProtectedLayout>} />
          <Route path="/users" element={<ProtectedLayout><UserManagement /></ProtectedLayout>} />
          <Route path="/settings" element={<ProtectedLayout><Settings /></ProtectedLayout>} />
          <Route path="/reporting" element={<ProtectedLayout><Reporting /></ProtectedLayout>} />
          <Route path="/notifications" element={<ProtectedLayout><Notifications /></ProtectedLayout>} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

