
'use client';
import { useState } from 'react';
import { MOCK_STUDENTS } from '@/lib/mockData';
import { CLASS_LIST, SUBJECTS, calculateTotal, calculateGrade } from '@/lib/grading';

export default function ScoreEntryPage(){
  const [cls,setCls] = useState('SS2 Science');
  const [subject,setSubject] = useState('Mathematics');
  const [term,setTerm] = useState('First Term');
  const [session,setSession] = useState('2024/2025');

  const students = MOCK_STUDENTS.filter((s:any)=> s.class===cls).slice(0,25);
  const [scores,setScores] = useState<Record<string,{ca:number,exam:number}>>({});

  const update = (admissionNo:string, field:'ca'|'exam', val:number)=>{
    const max = field==='ca'?30:70;
    const v = Math.min(max, Math.max(0, val));
    setScores(prev=> ({...prev, [admissionNo]: {...(prev[admissionNo]||{ca:0,exam:0}), [field]: v}}));
  };

  return (
    <div className="space-y-4">
      <div><h1 className="text-xl font-bold">Score Entry - Subject Teacher Mode (CA30 + Exam70)</h1><p className="text-xs text-slate-500">Teacher: Mr. Okoro - Mathematics | Class: {cls} | Term: {term} | E=Pass F=Fail</p></div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 grid grid-cols-4 gap-3">
        <select value={cls} onChange={e=>setCls(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">{CLASS_LIST.map((c:any)=> <option key={c} value={c}>{c}</option>)}</select>
        <select value={subject} onChange={e=>setSubject(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">{SUBJECTS.map((s:any)=> <option key={s} value={s}>{s}</option>)}</select>
        <select value={term} onChange={e=>setTerm(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option>First Term</option><option>Second Term</option><option>Third Term</option></select>
        <select value={session} onChange={e=>setSession(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option>2024/2025</option></select>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="p-3 bg-slate-50 text-xs flex justify-between"><span>{students.length} students in {cls} | Subject: {subject}</span><span className="text-slate-500">CA max 30 | Exam max 70 | E=Pass F=Fail</span></div>
        <table className="w-full text-sm"><thead className="bg-white text-xs text-slate-500 border-b"><tr><th className="p-2 text-left">#</th><th className="text-left">Admission No</th><th className="text-left">Name</th><th className="text-left w-20">CA (30)</th><th className="text-left w-20">Exam (70)</th><th className="text-left w-16">Total</th><th className="text-left w-16">Grade</th><th className="text-left">Remark</th></tr></thead>
        <tbody>
          {students.map((s,i)=>{
            const sc = scores[s.admissionNo] || {ca: s.subjects[0]?.ca || 0, exam: s.subjects[0]?.exam || 0};
            const total = calculateTotal(sc.ca, sc.exam);
            const {grade, remark} = calculateGrade(total);
            return <tr key={s.admissionNo} className="border-t border-slate-100 hover:bg-slate-50"><td className="p-2">{i+1}</td><td className="font-mono text-xs">{s.admissionNo}</td><td className="font-medium">{s.firstName} {s.surname}</td><td><input type="number" min={0} max={30} value={sc.ca} onChange={e=>update(s.admissionNo,'ca',Number(e.target.value))} className="w-16 border border-slate-200 rounded px-2 py-1 text-sm"/></td><td><input type="number" min={0} max={70} value={sc.exam} onChange={e=>update(s.admissionNo,'exam',Number(e.target.value))} className="w-16 border border-slate-200 rounded px-2 py-1 text-sm"/></td><td className="font-bold">{total}</td><td><span className={`px-2 py-0.5 rounded text-xs ${grade==='F'?'bg-red-100 text-red-700': grade==='E'?'bg-yellow-100 text-yellow-700':'bg-green-100 text-green-700'}`}>{grade}</span></td><td className={`text-xs ${grade==='F'?'text-red-600':'text-slate-600'}`}>{remark}</td></tr>
          })}
        </tbody>
        </table>
        <div className="p-3 flex justify-end gap-2 border-t"><button className="border rounded-lg px-4 py-2 text-sm">Save Draft</button><button className="bg-[#0F4C75] text-white rounded-lg px-4 py-2 text-sm">Submit to Principal - {term}</button></div>
      </div>
    </div>
  )
}
