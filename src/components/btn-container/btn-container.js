import React, { useState } from 'react';
import Clicks from '../clicks';


//'linear-gradient(90deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)';

     function Btn() {

        const [color, setColor] = useState ('white')

        return (
            <div>
                <button
                className='btn2'
                style={{background:color}}
                onClick={() => {
                    (color === 'white') ?
                    setColor('linear-gradient(90deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)')
                    :
                    (setColor('white'))
                }}
                >{Clicks}</button>
                
            </div>
        );
    }   

    export default Btn;
