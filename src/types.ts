export interface Question {
  id: string;
  set: 'A' | 'B' | 'Review-Set';
  question: string;
  options: [string, string, string, string]; // exactly 4 options
  correctIndex: number; // 0 to 3
  explanation: string;
  reference: string;
}

export interface AnsweredQuestion {
  id: string;
  chosenIndex: number;
  correctIndex: number;
  isCorrect: boolean;
}

export interface ExamSession {
  questions: Question[];
  currentIndex: number;
  score: number;
  answers: AnsweredQuestion[];
  isSubmitted: boolean;
}
