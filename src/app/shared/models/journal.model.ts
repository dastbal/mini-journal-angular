export interface Journal {
  id: string;
  title: string;
  content: string;
  user_profile: number;
}
export interface createJournalDTO extends Omit<Journal, 'id'> {}
export interface updateJournalDTO extends Partial<createJournalDTO> {}
