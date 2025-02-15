
import { Mail, Phone } from "lucide-react";
import { Lead } from "./types";

interface LeadContactProps {
  email: string;
  phone: string | null;
}

export const LeadContact = ({ email, phone }: LeadContactProps) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        <span className="text-sm">{email}</span>
      </div>
      {phone && (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span className="text-sm">{phone}</span>
        </div>
      )}
    </div>
  );
};
