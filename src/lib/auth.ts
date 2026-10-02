
// SARVERUN - Role Based Access Control
// Proprietor sees everything. Others limited.

export type Role = 'PROPRIETOR' | 'PRINCIPAL' | 'ADMIN' | 'TEACHER' | 'BURSAR';

export interface Session {
  id: string;
  name: string;
  role: Role;
  assignedClasses?: string[]; // For TEACHER
  assignedSubjects?: string[]; // For TEACHER
  staffId?: string;
}

export const ROLES: Record<Role, { label: string; description: string }> = {
  PROPRIETOR: { label: 'Proprietor', description: 'Full access to everything including finances & appraisals' },
  PRINCIPAL: { label: 'Principal', description: 'All students, all staff, can appraise' },
  ADMIN: { label: 'Admin Officer', description: 'Students + Staff info, no salary/appraisal edit' },
  TEACHER: { label: 'Subject Teacher', description: 'Only assigned classes + own profile + score entry for own subjects' },
  BURSAR: { label: 'Bursar', description: 'Students + fees, no staff appraisals' }
};

// MOCK SESSION - Replace with real auth later (NextAuth / Supabase Auth)
export const MOCK_SESSIONS: Record<Role, Session> = {
  PROPRIETOR: { id: '1', name: 'Dr. Sarverun - Proprietor', role: 'PROPRIETOR' },
  PRINCIPAL: { id: '2', name: 'Mr. Musa - Principal', role: 'PRINCIPAL' },
  ADMIN: { id: '3', name: 'Mrs. Ade - Admin', role: 'ADMIN' },
  TEACHER: { id: '4', name: 'Mr. Okoro - Maths Teacher', role: 'TEACHER', assignedClasses: ['SS2 Science', 'SS1 Science'], assignedSubjects: ['Mathematics'], staffId: 'SLA/ST/004' },
  BURSAR: { id: '5', name: 'Mrs. Ngozi - Bursar', role: 'BURSAR' }
};

export function canAccess(session: Session, resource: string): boolean {
  const { role, assignedClasses } = session;
  if (role === 'PROPRIETOR') return true; // God mode
  if (role === 'PRINCIPAL') return true; // Sees everything except maybe finance config

  switch (resource) {
    case 'all-students':
      return ['ADMIN', 'TEACHER', 'BURSAR'].includes(role);
    case 'all-staff':
      return role === 'ADMIN'; // TEACHER cannot see all staff list
    case 'own-profile':
      return true; // Everyone can see own profile
    case 'staff-appraisals':
      return ['PRINCIPAL', 'PROPRIETOR'].includes(role); // Only Principal & Proprietor can appraise
    case 'score-entry':
      return ['TEACHER', 'PRINCIPAL', 'PROPRIETOR'].includes(role);
    case 'student-full-profile':
      if (role === 'TEACHER') {
        // Teacher can only view if student is in assigned class - checked in component
        return true; 
      }
      return ['ADMIN', 'BURSAR', 'PRINCIPAL', 'PROPRIETOR'].includes(role);
    default:
      return false;
  }
}

export function filterStudentsByRole(students: any[], session: Session) {
  if (session.role === 'PROPRIETOR' || session.role === 'PRINCIPAL' || session.role === 'ADMIN' || session.role === 'BURSAR') {
    return students;
  }
  if (session.role === 'TEACHER') {
    return students.filter(s => session.assignedClasses?.includes(s.class));
  }
  return [];
}
