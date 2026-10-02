<<<<<<< HEAD

// SARVERUN LEGACY ACADEMY - 30/70 Grading Engine
export type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export function calculateGrade(total: number): { grade: Grade; remark: string } {
  if (total >= 70) return { grade: 'A', remark: 'Excellent' };
  if (total >= 60) return { grade: 'B', remark: 'Very Good' };
  if (total >= 50) return { grade: 'C', remark: 'Good' };
  if (total >= 45) return { grade: 'D', remark: 'Fair' };
  if (total >= 40) return { grade: 'E', remark: 'Pass' }; // USER SPECIFIED
  return { grade: 'F', remark: 'Fail' }; // USER SPECIFIED
}

export function calculateTotal(ca: number, exam: number): number {
  const c = Math.min(30, Math.max(0, ca));
  const e = Math.min(70, Math.max(0, exam));
  return c + e;
}

export function isAtRisk(subjects: { total: number }[]): boolean {
  const failed = subjects.filter(s => s.total < 40).length;
  return failed >= 3;
}

export const CLASS_LIST = [
  'JSS1A', 'JSS1B', 'JSS2A', 'JSS2B', 'JSS3A', 'JSS3B',
  'SS1 Science', 'SS1 Arts', 'SS2 Science', 'SS2 Arts', 'SS3 Science', 'SS3 Arts'
] as const;

export const SUBJECTS = [
  'Mathematics', 'English', 'Physics', 'Chemistry', 'Biology',
  'Geography', 'Economics', 'Civic Education', 'Computer Science', 'Agric Science'
] as const;
=======
export type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export function calcTotal(ca: number, exam: number): number {
  return Math.min(30, ca) + Math.min(70, exam);
}

export function getGrade(total: number): Grade {
  if (total >= 70) return 'A';
  if (total >= 60) return 'B';
  if (total >= 50) return 'C';
  if (total >= 45) return 'D';
  if (total >= 40) return 'E';
  return 'F';
}

export function getRemark(grade: Grade): string {
  switch(grade){
    case 'A': return 'Excellent';
    case 'B': return 'Very Good';
    case 'C': return 'Good';
    case 'D': return 'Fair';
    case 'E': return 'Pass';
    case 'F': return 'Fail';
  }
}

export function isAtRisk(total: number): boolean {
  return total < 40;
}

export const CLASSES = ['JSS1A','JSS1B','JSS2A','JSS2B','JSS3A','SS1 Science','SS1 Arts','SS2 Science','SS2 Arts','SS3 Science','SS3 Arts'] as const;
export const SUBJECTS = ['Mathematics','English','Physics','Chemistry','Biology','Economics','Civic','Geography'] as const;
export const TERMS = ['First Term','Second Term','Third Term'] as const;
>>>>>>> 57993c1e8a7e11c4c9b24c6861b944bc2b45265c
