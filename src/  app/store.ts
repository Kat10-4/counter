import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ValuesTypes = {
    max: number;
    start: number;
};

type CounterState = {
    counter: number;
    values: ValuesTypes;
    isActive: boolean;
    error: boolean;
    setValues: (values: { start: number; max: number }) => void;
    setCounter: (counter: number) => void;
    setIsActive: (isActive: boolean) => void;
    setError: (error: boolean) => void;
    setNewCounter: () => void;
    increaseCounter: () => void;
    resetCounter: () => void;
};

const customStorage = {
    getItem: (name: string) => {
        const item = localStorage.getItem(name);
        return item ? JSON.parse(item) : null;
    },
    setItem: (name: string, value: unknown) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
        localStorage.removeItem(name);
    },
};

export const useStore = create<CounterState>()(
    persist(
        (set) => ({
            counter: 0,
            values: {
                start: 0,
                max: 5,
            },
            isActive: false,
            error: false,
            setValues: (values) => set(() => ({ values, counter: values.start })),
            setCounter: (counter) => set(() => ({ counter })),
            setIsActive: (isActive) => set(() => ({ isActive })),
            setError: (error) => set(() => ({ error })),
            setNewCounter: () =>
                set((state) => ({
                    counter: state.values.start,
                    isActive: false,
                })),
            increaseCounter: () =>
                set((state) => ({
                    counter:
                        state.counter < state.values.max
                            ? state.counter + 1
                            : state.counter,
                })),
            resetCounter: () =>
                set((state) => ({
                    counter: state.values.start,
                    isActive: false,
                    error: false,
                })),
        }),
        {
            name: 'counter-storage',
            storage: customStorage,
        }
    )
);
