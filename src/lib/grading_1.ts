
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
