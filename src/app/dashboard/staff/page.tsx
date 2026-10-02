<<<<<<< HEAD

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
=======
'use client';
import { useMemo, useState } from 'react';
import { generateStaff } from '@/lib/mockData';

export default function StaffPage(){
  const allStaff = useMemo(()=> generateStaff(30), []);
  const [search,setSearch] = useState('');
  const filtered = allStaff.filter(s=> s.name.toLowerCase().includes(search.toLowerCase()) || s.staffId.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900">Staff - 30 Total</h1>
        <p className="text-sm text-slate-500 mb-6">Appraisal twice per term • 5 KPIs equal weight (20% each)</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white border rounded-xl p-4"><p className="text-xs text-slate-500">TOTAL STAFF</p><p className="text-2xl font-bold">30</p></div>
          <div className="bg-white border rounded-xl p-4"><p className="text-xs text-slate-500">TEACHERS</p><p className="text-2xl font-bold">22</p></div>
          <div className="bg-white border rounded-xl p-4"><p className="text-xs text-slate-500">AVG EFFECTIVENESS</p><p className="text-2xl font-bold">78%</p></div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search staff name or SLA/ST/..." className="border rounded-lg px-3 py-2 w-80 text-sm mb-4"/>
          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-slate-500 border-b"><tr><th className="text-left py-2">Staff ID</th><th className="text-left">Name</th><th>Role</th><th>Dept</th><th>Subjects</th><th>Effectiveness</th><th>Status</th></tr></thead>
              <tbody>
                {filtered.map(s=>(
                  <tr key={s.id} className="border-b hover:bg-slate-50">
                    <td className="py-2.5 font-mono text-xs">{s.staffId}</td>
                    <td className="font-medium">{s.name}</td>
                    <td><span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">{s.role}</span></td>
                    <td className="text-xs">{s.department}</td>
                    <td className="text-xs">{s.subjects.join(', ')}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-100 rounded"><div className="h-2 bg-blue-600 rounded" style={{width: `${s.effectiveness}%`}}></div></div>
                        <span className="text-xs font-bold">{s.effectiveness}%</span>
                      </div>
                    </td>
                    <td><span className={`px-2 py-1 rounded text-xs ${s.status==='Active'?'bg-green-100 text-green-700':'bg-yellow-100 text-yellow-700'}`}>{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-white border rounded-xl p-4">
          <h3 className="font-bold mb-2">Staff Appraisal - Twice Per Term Logic</h3>
          <p className="text-sm text-slate-600">Each appraisal: Punctuality 20% + Lesson Plan 20% + Student Outcome 20% + Observation 20% + CPD 20% = 100%</p>
          <p className="text-xs text-slate-500 mt-2">Mid-Term appraisal (Week 6) + End-Term appraisal (Week 12) • 6 per session</p>
        </div>
      </div>
    </main>
  );
>>>>>>> 57993c1e8a7e11c4c9b24c6861b944bc2b45265c
}
