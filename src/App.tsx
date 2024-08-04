import React, { useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import styled from 'styled-components';


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
        <StyledWrapper>
            <Counter/>
            {/*<ConditionalDesk/>*/}
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    margin: 10vw;
    width: 140px;
    height: 140px;
    border: 2px solid powderblue;
    background-color: #545b5b;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default App;
