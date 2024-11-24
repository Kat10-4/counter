import * as React from 'react';
import styled from 'styled-components';
import {Theme} from '../../styles/Themes';
import {useStore} from '../../  app/store';


export const Tracker = () => {

    let counter = useStore((state) => state.counter);
    let values = useStore((state) => state.values);

    return (
        <StyledTracker>
            <StyledTrackerLine style={{width: `calc(${counter}/${values.max}*100%)`}}></StyledTrackerLine>
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
