import React from 'react';
import './popup.styles.scss';
import { ReactComponent as Logo } from '../images/Vector.svg';
import { ReactComponent as Logo1 } from '../images/Vector(1).svg';


function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>  
            <div className='popup-left'>
                <Logo1 />
                    <label className='label1'>
                        PolyMatic
                    </label> 
                    <span className='span'>Redesign Everything</span>
            </div>

            <div className='popup-right'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}><Logo /></button>
            { props.children }
            </div>
        </div>

    ): '';
}

export default Popup;
