import {create} from 'zustand';

export type ValuesTypes = {
    max: number
    start: number
}

type CounterState = {
    counter: number;
    values: ValuesTypes;
    isActive: boolean;
    error: boolean;
    setValues: (values: { start: number; max: number }) => void;
    setCounter: (counter: number) => void;
    setIsActive:(isActive:boolean)=>void;
    setError:(error:boolean)=>void;
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
    setValues: (values) => set((state) => ({ values, counter: values.start })),
    setCounter: (counter) => set({ counter }),
    setIsActive:(isActive)=>set({ isActive }),
    setError:(error)=>set({ error }),
    setNewCounter: () => set((state) => ({counter: state.values.start,isActive:false})),
    increaseCounter: () =>
        set((state) => ({
            counter: state.counter < state.values.max
                ? state.counter + 1
                : state.counter,
        })),
    resetCounter: () => set((state) => ({ counter: state.values.start })),
}))



