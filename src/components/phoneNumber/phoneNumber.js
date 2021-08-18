import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react'
import './phoneNumber.scss'
 

const PhoneNumber = () => {
    const [value, setValue] = useState()
    return (
        <div>
            <PhoneInput
                className='phone'
               //containerStyle={{
                  //  border: "10px solid black"
                  //}}
                international
                value={value}
                onChange={setValue}
            />
        </div>
    )
}

export default PhoneNumber;