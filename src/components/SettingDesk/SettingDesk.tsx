import React, {ChangeEvent,useState} from 'react';
import {StyledWrapper} from '../StyledWrapper';
import {Button} from '../Button/Button';
import styled from 'styled-components';
import {Theme} from '../../styles/Themes';

type ConditionalDeskProps = {
    maxValue:number
    startValue:number
    changeMaxValue:(newVal:number)=>void
    changeStartValue:(newVal:number)=>void
    isActive:boolean
}

export const SettingDesk = ({maxValue,startValue,changeStartValue,changeMaxValue,isActive}: ConditionalDeskProps) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue(+e.target.value)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeStartValue(+e.target.value)
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
                            onChange={onChangeMaxValue}
                        />
                    </StyledFieldset>
                    <StyledFieldset>
                        <StyledLabel htmlFor={'start_value'}>start value: </StyledLabel>
                        <StyledInput
                            id={'start_value'}
                            type={'number'}
                            name={'start_value'}
                            value={startValue}
                            onChange={onChangeStartValue}
                        />
                    </StyledFieldset>
                </form>
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                <Button title={'set'} onClickHandler={() => {
                }} disabled={isActive} classes={isActive?'active':''}/>
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


