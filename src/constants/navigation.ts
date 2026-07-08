import {
  Home,
  TrendingUp,
  Grid3X3,
  Users,
  Trophy,
  Flame,
} from "lucide-react";
import type { NavItem } from "../types";

export const navItems: NavItem[] = [
  { icon: Home, label: "Home", active: true },
  { icon: TrendingUp, label: "Following" },
  { icon: Flame, label: "Browse" },
  { icon: Grid3X3, label: "Categories" },
  { icon: Trophy, label: "Esports" },
  { icon: Users, label: "Crew" },
];
