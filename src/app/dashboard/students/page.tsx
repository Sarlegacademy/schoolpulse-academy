
'use client';
import { useState, useMemo } from 'react';
import { MOCK_STUDENTS } from '@/lib/mockData';
import { CLASS_LIST } from '@/lib/grading';
import { MOCK_SESSIONS, Role, filterStudentsByRole } from '@/lib/auth';

export default function StudentsPage(){
  const [role,setRole] = useState<Role>('PROPRIETOR');
  const session = MOCK_SESSIONS[role];
  const [search,setSearch] = useState('');
  const [classFilter,setClassFilter] = useState('All');
  const [page,setPage] = useState(1);
  const perPage = 15;

  const filtered = useMemo(()=>{
    let data = filterStudentsByRole(MOCK_STUDENTS, session);
    if(search) data = data.filter((s:any)=> `${s.firstName} ${s.surname} ${s.admissionNo}`.toLowerCase().includes(search.toLowerCase()));
    if(classFilter!=='All') data = data.filter((s:any)=> s.class===classFilter);
    return data;
  },[search,classFilter,session]);

  const paged = filtered.slice((page-1)*perPage, page*perPage);
  const totalPages = Math.ceil(filtered.length/perPage);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Students - {filtered.length} / 500</h1>
          <p className="text-xs text-slate-500">Role: {role} {role==='TEACHER' ? `(Only ${session.assignedClasses?.join(', ')})` : '(Sees all - Proprietor God Mode)'} | CA30+Exam70 | E=Pass F=Fail</p>
        </div>
        <select value={role} onChange={e=>setRole(e.target.value as Role)} className="border rounded-lg px-2 py-1 text-xs">
          <option value="PROPRIETOR">Proprietor (Full)</option><option value="TEACHER">Teacher (Limited)</option><option value="ADMIN">Admin</option>
        </select>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-3 flex gap-2">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name / admission no" className="border border-slate-200 rounded-lg px-3 py-2 text-sm flex-1"/>
        <select value={classFilter} onChange={e=>setClassFilter(e.target.value)} className="border border-slate-200 rounded-lg px-3 py-2 text-sm">
          <option value="All">All Classes</option>{CLASS_LIST.map((c:any)=> <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500"><tr><th className="p-3 text-left">Admission No</th><th className="text-left">Name</th><th className="text-left">Class</th><th className="text-left">Avg</th><th className="text-left">Grade</th><th className="text-left">Status</th></tr></thead>
          <tbody>
            {paged.map((s:any)=>{
              const grade = s.avgScore>=70?'A': s.avgScore>=60?'B': s.avgScore>=50?'C': s.avgScore>=45?'D': s.avgScore>=40?'E':'F';
              const isRisk = s.subjects.filter((sub:any)=>sub.total<40).length>=3;
              return <tr key={s.admissionNo} className={`border-t border-slate-100 hover:bg-slate-50 ${isRisk?'bg-red-50':''}`}><td className="p-3 font-mono text-xs">{s.admissionNo}</td><td className="font-medium">{s.firstName} {s.surname} {isRisk && <span className="ml-2 text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded">AT-RISK</span>}</td><td>{s.class}</td><td>{s.avgScore}</td><td><span className={`px-2 py-1 rounded text-xs ${grade==='F'?'bg-red-100 text-red-700': grade==='E'?'bg-yellow-100 text-yellow-700':'bg-green-100 text-green-700'}`}>{grade} - {grade==='E'?'Pass':grade==='F'?'Fail':grade}</span></td><td>{s.status}</td></tr>
            })}
          </tbody>
        </table>
        <div className="p-3 flex justify-between text-xs border-t">
          <div>Page {page} of {totalPages} - Showing {paged.length} of {filtered.length}</div>
          <div className="flex gap-2"><button disabled={page===1} onClick={()=>setPage(p=>p-1)} className="border rounded px-2 py-1 disabled:opacity-50">Prev</button><button disabled={page===totalPages} onClick={()=>setPage(p=>p+1)} className="border rounded px-2 py-1 disabled:opacity-50">Next</button></div>
        </div>
      </div>
    </div>
  )
}
