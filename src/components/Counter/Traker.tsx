import * as React from 'react';
import styled from 'styled-components';

type TrakerProps = {
    curentVal: number,
    stopVal: number
};

export const Traker = ({curentVal, stopVal}: TrakerProps) => {
    return (
        <StyledTraker>
            <StyledTrakerLine style={{width: `calc(${curentVal}/${stopVal}*100%)`}}></StyledTrakerLine>
        </StyledTraker>
    );
};

const StyledTraker = styled.div`
    width: 100px;
    height: 4px;
    border: 1px solid powderblue;
    padding: 1px;
`
const StyledTrakerLine = styled.div`
    height: 100%;
    background-color: powderblue;
`
