import React from 'react';
import './popup.styles.scss';
import { ReactComponent as Logo } from '../images/close-btn.svg';

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}><Logo /></button>
                { props.children }
            </div>
        </div>
    ): '';
}

export default Popup;
