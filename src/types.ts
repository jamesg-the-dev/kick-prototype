import type { LucideIcon } from "lucide-react";

export interface Channel {
  id: number;
  name: string;
  game: string;
  viewers: number;
  live: boolean;
  initials: string;
  color: string;
}

export interface Stream {
  id: number;
  title: string;
  streamer: string;
  game: string;
  viewers: number;
  thumbnail: string;
  tags: string[];
  initials: string;
  color: string;
  featured: boolean;
}

export interface Category {
  name: string;
  viewers: number;
  img: string;
}

export interface NavItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export interface ChatMessage {
  user: string;
  msg: string;
  color: string;
}
