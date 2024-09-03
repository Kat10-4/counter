import React from 'react';
import {Number} from './Number';
import {Tracker} from './Tracker';
import {Button} from '../Button/Button';
import {StyledWrapper} from '../StyledWrapper';

type CounterProps = {
    counter: number
    stopCounter: number
    increaseCounter: () => void
    resetCounter: () => void
}

export const Counter = ({counter, stopCounter, increaseCounter, resetCounter}: CounterProps) => {

    return (
        <StyledWrapper className={'main'}>
            <StyledWrapper className={'top'}>
                <Number counter={counter} stopVal={stopCounter}/>
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                <Tracker currentVal={counter} stopVal={stopCounter}/>
                <div>
                    <Button
                        title={'inc'}
                        onClickHandler={increaseCounter}
                        disabled={counter === stopCounter}
                        classes={counter === stopCounter  ? '' : 'active'}/>
                    <Button
                        title={'reset'}
                        onClickHandler={resetCounter}
                        disabled={false}
                        classes={'active'}/>
                </div>
            </StyledWrapper>
        </StyledWrapper>
    );
};
