export type Status = "draft" | "pending_review" | "approved" | "published" | "rejected" | "archived";

export type FrameworkType =
  | "cultural_identity"
  | "progress_perfection"
  | "identity_strength_maturity"
  | "executive_functioning"
  | "capability_accommodation"
  | "intentional_living"
  | "session_reflection";

export type ChatType = "coach_client" | "client_journal" | "system_assisted";

export interface Session {
  session_id: string;
  client_id: string;
  coach_id: string;
  session_type: string;
  started_at: string;
  ended_at?: string;
  recording_url?: string;
  consent_to_record: boolean;
  notes?: string;
  status: Status;
  created_at: string;
  updated_at: string;
}

export interface Assessment {
  assessment_id: string;
  client_id: string;
  coach_id: string;
  session_id: string;
  transcript_id: string;
  framework_type: FrameworkType;
  status: Status;
  sections: Record<string, any>;
  ai_insights: Record<string, any>;
  coach_notes: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  message_id: string;
  chat_id: string;
  sender_id: string;
  sender_role: "client" | "coach" | "system";
  content: string;
  created_at: string;
  status: string;
  safety_flag: boolean;
  risk_flags: string[];
}
