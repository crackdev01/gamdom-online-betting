import { create } from 'zustand';
import { Event } from 'types';


interface SportEventsStore {
    events: Event[];
    setEvents: (events: Event[]) => void;
}

export const useSportEventsStore = create<SportEventsStore>((set) => ({
    events: [],
    setEvents: (events: Event[]) => set({ events }),
}));