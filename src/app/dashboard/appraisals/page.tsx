
'use client';
import { MOCK_STAFF } from '@/lib/mockData';
import { useState } from 'react';

const KPIS = [
  { key: 'punctuality', label: 'Punctuality & Attendance', weight: 20 },
  { key: 'lessonPlan', label: 'Lesson Plan & Notes', weight: 20 },
  { key: 'studentOutcome', label: 'Student Outcome (Pass % improvement)', weight: 20 },
  { key: 'observation', label: 'Classroom Observation', weight: 20 },
  { key: 'cpd', label: 'Professional Development', weight: 20 },
];

export default function AppraisalsPage(){
  const [staffId,setStaffId] = useState('SLA/ST/004');
  const staff = MOCK_STAFF.find(s=> s.staffId===staffId) || MOCK_STAFF[0];
  const [scores,setScores] = useState<Record<string,number>>({punctuality:85, lessonPlan:78, studentOutcome:82, observation:80, cpd:75});
  const total = Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/5);
  const [termStage,setTermStage] = useState('Mid-Term');

  return (
    <div className="space-y-4">
      <div><h1 className="text-xl font-bold">Staff Appraisal - Twice per Term (Mid & End)</h1><p className="text-xs text-slate-500">Proprietor & Principal can appraise. All 5 KPIs equal weight 20% - "Everyone matters"</p></div>

      <div className="bg-white border rounded-xl p-4 flex gap-3">
        <select value={staffId} onChange={e=>setStaffId(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">{MOCK_STAFF.slice(0,10).map((s:any)=> <option key={s.staffId} value={s.staffId}>{s.staffId} - {s.name}</option>)}</select>
        <select value={termStage} onChange={e=>setTermStage(e.target.value)} className="border rounded-lg px-3 py-2 text-sm"><option>Mid-Term - First Term</option><option>End-Term - First Term</option><option>Mid-Term - Second Term</option><option>End-Term - Second Term</option></select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border rounded-xl p-5">
          <div className="font-semibold">{staff.name}</div><div className="text-xs text-slate-500">{staff.role} | {staff.classes.join(', ')}</div>
          <div className="mt-4 text-3xl font-bold text-[#0F4C75]">{total}%</div><div className="text-xs">Effectiveness Index - {termStage}</div>
          <div className="mt-4 space-y-2 text-xs">{KPIS.map(k=> <div key={k.key} className="flex justify-between"><span>{k.label}</span><span className="font-mono">{scores[k.key]}%</span></div>)}</div>
          <div className="mt-4 p-2 bg-blue-50 rounded text-xs">💡 Insight: Student pass rate in {staff.subjects[0]} improved 12% vs last term - linked to CPD.</div>
        </div>
        <div className="col-span-2 bg-white border rounded-xl p-5 space-y-4">
          <div className="font-semibold">Appraisal Form - {termStage} (All KPIs 20% weight)</div>
          {KPIS.map(k=> (
            <div key={k.key} className="border border-slate-100 rounded-lg p-3">
              <div className="flex justify-between text-sm"><span className="font-medium">{k.label} ({k.weight}%)</span><span className="font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">{scores[k.key]}%</span></div>
              <input type="range" min={0} max={100} value={scores[k.key]} onChange={e=>setScores({...scores, [k.key]: Number(e.target.value)})} className="w-full mt-2"/>
              <div className="flex justify-between text-[10px] text-slate-400"><span>0 - Needs Improvement</span><span>100 - Outstanding</span></div>
            </div>
          ))}
          <div className="flex justify-end gap-2 pt-2"><button className="border rounded-lg px-4 py-2 text-sm">Save Draft</button><button className="bg-[#0F4C75] text-white rounded-lg px-4 py-2 text-sm">Submit Appraisal - Proprietor will see everything</button></div>
        </div>
      </div>
    </div>
  )
}
