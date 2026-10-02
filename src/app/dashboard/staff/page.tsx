
'use client';
import { MOCK_STAFF } from '@/lib/mockData';
import { MOCK_SESSIONS, canAccess, Role } from '@/lib/auth';
import { useState } from 'react';

export default function StaffPage(){
  const [role,setRole] = useState<Role>('PROPRIETOR');
  const session = MOCK_SESSIONS[role];
  const canSeeAll = canAccess(session,'all-staff');

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div><h1 className="text-xl font-bold">Staff - 30 | RBAC Demo</h1><p className="text-xs text-slate-500">{canSeeAll ? 'Full staff list (Proprietor/Admin/Principal)' : 'Teacher cannot see all staff - own profile only per your requirement'}</p></div>
        <select value={role} onChange={e=>setRole(e.target.value as Role)} className="border rounded-lg px-2 py-1 text-xs"><option value="PROPRIETOR">Proprietor - sees everything</option><option value="TEACHER">Teacher - limited</option><option value="ADMIN">Admin - limited</option></select>
      </div>

      {!canSeeAll ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-sm"><div className="font-semibold">Access Restricted</div><p className="mt-1 text-slate-600">As {role}, you can only see your own profile per your rule: "limit staff/admin users personal pages except where designed". Switch to Proprietor to see all.</p><div className="mt-3 bg-white border rounded p-3"><div className="font-mono text-xs">{session.staffId} - {session.name}</div><div className="text-xs">Assigned: {session.assignedClasses?.join(', ')} - {session.assignedSubjects?.join(', ')}</div><div className="mt-2 text-xs">Effectiveness: 82% | Status: Active</div></div></div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm"><thead className="bg-slate-50 text-xs text-slate-500"><tr><th className="p-3 text-left">Staff ID</th><th className="text-left">Name</th><th className="text-left">Role</th><th className="text-left">Classes</th><th className="text-left">Effectiveness</th><th className="text-left">Status</th></tr></thead>
          <tbody>{MOCK_STAFF.map((s:any)=> <tr key={s.staffId} className="border-t border-slate-100 hover:bg-slate-50"><td className="p-3 font-mono text-xs">{s.staffId}</td><td className="font-medium">{s.name}</td><td>{s.role}</td><td className="text-xs">{s.classes.join(', ')}</td><td><div className="flex items-center gap-2"><div className="w-16 h-2 bg-slate-100 rounded-full"><div className={`h-full rounded-full ${s.effectiveness<60?'bg-red-500': s.effectiveness<75?'bg-yellow-500':'bg-green-600'}`} style={{width:`${s.effectiveness}%`}} /></div><span className="text-xs">{s.effectiveness}%</span></div></td><td>{s.status}</td></tr>)}</tbody></table>
        </div>
      )}
    </div>
  )
}
