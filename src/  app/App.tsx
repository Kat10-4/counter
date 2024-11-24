import React from 'react';
import './App.css';
import {Counter} from '../components/Counter/Counter';
import {SettingDesk} from '../components/SettingDesk/SettingDesk';
import GlobalStyles from '../styles/Global.styles';


function App() {
    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <GlobalStyles/>
            <SettingDesk/>
            <Counter/>
        </div>
    )
        ;
}

export default App;
