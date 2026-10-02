<<<<<<< HEAD

import { CLASS_LIST, SUBJECTS } from './grading';

const firstNames = ['Chinedu', 'Emeka', 'Aisha', 'Fatima', 'Tunde', 'Blessing', 'David', 'Grace', 'Musa', 'Zainab', 'John', 'Femi', 'Kemi', 'Uche', 'Ngozi', 'Sani', 'Yusuf', 'Amaka', 'Obi', 'Chiamaka'];
const surnames = ['Okoro', 'Ade', 'Musa', 'Bello', 'Ojo', 'Eze', 'Nwachukwu', 'Ibrahim', 'Okafor', 'Mohammed', 'Smith', 'Johnson', 'Umar', 'Sule', 'Chukwu'];

function rand(min:number, max:number){ return Math.floor(Math.random()*(max-min+1))+min; }

export interface Student {
  admissionNo: string;
  firstName: string;
  surname: string;
  class: string;
  gender: 'M'|'F';
  parentPhone: string;
  avgScore: number;
  status: 'Active'|'Graduated'|'Left';
  dob: string;
  parentName: string;
  address: string;
  subjects: { subject: string; ca: number; exam: number; total: number; grade: string }[];
  attendance: number;
  behavior: number;
}

export interface Staff {
  staffId: string;
  name: string;
  role: 'Subject Teacher'|'Class Teacher'|'Principal'|'Admin Officer'|'Bursar'|'Support';
=======
import { CLASSES, SUBJECTS } from './grading';

export type Student = {
  id: string;
  admissionNo: string;
  firstName: string;
  surname: string;
  fullName: string;
  class: typeof CLASSES[number];
  gender: 'M' | 'F';
  parentPhone: string;
  avg: number;
  status: 'Active' | 'Graduated' | 'Left';
  dob: string;
};

export type Staff = {
  id: string;
  staffId: string;
  name: string;
  role: 'Principal' | 'Vice Principal' | 'Subject Teacher' | 'Class Teacher' | 'Bursar' | 'Admin';
>>>>>>> 57993c1e8a7e11c4c9b24c6861b944bc2b45265c
  department: string;
  subjects: string[];
  classes: string[];
  qualification: string;
<<<<<<< HEAD
  dateJoined: string;
  effectiveness: number;
  status: 'Active'|'On Leave';
}

function genStudent(i: number): Student {
  const cls = CLASS_LIST[rand(0, CLASS_LIST.length-1)];
  const gender = Math.random()>0.5?'M':'F' as any;
  const fn = firstNames[rand(0, firstNames.length-1)];
  const sn = surnames[rand(0, surnames.length-1)];
  const ca = rand(8, 30);
  const exam = rand(20, 70);
  const total = ca+exam;
  let grade = 'F';
  if(total>=70) grade='A'; else if(total>=60) grade='B'; else if(total>=50) grade='C'; else if(total>=45) grade='D'; else if(total>=40) grade='E';
  
  return {
    admissionNo: `SLA/${2024+Math.floor(i/200)}/${String(i).padStart(3,'0')}`,
    firstName: fn,
    surname: sn,
    class: cls,
    gender,
    parentPhone: `080${rand(10000000,99999999)}`,
    avgScore: total,
    status: Math.random()>0.05?'Active':'Left',
    dob: `${rand(2008,2015)}-${String(rand(1,12)).padStart(2,'0')}-${String(rand(1,28)).padStart(2,'0')}`,
    parentName: `Mr/Mrs ${surnames[rand(0,surnames.length-1)]}`,
    address: `${rand(1,50)} Chito Road, Benue`,
    attendance: rand(65,98),
    behavior: rand(2,5),
    subjects: SUBJECTS.slice(0,5).map(sub => {
      const c = rand(10,30); const e = rand(25,70); const t = c+e;
      let g='F'; if(t>=70) g='A'; else if(t>=60) g='B'; else if(t>=50) g='C'; else if(t>=45) g='D'; else if(t>=40) g='E';
      return { subject: sub, ca: c, exam: e, total: t, grade: g };
    })
  };
}

function genStaff(i: number): Staff {
  const roles: Staff['role'][] = ['Subject Teacher','Subject Teacher','Subject Teacher','Class Teacher','Admin Officer','Bursar','Support','Principal'];
  const depts = ['Sciences','Arts','Commercial','Admin','Management'];
  const quals = ['B.Ed Mathematics','M.Ed English','NCE','B.Sc Computer Science','M.Sc Physics','B.Ed Economics'];
  const fn = firstNames[rand(0,firstNames.length-1)]; const sn = surnames[rand(0,surnames.length-1)];
  return {
    staffId: `SLA/ST/${String(i).padStart(3,'0')}`,
    name: `${fn} ${sn}`,
    role: i===1?'Principal':roles[rand(0,roles.length-1)],
    department: depts[rand(0,depts.length-1)],
    subjects: [SUBJECTS[rand(0,SUBJECTS.length-1)], SUBJECTS[rand(0,SUBJECTS.length-1)]],
    classes: [CLASS_LIST[rand(0,CLASS_LIST.length-1)], CLASS_LIST[rand(0,CLASS_LIST.length-1)]],
    qualification: quals[rand(0,quals.length-1)],
    dateJoined: `${2020+rand(0,4)}-0${rand(1,9)}-15`,
    effectiveness: rand(45,98),
    status: Math.random()>0.1?'Active':'On Leave'
  };
}

export const MOCK_STUDENTS: Student[] = Array.from({length: 500}, (_,i)=> genStudent(i+1));
export const MOCK_STAFF: Staff[] = Array.from({length: 30}, (_,i)=> genStaff(i+1));
// For quick demo, ensure our test teacher has students
MOCK_STAFF[3].staffId = 'SLA/ST/004'; MOCK_STAFF[3].name='Mr. Okoro - Maths Teacher'; MOCK_STAFF[3].classes=['SS2 Science','SS1 Science']; MOCK_STAFF[3].subjects=['Mathematics'];
=======
  effectiveness: number;
  status: 'Active' | 'On Leave';
};

