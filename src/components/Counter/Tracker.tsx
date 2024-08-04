import * as React from 'react';
import styled from 'styled-components';
import {Theme} from '../../styles/Themes';

type TrackerProps = {
    currentVal: number,
    stopVal: number
};

export const Tracker = ({currentVal, stopVal}: TrackerProps) => {
    return (
        <StyledTracker>
            <StyledTrackerLine style={{width: `calc(${currentVal}/${stopVal}*100%)`}}></StyledTrackerLine>
        </StyledTracker>
    );
};

const StyledTracker = styled.div`
    width: 80%;
    height: 10px;
    border: 1px solid ${Theme.color.accent};
    padding: 1px;
    margin: 5px;
`
const StyledTrackerLine = styled.div`
    height: 100%;
    background-color: ${Theme.color.accent};
`
