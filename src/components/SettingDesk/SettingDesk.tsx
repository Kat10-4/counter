import React, { ChangeEvent} from 'react';
import { StyledWrapper } from '../StyledWrapper';
import { Button } from '../Button/Button';
import styled from 'styled-components';
import { Theme } from '../../styles/Themes';
import {ErrorsTypes, useStore, ValuesTypes} from '../../  app/store';


export const SettingDesk = () => {

    let values = useStore((state) => state.values);
    let error = useStore((state) => state.error);
    let isActive = useStore((state) => state.isActive);
    const setValues = useStore((state) => state.setValues);
    const setError = useStore((state) => state.setError);
    const setIsActive=useStore((state)=>state.setIsActive)
    const setNewCounter=useStore((state)=>state.setNewCounter)

    const isError=error.max || error.start || error.comparison
    const isButtonActive= !isError && isActive

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsActive(true);

        const { name, value } = e.target;
        const newValue = parseInt(value);

        const newValues: ValuesTypes = { ...values, [name]: newValue };
        const newErrors: ErrorsTypes = { ...error };

        newErrors[name] = newValue < 0;
        newErrors.comparison = newValues.max <= newValues.start;

        setValues(newValues);
        setError(newErrors);
    };


    const onClickHandler = () => {
        setNewCounter();
    };


    return (
        <StyledWrapper className={'main'}>
            <StyledWrapper className={'top'}>
                <form>
                    <StyledFieldset>
                        <StyledLabel htmlFor={'max'}>max value:</StyledLabel>
                        <StyledInput
                            id={'max'}
                            type={'number'}
                            name={'max'}
                            value={values.max}
                            onChange={inputChangeHandler}
                            $error={error.max || error.comparison}
                        />
                    </StyledFieldset>
                    <StyledFieldset>
                        <StyledLabel htmlFor={'start'}>start value: </StyledLabel>
                        <StyledInput
                            id={'start'}
                            type={'number'}
                            name={'start'}
                            value={values.start}
                            onChange={inputChangeHandler}
                            $error={error.start || error.comparison}
                        />
                    </StyledFieldset>
                </form>
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                <Button
                    title={'set'}
                    onClickHandler={onClickHandler}
                    disabled={!isActive || isError}
                    classes={isButtonActive ? 'active' : ''}
                />
            </StyledWrapper>
        </StyledWrapper>
    );
};

const StyledFieldset = styled.fieldset`
    border: none;
    display: flex;
    justify-content: space-between;
`;

const StyledLabel = styled.label`
    color: ${Theme.color.accent};
    font-weight: bold;
    text-align: left;
    margin: 0 10px;
`;

const StyledInput = styled.input<{ $error: boolean }>`
    border: 1px solid ${Theme.color.accent};
    border-radius: 2px;
    width: 70px;
    background-color: ${props => (props.$error ? Theme.color.counter.error : Theme.color.secondaryBG)};
    font-size: 12px;
    text-align: center;
    outline: none;
`;