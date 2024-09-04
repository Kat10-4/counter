import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingDesk} from './components/SettingDesk/SettingDesk';
import GlobalStyles from './styles/Global.styles';


function App() {

    const [startValue, setStartValue] = useState<number>(0)

    const [maxValue, setMaxValue] = useState<number>(5)

    const [counter, setCounter] = useState<number>(startValue)

    const [isActive, setIsActive] = useState<boolean>(false)//for setting desk

    const [error, setError] = useState<boolean>(false)//error for setting desk


    //Local Storage
    const startValueKey = 'start value'
    const maxValueKey = 'max value'

    useEffect(() => {
        const start = localStorage.getItem(startValueKey)
        const max = localStorage.getItem(maxValueKey)
        if (start && max) {
            setStartValue(JSON.parse(start))
            setCounter(JSON.parse(start))
            setMaxValue(JSON.parse(max))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(startValueKey, JSON.stringify(startValue))
        localStorage.setItem(maxValueKey, JSON.stringify(maxValue))
    }, [startValue, maxValue])


    //Settings logic
    const changeMaxValue = (newVal: number) => {
        if(newVal<0 || newVal===startValue){
            setError(true)
        }else{
            setError(false)
        }
        setIsActive(true)
        setMaxValue(newVal)
    }

    const changeStartValue = (newVal: number) => {
        if(newVal<0 || newVal===maxValue){
            setError(true)
        }else{
            setError(false)
        }
        setStartValue(newVal)
        setIsActive(true)
    }


    //Counter logic
    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => setCounter(startValue)

    const settingNewCounter = () => {
        setIsActive(false)
        resetCounter()
    }



    return (
        <div>
            <GlobalStyles/>
            <SettingDesk
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                isActive={isActive}
                settingNewCounter={settingNewCounter}
            />
            <Counter
                counter={counter}
                stopCounter={maxValue}
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
