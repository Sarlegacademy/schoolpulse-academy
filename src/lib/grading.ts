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
