import React from 'react';
import './form.styles.scss';


function Form() {
    return (
            <form className='form'>
                <h2 className='title1'>Get a Free Demo.<br/>it's Completely <span style={{color:'blue'}}>Free!</span></h2>
                <div className='container'>
                    <label className='label'>Name<span style={{color:'red'}}>*</span></label>
                        <input  className='input' type='text' name='name' placeholder='Enter your Name here' required />
                    <label className='label'>Address<span style={{color:'red'}}>*</span></label>
                        <input className='input' type='text' name='address' placeholder='Enter your Address here' required />
                    <label className='label'>Phone Number<span style={{color:'red'}}>*</span></label>
                        <input className='input' type='tel' name='number's required/>
                    <label className='label'>Select Demo Time<span style={{color:'red'}}>*</span></label>
                    <div className='container1'>
                        <button className='btn2'>1-2</button>
                        <span>
                            <button className='btn2'>3-4</button>
                        </span>
                        <button className='btn2'>5-6</button>
                        <button className='btn2'>7-8</button>
                    </div>
                    <label className='label'>Where did you hear about us?</label>
                        <select className='input' type='dropbox' placeholder='select' required>
                            <option value='ahmad'>ahmad</option>  
                            <option value='luai'>luai</option>
                            <option value='ali'>ali</option>
                            <option value='bob'>bob</option>
                        </select>
                        <button className='btn3'>Continue</button> 
                        <p>By registering here, I agree to PolyMatic’s <span style={{color:'blue'}}>Terms & Conditions</span> and <span style={{color:'blue'}}>Privacy Policy</span></p>
                </div>
            </form>
    )
}

export default Form;
