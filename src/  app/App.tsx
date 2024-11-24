import React, {useEffect} from 'react';
import './App.css';
import {Counter} from '../components/Counter/Counter';
import {SettingDesk} from '../components/SettingDesk/SettingDesk';
import GlobalStyles from '../styles/Global.styles';
import {useStore} from './store';


function App() {
    let values = useStore((state) => state.values);
    let error = useStore((state) => state.error);
    const setValues = useStore((state) => state.setValues)
    const setCounter = useStore((state)=>state.setCounter)

    //Local Storage
    const valuesKey = 'start value'

    useEffect(() => {
        const storeValues = localStorage.getItem(valuesKey)

        if (storeValues) {
            const receivedValues = JSON.parse(storeValues)
            setValues(receivedValues)
            setCounter(receivedValues.start)
        }
    }, [])

    useEffect(() => {
        if (!error) {
            localStorage.setItem(valuesKey, JSON.stringify(values))
        }
    }, [values, error])


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
