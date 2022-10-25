import { EventColor } from "calendar-utils";

export interface Lesson {
  color: EventColor;
  id: number;
  year: number;
  month: number;
  week: number;
  start: string;
  end: string;
  duration: number;
  day: string;
  title: string;
  teacher: string;
  classroom: string;
  class: string;
}
