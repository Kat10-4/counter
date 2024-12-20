export function counterReducer(state, action) {
    switch (action.type) {
        case 'SET_VALUES': {
            const { max, start } = action.payload;
            return {
                ...state,
                values: { max, start },
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
