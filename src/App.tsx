import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingDesk} from './components/SettingDesk/SettingDesk';
import GlobalStyles from './styles/Global.styles';


function App() {

    let startValue: number = 2
    let maxValue: number = 5

    const [counter, setCounter] = useState<number>(startValue)

    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => setCounter(startValue)

    const setNewCounter = (newStart:number,newStop:number) => {
        startValue=newStart
        maxValue=newStop
        setCounter(startValue)
    }

    return (
        <div>
            <GlobalStyles/>
            <SettingDesk
                startValue={startValue}
                maxValue={maxValue}
                setNewCounter={setNewCounter}
            />
            <Counter
                counter={counter}
                stopCounter={maxValue}
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}/>
        </div>
    )
        ;
}

export default App;
