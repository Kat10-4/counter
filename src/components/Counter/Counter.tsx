import React from 'react';
import {Number} from './Number';
import {Tracker} from './Tracker';
import {Button} from '../Button/Button';
import {StyledWrapper} from '../StyledWrapper';
import styled from 'styled-components';
import {Theme} from '../../styles/Themes';

type CounterProps = {
    counter: number
    stopCounter: number
    increaseCounter: () => void
    resetCounter: () => void
    isActive:boolean
}

export const Counter = ({counter, stopCounter, increaseCounter, resetCounter,isActive}: CounterProps) => {

    return (
        <StyledWrapper className={'main'}>
            <StyledWrapper className={'top'}>
                {isActive?<StyledMessage>Enter value and press 'set'</StyledMessage>:<Number counter={counter} stopVal={stopCounter}/>}
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                {!isActive&&<Tracker currentVal={counter} stopVal={stopCounter}/>}
                <div>
                    <Button
                        title={'inc'}
                        onClickHandler={increaseCounter}
                        disabled={isActive || counter === stopCounter}
                        classes={isActive || counter === stopCounter  ? '' : 'active'}/>
                    <Button
                        title={'reset'}
                        onClickHandler={resetCounter}
                        disabled={isActive}
                        classes={isActive?'':'active'}/>
                </div>
            </StyledWrapper>
        </StyledWrapper>
    );
};

const StyledMessage=styled.p`
    color:${Theme.color.accent};
    text-align: center;
    font-size: 16px;
`
