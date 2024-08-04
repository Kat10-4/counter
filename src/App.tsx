import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import styled from 'styled-components';
import {StyledWrapper} from './components/StyledWrapper';
import {ConditionalDesk} from './components/ConditionalDesk/ConditionalDesk';
import GlobalStyles from './styles/Global.styles';


function App() {
    const startValue = 0
    const stopValue = 5

    const [counter, setCounter] = useState<number>(startValue)
    const [stopCounter, setStopCounter] = useState<number>(stopValue)

    const increaseCounter = () => {
        if (counter < stopCounter) {
            setCounter(counter + 1)
        }
    }

    const setRandValue = () => {
        setStopCounter(Math.round(Math.random() * 10 + 1))
        setCounter(startValue)
    }

    const isBtnDisabled = counter < stopCounter

    return (
        <div>
            <GlobalStyles/>
            <ConditionalDesk/>
            <Counter
                counter={counter}
                stopCounter={stopCounter}
                increaseCounter={increaseCounter}
                isBtnDisabled={isBtnDisabled}
                setRandValue={setRandValue}/>
        </div>
    )
        ;
}

export default App;
