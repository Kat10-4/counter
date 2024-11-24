import React from 'react';
import styled, {css} from 'styled-components';
import {Theme} from '../../styles/Themes';
import {useStore} from '../../  app/store';


export const Number = () => {

    let counter = useStore((state) => state.counter);
    let values = useStore((state) => state.values);

    return (
        <StyledCounterNumber className={counter === values.max ? "counter-stop" : ""}>{counter}</StyledCounterNumber>
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


