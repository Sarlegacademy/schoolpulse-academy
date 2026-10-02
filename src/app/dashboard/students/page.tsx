'use client';
import { useMemo, useState } from 'react';
import { generateStudents, Student } from '@/lib/mockData';
import { CLASSES } from '@/lib/grading';

export default function StudentsPage(){
  const allStudents = useMemo(()=> generateStudents(500), []);
  const [search,setSearch] = useState('');
  const [classFilter,setClassFilter] = useState<string>('All');
  const [page,setPage] = useState(1);
  const perPage = 15;

  const filtered = allStudents.filter(s=>{
    const matchSearch = s.fullName.toLowerCase().includes(search.toLowerCase()) || s.admissionNo.toLowerCase().includes(search.toLowerCase());
    const matchClass = classFilter==='All' || s.class===classFilter;
    return matchSearch && matchClass;
  });

  const paginated = filtered.slice((page-1)*perPage, page*perPage);
  const totalPages = Math.ceil(filtered.length/perPage);
  const atRisk = allStudents.filter(s=> s.avg < 40).length;

  return (
    <main className="min-h-screen bg-[#f8fafc] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Students - SARVERUN LEGACY ACADEMY</h1>
            <p className="text-slate-500 text-sm">500 total • {atRisk} at-risk flagged • 30/70 grading</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm">+ Admit Student</span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white border rounded-xl p-4"><p className="text-xs text-slate-500">TOTAL STUDENTS</p><p className="text-2xl font-bold">500</p></div>
          <div className="bg-white border rounded-xl p-4"><p className="text-xs text-slate-500">AT-RISK (&lt;40%)</p><p className="text-2xl font-bold text-red-600">{atRisk}</p></div>
          <div className="bg-white border rounded-xl p-4"><p className="text-xs text-slate-500">JSS</p><p className="text-2xl font-bold">~240</p></div>
          <div className="bg-white border rounded-xl p-4"><p className="text-xs text-slate-500">SSS</p><p className="text-2xl font-bold">~260</p></div>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <div className="flex gap-3 mb-4">
            <input value={search} onChange={e=>{setSearch(e.target.value); setPage(1)}} placeholder="Search name or SLA/2024/..." className="border rounded-lg px-3 py-2 w-80 text-sm"/>
            <select value={classFilter} onChange={e=>{setClassFilter(e.target.value); setPage(1)}} className="border rounded-lg px-3 py-2 text-sm">
              <option value="All">All Classes</option>
              {CLASSES.map(c=><option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead className="text-xs text-slate-500 border-b"><tr><th className="text-left py-2">Admission No</th><th className="text-left">Name</th><th>Class</th><th>Gender</th><th>Parent Phone</th><th>Avg</th><th>Status</th></tr></thead>
              <tbody>
                {paginated.map(s=>(
                  <tr key={s.id} className="border-b hover:bg-slate-50">
                    <td className="py-2.5 font-mono text-xs">{s.admissionNo}</td>
                    <td className="font-medium">{s.fullName}</td>
                    <td><span className="px-2 py-1 bg-slate-100 rounded text-xs">{s.class}</span></td>
                    <td className="text-center">{s.gender}</td>
                    <td className="font-mono text-xs">{s.parentPhone}</td>
                    <td className={`text-center font-bold ${s.avg<40?'text-red-600': s.avg>=70?'text-green-600':'text-slate-700'}`}>{s.avg}%</td>
                    <td><span className={`px-2 py-1 rounded text-xs ${s.status==='Active'?'bg-green-100 text-green-700':'bg-red-100 text-red-700'}`}>{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4 text-sm">
            <p className="text-slate-500">Showing {paginated.length} of {filtered.length} filtered (500 total)</p>
            <div className="flex gap-2">
              <button disabled={page===1} onClick={()=>setPage(p=>p-1)} className="px-3 py-1 border rounded disabled:opacity-30">Prev</button>
              <span className="px-2 py-1">Page {page} / {totalPages}</span>
              <button disabled={page===totalPages} onClick={()=>setPage(p=>p+1)} className="px-3 py-1 border rounded disabled:opacity-30">Next</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
