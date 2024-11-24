import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from '../components/Counter/Counter';
import {SettingDesk} from '../components/SettingDesk/SettingDesk';
import GlobalStyles from '../styles/Global.styles';

export type ValuesTypes = {
    max: number
    start: number
}

function App() {
    const [values, setValues] = useState<ValuesTypes>({max: 5, start: 0});

    const [counter, setCounter] = useState<number>(values.start)

    const [isActive, setIsActive] = useState<boolean>(false)//for setting desk

    const [error, setError] = useState<boolean>(false)

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


//bizz logic
    const settingNewCounter = () => {
        setIsActive(false)
        setCounter(values.start)
    }

    const increaseCounter = () => {
        if (counter < values.max) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(values.start)
    }


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
