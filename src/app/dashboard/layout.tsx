
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_SESSIONS, Role, ROLES, canAccess } from '@/lib/auth';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>('PROPRIETOR');
  const session = MOCK_SESSIONS[role];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0F4C75] rounded-lg flex items-center justify-center text-white font-bold">S</div>
          <div>
            <div className="font-bold leading-none">SARVERUN LEGACY ACADEMY, CHITO</div>
            <div className="text-[11px] text-slate-500">SchoolPulse OS - Proprietor sees everything</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select value={role} onChange={e=>setRole(e.target.value as Role)} className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white">
            {Object.keys(ROLES).map(r=> <option key={r} value={r}>{ROLES[r as Role].label} - {r=== 'PROPRIETOR' ? 'God Mode' : ROLES[r as Role].description}</option>)}
          </select>
          <div className="text-sm text-right">
            <div className="font-semibold">{session.name}</div>
            <div className="text-xs text-slate-500">{session.role}</div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-57px)] p-4 sticky top-[57px]">
          <nav className="space-y-1 text-sm">
            <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50">📊 Dashboard</Link>
            <Link href="/dashboard/students" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50">🎓 Students <span className="ml-auto bg-slate-100 px-2 py-0.5 rounded text-xs">500</span></Link>
            {canAccess(session,'score-entry') && <Link href="/dashboard/score-entry" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium">📝 Score Entry (CA30+70)</Link>}
            <Link href="/dashboard/staff" className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 ${!canAccess(session,'all-staff') && session.role==='TEACHER' ? 'opacity-50 pointer-events-none' : ''}`}>👨‍🏫 Staff <span className="ml-auto bg-slate-100 px-2 py-0.5 rounded text-xs">30</span></Link>
            {canAccess(session,'staff-appraisals') && <Link href="/dashboard/appraisals" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50">⭐ Appraisals x2/Term</Link>}
            <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-400">
              RBAC ACTIVE<br/>
              {session.role==='PROPRIETOR' ? '✅ Full access' : '⚠️ Limited by role'}<br/>
              {session.role==='TEACHER' && `Assigned: ${session.assignedClasses?.join(', ')}`}
            </div>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
