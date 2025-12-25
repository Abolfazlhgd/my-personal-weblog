// types.ts
export interface PostData {
  id: string;
  title: string;
  date: string;
  category?: string; // علامت سوال یعنی اختیاری است
}