const firstNames = ['David','Grace','Emmanuel','Blessing','Joshua','Favour','Samuel','Mercy','Daniel','Peace','Joseph','Joy','Michael','Patience','John','Esther','Peter','Ruth','Paul','Mary','James','Sarah','Thomas','Rebecca'];
const surnames = ['Okoro','Bello','Adeyemi','Udo','Ibrahim','Okafor','Eze','Musa','Ali','Chukwu','Abdul','Nnamdi','Okon','Garba','Ojo','Yusuf','Obi','Sule','Adebayo','Mohammed'];

function rand(min:number,max:number){ return Math.floor(Math.random()*(max-min+1))+min; }

export function generateStudents(count=500): Student[] {
  const list: Student[] = [];
  for(let i=0;i<count;i++){
    const fn = firstNames[rand(0,firstNames.length-1)];
    const sn = surnames[rand(0,surnames.length-1)];
    const cls = CLASSES[rand(0,CLASSES.length-1)];
    const avg = rand(32,95);
    list.push({
      id: `STU-${1000+i}`,
      admissionNo: `SLA/2024/${String(i+1).padStart(4,'0')}`,
      firstName: fn,
      surname: sn,
      fullName: `${fn} ${sn}`,
      class: cls,
      gender: Math.random() > 0.5 ? 'M' : 'F',
      parentPhone: `080${rand(10000000,99999999)}`,
      avg,
      status: avg < 35 && Math.random() > 0.8 ? 'Left' : 'Active',
      dob: `${rand(2008,2016)}-${String(rand(1,12)).padStart(2,'0')}-${String(rand(1,28)).padStart(2,'0')}`
    });
  }
  return list;
}

export function generateStaff(count=30): Staff[] {
  const roles: Staff['role'][] = ['Principal','Vice Principal','Subject Teacher','Subject Teacher','Subject Teacher','Class Teacher','Class Teacher','Bursar','Admin'];
  const depts = ['Sciences','Arts','Commercial','Administration'];
  const list: Staff[] = [];
  for(let i=0;i<count;i++){
    const fn = firstNames[rand(0,firstNames.length-1)];
    const sn = surnames[rand(0,surnames.length-1)];
    const role = i===0 ? 'Principal' : i===1 ? 'Vice Principal' : roles[rand(0,roles.length-1)];
    list.push({
      id: `STF-${100+i}`,
      staffId: `SLA/ST/${String(i+1).padStart(3,'0')}`,
      name: `${fn} ${sn}`,
      role,
      department: depts[rand(0,depts.length-1)],
      subjects: [SUBJECTS[rand(0,SUBJECTS.length-1)], SUBJECTS[rand(0,SUBJECTS.length-1)]].filter((v,i,a)=>a.indexOf(v)===i).slice(0,2),
      classes: [CLASSES[rand(0,2)], CLASSES[rand(3,5)]],
      qualification: ['B.Ed Mathematics','M.Ed Science','B.Sc Biology','NCE English','B.A History'][rand(0,4)],
      effectiveness: rand(58,96),
      status: Math.random() > 0.9 ? 'On Leave' : 'Active'
    });
  }
  return list;
}

export function generateScoreEntry(students: Student[], subject: string) {
  return students.map(s=>({
    studentId: s.id,
    admissionNo: s.admissionNo,
    fullName: s.fullName,
    ca: rand(8,30),
    exam: rand(20,70),
  }));
}
>>>>>>> 57993c1e8a7e11c4c9b24c6861b944bc2b45265c
