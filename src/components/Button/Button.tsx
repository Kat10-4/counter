import React from 'react';
import styled from 'styled-components';

type ButtonPropsType = {
    title: string,
    onClickHandler: () => void
    disabled: boolean
    classes?: string
}

export const Button = ({title, onClickHandler, disabled, classes}: ButtonPropsType) => {
    return (
        <StyledButton onClick={onClickHandler} disabled={disabled} className={classes}>
            <span>{title} </span>
        </StyledButton>
    );
};

const StyledButton=styled.button`
    text-decoration: none;
    border: 2px solid #9d9d9f;
    border-radius: 5px;
    margin: 3px;
    background-color: #545b5b;
    font-weight: bold;
    font-size: medium;
    color: #9d9d9f;

    .active {
        text-decoration: none;
        border-color: powderblue;
        color: powderblue;
        cursor: grab;
    }`