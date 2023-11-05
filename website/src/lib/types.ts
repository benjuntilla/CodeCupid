import { UUID } from "crypto";

export type User = {
  id: string;
  name: string;
  skills: string;
  university?: string;
  description?: string;
  metadata?: Record<string, any>;
  profile_pfp?: string;
};

export type Project = {
  id?: UUID;
  name: string;
  description: string;
  skills_required: string;
  created_user: UUID;
  metadata: Record<string, any>;
  project_img?: string;
};

export type Notification = {
  id?: UUID;
  user_uuid: UUID;
  project_uuid: UUID;
};