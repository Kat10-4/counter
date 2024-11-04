import React, { ChangeEvent, useState } from 'react';
import { StyledWrapper } from '../StyledWrapper';
import { Button } from '../Button/Button';
import styled from 'styled-components';
import { Theme } from '../../styles/Themes';
import { ValuesTypes } from '../../App';

type ConditionalDeskProps = {
    values: ValuesTypes;
    setValues: (values: ValuesTypes) => void;
    isActive: boolean;
    setIsActive: (value: boolean) => void;
    settingNewCounter: () => void;
    setError: (value: boolean) => void;
};

type ErrorsTypes = {
    [key: string]: boolean;
};

export const SettingDesk = ({
                                values,
                                setValues,
                                isActive,
                                setIsActive,
                                settingNewCounter,
                                setError,
                            }: ConditionalDeskProps) => {
    const [errors, setErrors] = useState<ErrorsTypes>({ max: false, start: false, comparison: false });

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsActive(true);

        const { name, value } = e.target;
        const newValue = parseInt(value);

        const newValues: ValuesTypes = { ...values, [name]: newValue };
        const newErrors: ErrorsTypes = { ...errors };

        newValue < 0 ? (newErrors[name] = true) : (newErrors[name] = false);

        newValues.max <= newValues.start ? (newErrors.comparison = true) : (newErrors.comparison = false);

        setValues(newValues);
        setErrors(newErrors);
        setErrorMessage(newErrors);
    };

    const setErrorMessage = (errors: ErrorsTypes) => {
        if (errors.max || errors.start || errors.comparison) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const onClickHandler = () => {
        settingNewCounter();
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
                            $error={errors.max || errors.comparison}
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
                            $error={errors.start || errors.comparison}
                        />
                    </StyledFieldset>
                </form>
            </StyledWrapper>
            <StyledWrapper className={'bottom'}>
                <Button
                    title={'set'}
                    onClickHandler={onClickHandler}
                    disabled={!isActive || errors.max || errors.start || errors.comparison}
                    classes={isActive && !errors.max && !errors.start && !errors.comparison ? 'active' : ''}
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