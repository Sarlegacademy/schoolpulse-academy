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
}
