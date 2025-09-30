export type PersonalityType = 'builder' | 'collaborator' | 'visionary' | 'analyst' | 'connector';

export type HobbyCategory = 'fitness' | 'arts' | 'music' | 'sports' | 'gaming' | 'cooking' | 'reading' | 'travel';

export type VocationalGoal = 'career-growth' | 'academics' | 'entrepreneurship' | 'creative' | 'social-impact';

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    type: PersonalityType;
  }[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  personalityType?: PersonalityType;
  hobbies: HobbyCategory[];
  goals: VocationalGoal[];
  bio?: string;
}

export interface CompatibilityReport {
  score: number;
  strengths: string[];
  considerations: string[];
  summary: string;
}

export interface SearchRequest {
  id: string;
  userId: string;
  userName: string;
  query: string;
  categories: (HobbyCategory | VocationalGoal)[];
  timestamp: Date;
  status: 'pending' | 'matched';
}

export interface Match {
  id: string;
  user: User;
  compatibilityReport: CompatibilityReport;
  timestamp: Date;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  matchId: string;
  otherUser: User;
  messages: Message[];
  lastMessage?: Message;
}