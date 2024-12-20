export type ValuesTypes = {
    max: number;
    start: number;
};

type CounterTypes = {
    values: { max: number, start: number },
    counter: number,
    isActive: boolean,
    error: boolean,
}

const initialState: CounterTypes = {
    values: {max: 5, start: 0},
    counter: 0,
    isActive: false,
    error: false,
};


export function counterReducer(state: CounterTypes = initialState, action: ActionsType) {
    switch (action.type) {
        case 'SET_VALUES': {
            const {max, start} = action.payload;
            return {
                ...state,
                values: {max, start},
                counter: start,
                error: start < 0 || start > max, // Error validation
            };
        }
        case 'INCREMENT':
            return {
                ...state,
                counter: Math.min(state.counter + 1, state.values.max),
            };
        case 'RESET':
            return {
                ...state,
                counter: state.values.start,
            };
        case 'TOGGLE_ACTIVE':
            return {
                ...state,
                isActive: action.payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}


// Action creators

export const setValues = (values: ValuesTypes) => {
    return {type: 'SET_VALUES', payload: values} as const
};
export const increment = () => {
    return {type: 'INCREMENT'} as const
};
export const reset = () => {
    return {type: 'RESET'} as const
};
export const toggleActive = (isActive: boolean) => {
    return {type: 'TOGGLE_ACTIVE', payload: isActive} as const
};
export const setError = (error: boolean) => {
    return {type: 'SET_ERROR', payload: error} as const};


// Actions types
    export type SetValuesActionType = ReturnType<typeof setValues>
    export type IncrementActionType = ReturnType<typeof increment>
    export type ResetActionType = ReturnType<typeof reset>
    export type ToggleActiveActionType = ReturnType<typeof toggleActive>
    export type SetErrorActionType = ReturnType<typeof setError>


    type ActionsType =
        SetValuesActionType
        | IncrementActionType
        | ResetActionType
        | ToggleActiveActionType
        | SetErrorActionType