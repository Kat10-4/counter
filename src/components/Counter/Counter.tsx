import React from 'react';
import {Number} from './Number';
import {Traker} from './Traker';
import {Button} from '../Button/Button';



export const Counter = () => {
    return (
        <div>
            <Number counter={counter} stopVal={stopCounter}/>
            <Traker curentVal={counter} stopVal={stopCounter}/>
            <div>
                <Button
                    title={"inc"}
                    onClickHandler={increaseCounter}
                    disabled={!isBtnDisabled}
                    classes={!isBtnDisabled ? "" : "active"}/>
                <Button
                    title={"reset"}
                    onClickHandler={setRandValue}
                    disabled={isBtnDisabled}
                    classes={isBtnDisabled ? "" : "active"}/>
            </div>
        </div>
    );
};
