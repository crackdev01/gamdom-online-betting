import { create } from 'zustand';

interface GlobalStore {
    isLoading: boolean;
    isNotificationVisible: boolean;
    setIsLoading: (isLoading: boolean) => void;
    setIsNotificationVisible: (isNotificationVisible: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
    isLoading: false,
    isNotificationVisible: false,
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    setIsNotificationVisible: (isNotificationVisible: boolean) => set({ isNotificationVisible }),
}));
