import React from 'react';
import styled, {css} from 'styled-components';
import {Theme} from '../../styles/Themes';

type NumberProps = {
    counter: number
    stopVal: number
}

export const Number = ({counter, stopVal}: NumberProps) => {
    return (
        <StyledCounterNumber className={counter === stopVal ? "counter-stop" : ""}>{counter}</StyledCounterNumber>
    );
};

const StyledCounterNumber=styled.h1`
    color:${Theme.color.counter.primary};
    text-align: center;
    font-size: 40px;
    
    ${props=>props.className==='counter-stop'&&css`
        color: ${Theme.color.counter.error};
        font-weight: bold;
    `}
`


