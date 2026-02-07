import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface leftBarState {
    status: boolean;
    changeStatus: (newStatus: boolean ) => void;
}

export const leftBarStore = create<leftBarState>()(
    persist(
        (set) => ({
            status: false,
            changeStatus: (newStatus:boolean) => set({ status: newStatus }),
        }), {
        name: "topBarStatus",
        storage: createJSONStorage(() => sessionStorage),
    }));
