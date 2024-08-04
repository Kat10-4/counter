import React from 'react';
import {Number} from './Number';
import {Tracker} from './Tracker';
import {Button} from '../Button/Button';
import {StyledWrapper} from '../StyledWrapper';

type CounterProps = {
    counter: number
    stopCounter: number
    increaseCounter: () => void
    isBtnDisabled: boolean
    setRandValue: () => void
}

export const Counter = ({counter, stopCounter, increaseCounter, isBtnDisabled, setRandValue}: CounterProps) => {
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
                        disabled={!isBtnDisabled}
                        classes={!isBtnDisabled ? '' : 'active'}/>
                    <Button
                        title={'reset'}
                        onClickHandler={setRandValue}
                        disabled={isBtnDisabled}
                        classes={isBtnDisabled ? '' : 'active'}/>
                </div>
            </StyledWrapper>
        </StyledWrapper>
    );
};
