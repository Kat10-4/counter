import styled from 'styled-components';
import {Theme} from '../styles/Themes';

export const StyledWrapper = styled.div`
    margin: 5px;
    padding: 5px;
    width: ${props => props.className === 'main' ? '250px' : '230px'};
    height: ${props => props.className === 'top' ? '90px' : props.className === 'bottom' ? '70px' : ''};
    border: 1px solid ${Theme.color.accent};
    background-color: ${Theme.color.primaryBg};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

