import React from 'react';
import {StyledWrapper} from '../StyledWrapper';
import {Button} from '../Button/Button';
import styled from 'styled-components';
import {Theme} from '../../styles/Themes';

export const ConditionalDesk = () => {
    return (
        <StyledWrapper className={'main'}>
            <StyledWrapper className={'top'}>
                <form>
                    <StyledFieldset>
                        <StyledLabel htmlFor={'max_value'}>max value:</StyledLabel>
                        <StyledInput id={'max_value'} type={'number'} name={'max_value'}/>
                    </StyledFieldset>
                    <StyledFieldset>
                        <StyledLabel htmlFor={'start_value'}>start value: </StyledLabel>
                        <StyledInput id={'start_value'} type={'number'} name={'start_value'}/>
                    </StyledFieldset>
                </form>
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                <Button title={'set'} onClickHandler={() => {
                }} disabled={true}/>
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


