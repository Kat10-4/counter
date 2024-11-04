import {createGlobalStyle} from 'styled-components';
import {Theme} from './Themes';

export default createGlobalStyle`
    * {
        background-color: ${Theme.color.primaryBg};
        box-sizing: border-box;
        font-family: ${Theme.font};
    }
`

