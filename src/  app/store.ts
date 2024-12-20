import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from '../model/counter-reducer';

const rootReducer = combineReducers(
    {
        counter: counterReducer
    }
)

export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

