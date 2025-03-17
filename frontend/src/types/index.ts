export type Event = {
  id: number;
  name: string;
  description?: string;
  date?: Date;
  location?: string;
  image?: string;
  odds: number;
}

export type EventList = {
  events: Event[];
}
