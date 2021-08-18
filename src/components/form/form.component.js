import React from 'react';
import Selector from '../select-tag/selector';
import Btn from '../btn-container/btn-container';

import './form.styles.scss';

import PhoneNumber from '../phoneNumber/phoneNumber';


function Form() {

    return (
            <form className='form'>
                <h2 className='title1'>Get a Free Demo.<br/>it's Completely <span style={{color:'blue'}}>Free!</span></h2>
                <div className='container'>
                    <label className='label'>Name<span style={{color:'red'}}>*</span></label>

                        <input className='input123' type="text" name="name" id="name" placeholder='Enter Your Name Here' />

                    <label className='label'>Address<span style={{color:'red'}}>*</span></label>
                        <input className='input123' type='text' name='address' placeholder='Enter your Address here' required />
                    <label className='label'>Phone Number<span style={{color:'red'}}>*</span></label>
                        <PhoneNumber />
                    <label className='label'>Select Demo Time<span style={{color:'red'}}>*</span></label>
                    <div className='container1'>
                        <Btn className='btn2'>1-2</Btn>
                        <Btn className='btn2'>3-4</Btn>
                        <Btn className='btn2'>5-6</Btn>
                        <Btn className='btn2'>7-8</Btn>
                    </div>
                    <label className='label'>Where did you hear about us?</label>
                    <Selector />
                        <button className='btn3'>Continue</button> 
                        <p>By registering here, I agree to PolyMatic’s <span style={{color:'blue'}}>Terms & Conditions</span> and <span style={{color:'blue'}}>Privacy Policy</span></p>
                </div>
            </form>
    )
}

export default Form;
