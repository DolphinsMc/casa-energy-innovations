
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service_type: string;
  status: string;
  qualification_score: number;
  created_at: string;
  message?: string;
  updated_at?: string;
}
