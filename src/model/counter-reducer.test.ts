import {counterReducer, increment, initialState, reset, setError, setValues, toggleActive} from './counter-reducer';

test('should set values correctly', () => {
    const newValues = {max: 10, start: 2};
    const action = setValues(newValues);
    const newState = counterReducer(initialState, action);

    expect(newState.values).toEqual(newValues);
    expect(newState.counter).toBe(newValues.start);
    expect(newState.error).toBe(false);
});

test('should handle error when start > max', () => {
    const newValues = {max: 5, start: 10};
    const action = setValues(newValues);
    const newState = counterReducer(initialState, action);

    expect(newState.error).toBe(true);
});

test('should increment counter', () => {
    const state = {...initialState, counter: 3, values: {max: 5, start: 0}};
    const action = increment();
    const newState = counterReducer(state, action);

    expect(newState.counter).toBe(4);
});

test('should not increment counter beyond max', () => {
    const state = {...initialState, counter: 5, values: {max: 5, start: 0}};
    const action = increment();
    const newState = counterReducer(state, action);

    expect(newState.counter).toBe(5);
});

test('should reset counter to start value', () => {
    const state = {...initialState, counter: 3, values: {max: 5, start: 2}};
    const action = reset();
    const newState = counterReducer(state, action);

    expect(newState.counter).toBe(2);
});

test('should toggle isActive state', () => {
    const action = toggleActive(true);
    const newState = counterReducer(initialState, action);

    expect(newState.isActive).toBe(true);

    const newAction = toggleActive(false);
    const toggledState = counterReducer(newState, newAction);

    expect(toggledState.isActive).toBe(false);
});

test('should set error state', () => {
    const action = setError(true);
    const newState = counterReducer(initialState, action);

    expect(newState.error).toBe(true);

    const newAction = setError(false);
    const clearedState = counterReducer(newState, newAction);

    expect(clearedState.error).toBe(false);
});

