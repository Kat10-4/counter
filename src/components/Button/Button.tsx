import React from 'react';
import styled, {css} from 'styled-components';
import {Theme} from '../../styles/Themes';

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

const StyledButton = styled.button`
    text-decoration: none;
    border: 2px solid ${Theme.color.buttons};
    border-radius: 5px;
    margin: 5px 20px;
    background-color: ${Theme.color.primaryBg};
    font-weight: bold;
    font-size: medium;
    color: ${Theme.color.buttons};

    ${props => props.className === 'active' && css`
        text-decoration: none;
        border-color: ${Theme.color.accent};
        color: ${Theme.color.accent};
    `}
`