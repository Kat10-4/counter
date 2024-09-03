import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {SettingDesk} from './components/SettingDesk/SettingDesk';
import GlobalStyles from './styles/Global.styles';


function App() {

    const [startValue,setStartValue]=useState<number> (2)
    const [maxValue,setMaxValue]=useState<number> (5)

    const [counter, setCounter] = useState<number>(startValue)

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
                changeMaxValue={(newVal)=>setMaxValue(newVal)}
                changeStartValue={(newVal)=>setStartValue(newVal)}
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
