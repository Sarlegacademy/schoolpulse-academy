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
  department: string;
  subjects: string[];
  classes: string[];
  qualification: string;
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
