import React, {useEffect} from 'react';
import './App.css';
import {Counter} from '../components/Counter/Counter';
import {SettingDesk} from '../components/SettingDesk/SettingDesk';
import GlobalStyles from '../styles/Global.styles';
import {useStore} from 'zustand';




export type ValuesTypes = {
    max: number
    start: number
}

function App() {
    const counter = useStore((state) => state.counter);
    const values = useStore((state) => state.values);
    const isActive = useStore((state) => state.isActive);
    const error = useStore((state) => state.error);
    const setNewCounter = useStore((state) => state.setNewCounter);
    const increaseCounter = useStore((state) => state.increaseCounter);
    const resetCounter = useStore((state) => state.resetCounter);

    //Local Storage
    const valuesKey = 'start value'

    useEffect(() => {
        const storeValues = localStorage.getItem(valuesKey)

        if (storeValues) {
            const values = JSON.parse(storeValues)
            setValues(values)
            setCounter(values.start)
        }
    }, [])

    useEffect(() => {
        if (!error) {
            localStorage.setItem(valuesKey, JSON.stringify(values))
        }
    }, [values,error])


    return (
        <div style={{display:'flex',gap:'20px'}}>
            <GlobalStyles/>
            <SettingDesk
                values={values}
                setValues={setValues}
                isActive={isActive}
                setIsActive={setIsActive}
                settingNewCounter={settingNewCounter}
                setError={setError}
            />
            <Counter
                counter={counter}
                stopCounter={values.max}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                isActive={isActive}
                error={error}
            />
        </div>
    )
        ;
}

export default App;
