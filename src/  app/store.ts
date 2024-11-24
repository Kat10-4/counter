import {create} from 'zustand';

type CounterState = {
    counter: number;
    values: {
        start: number;
        max: number;
    };
    isActive: boolean;
    error: boolean;
    setNewCounter: () => void;
    increaseCounter: () => void;
    resetCounter: () => void;
}

export const useStore = create<CounterState>((set) => ({
    counter: 0,
    values: {
        start: 0,
        max: 5,
    },
    isActive: false,
    error: false,
    setNewCounter: () => set((state) => ({counter: state.values.start,isActive:false})),
    increaseCounter: () =>
        set((state) => ({
            counter: state.counter < state.values.max
                ? state.counter + 1
                : state.counter,
        })),
    resetCounter: () => set((state) => ({ counter: state.values.start })),
}))



