export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  size: 'small' | 'medium' | 'large' | 'tall'; // Determines grid span
  year: string;
}

export interface InsightResponse {
  text: string;
  loading: boolean;
  error: string | null;
}