export interface Session {
  id: number;
  date: string; // ISO string
  duration: number;
}

export interface MeditationState {
  totalMinutes: number;
  sessions: Session[];
}

export enum TimeFormat {
  HOURS_MINUTES = 'HOURS_MINUTES',
  TOTAL_HOURS = 'TOTAL_HOURS',
}