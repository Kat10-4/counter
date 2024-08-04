import React from 'react';
import styled from 'styled-components';

type NumberProps = {
    counter: number
    stopVal: number
}

export const Number = ({counter, stopVal}: NumberProps) => {
    return (
        <StyledCounterNumber className={counter === stopVal ? "counter-stop" : ""}>{counter}</StyledCounterNumber>
    );
};

const StyledCounterNumber=styled.h2`
    color: #ea88d6;
    
    .counter-stop{
        color: red;
        font-weight: bold;
    }
`


