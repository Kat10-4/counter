import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingDesk} from './components/SettingDesk/SettingDesk';
import GlobalStyles from './styles/Global.styles';


function App() {

    const [startValue, setStartValue] = useState<number>(2)
    const [maxValue, setMaxValue] = useState<number>(5)

    const [isActive, setIsActive] = useState<boolean>(false)//for settings desk

    const [counter, setCounter] = useState<number>(startValue)


    //Settings logic
    const changeMaxValue = (newVal: number) => {
        setMaxValue(newVal)
        setIsActive(true)
    }

    const changeStartValue = (newVal: number) => {
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


    return (
        <div>
            <GlobalStyles/>
            <SettingDesk
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                isActive={isActive}
            />
            <Counter
                counter={counter}
                stopCounter={maxValue}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
                isActive={isActive}
            />
        </div>
    )
        ;
}

export default App;
