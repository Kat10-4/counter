import React from 'react';
import {Number} from './Number';
import {Tracker} from './Tracker';
import {Button} from '../Button/Button';
import {StyledWrapper} from '../StyledWrapper';
import styled from 'styled-components';
import {Theme} from '../../styles/Themes';
import {useStore} from '../../  app/store';

export const Counter = () => {

    let counter = useStore((state) => state.counter);
    let values = useStore((state) => state.values);
    let isActive = useStore((state) => state.isActive);
    let error = useStore((state) => state.error);
    const increaseCounter = useStore((state) => state.increaseCounter)
    const resetCounter = useStore((state)=>state.resetCounter)

    return (
        <StyledWrapper className={'main'}>
            <StyledWrapper className={'top'}>
                {isActive ?
                    <StyledMessage error={error}>
                        {error ? 'Incorrect value!' : 'Enter value and press \'set\''}
                    </StyledMessage>
                    : <Number counter={counter} stopVal={values.max}/>}
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                {!isActive && <Tracker currentVal={counter} stopVal={values.max}/>}
                <div>
                    <Button
                        title={'inc'}
                        onClickHandler={increaseCounter}
                        disabled={isActive || counter === values.max}
                        classes={isActive || counter === values.max ? '' : 'active'}/>
                    <Button
                        title={'reset'}
                        onClickHandler={resetCounter}
                        disabled={isActive}
                        classes={isActive ? '' : 'active'}/>
                </div>
            </StyledWrapper>
        </StyledWrapper>
    );
};

const StyledMessage = styled.p<{ error: boolean }>`
    color: ${props => props.error ? Theme.color.counter.error : Theme.color.accent};
    text-align: center;
    font-size: 16px;
    font-weight: bold;
`

