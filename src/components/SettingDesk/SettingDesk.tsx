import React, {useState} from 'react';
import {StyledWrapper} from '../StyledWrapper';
import {Button} from '../Button/Button';
import styled from 'styled-components';
import {Theme} from '../../styles/Themes';

type ConditionalDeskProps = {
    startValue:number
    maxValue:number
    setNewCounter:(newStart:number,newStop:number)=>void
}

export const SettingDesk = ({startValue,maxValue,setNewCounter}: ConditionalDeskProps) => {


    const setNewValuesHandler = () => {

    }


    return (
        <StyledWrapper className={'main'}>
            <StyledWrapper className={'top'}>
                <form>
                    <StyledFieldset>
                        <StyledLabel htmlFor={'max_value'}>max value:</StyledLabel>
                        <StyledInput
                            id={'max_value'}
                            type={'number'}
                            name={'max_value'}
                            value={maxValue}
                        />
                    </StyledFieldset>
                    <StyledFieldset>
                        <StyledLabel htmlFor={'start_value'}>start value: </StyledLabel>
                        <StyledInput
                            id={'start_value'}
                            type={'number'}
                            name={'start_value'}
                            value={startValue}
                        />
                    </StyledFieldset>
                </form>
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                <Button title={'set'} onClickHandler={setNewValuesHandler} disabled={false} classes={'active'}/>
            </StyledWrapper>
        </StyledWrapper>
    );
};

const StyledFieldset = styled.fieldset`
    border: none;
    display: flex;
    justify-content: space-between;
`

const StyledLabel = styled.label`
    color: ${Theme.color.accent};
    font-weight: bold;
    text-align: left;
    margin: 0 10px;
`

const StyledInput = styled.input`
    border: 1px solid ${Theme.color.accent};
    border-radius: 2px;
    width: 70px;
    background-color: ${Theme.color.secondaryBG};
    font-size: 12px;
    text-align: center;
    outline: none;

    // for error -> outline+background color
`


