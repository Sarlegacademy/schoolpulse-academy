
'use client';
import { MOCK_STUDENTS, MOCK_STAFF } from '@/lib/mockData';
import { useState } from 'react';
import { MOCK_SESSIONS, Role } from '@/lib/auth';

export default function DashboardPage(){
  const atRisk = MOCK_STUDENTS.filter((s:any)=> s.subjects.filter((sub:any)=>sub.total<40).length>=3).length;
  const top = MOCK_STUDENTS.filter((s:any)=> s.avgScore>=70).length;
  const lowStaff = MOCK_STAFF.filter((s:any)=> s.effectiveness<60).length;
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Performance Intelligence - 2024/2025 First Term</h1>
        <p className="text-slate-500 text-sm">30% CA + 70% Exam | 3 Terms | 500 Students | 30 Staff | Appraisal 2x per term</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4"><div className="text-xs text-slate-500">TOTAL STUDENTS</div><div className="text-2xl font-bold">500</div><div className="text-xs text-green-600">Active: {MOCK_STUDENTS.filter((s:any)=>s.status==='Active').length}</div></div>
        <div className="bg-white border border-slate-200 rounded-xl p-4"><div className="text-xs text-slate-500">AT-RISK (F in 3+ subs)</div><div className="text-2xl font-bold text-red-600">{atRisk}</div><div className="text-xs">Need intervention</div></div>
        <div className="bg-white border border-slate-200 rounded-xl p-4"><div className="text-xs text-slate-500">TOP PERFORMERS (A avg)</div><div className="text-2xl font-bold text-blue-600">{top}</div><div className="text-xs">≥70% total</div></div>
        <div className="bg-white border border-slate-200 rounded-xl p-4"><div className="text-xs text-slate-500">STAFF NEED SUPPORT</div><div className="text-2xl font-bold text-orange-600">{lowStaff}</div><div className="text-xs">Effectiveness &lt;60%</div></div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 col-span-2">
          <div className="font-semibold mb-3">Class Average - First Term</div>
          <div className="space-y-2">
            {['JSS1A','JSS2B','SS1 Science','SS2 Science','SS3 Science'].map(cls=>{
              const avg = Math.floor(45+Math.random()*30);
              return <div key={cls} className="flex items-center gap-3"><div className="w-24 text-xs">{cls}</div><div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-[#0F4C75]" style={{width: `${avg}%`}} /></div><div className="w-8 text-xs">{avg}%</div></div>
            })}
          </div>
        </div>
        <div className="bg-[#0F4C75] text-white rounded-xl p-5">
          <div className="font-semibold">Proprietor Insight</div>
          <p className="text-sm mt-2 text-blue-100">Your Maths dept (Mr. Okoro) improved SS2 Science by 12% after training. Correlation: CPD → Student Outcome. Twice-per-term appraisal is working.</p>
          <div className="mt-4 text-xs bg-white/10 rounded p-2">Grading: CA 30 + Exam 70 | E=Pass F=Fail</div>
        </div>
      </div>
    </div>
  )
}
