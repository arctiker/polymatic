import React from 'react';
import './form.styles.scss';

function Form() {
    return (
        <div className='polymatic'>
            <div>
                <form>
                    <fieldset className=''>
                        <h2 className='title1'>Get a Free Demo.<br></br>it's Completely Free!</h2>
                            <div className='container1'>
                                <h4>Name*</h4>
                                    <input  className='input' type='text' name='name' placeholder='Enter your Name here' required />
                                <h4>Address</h4>
                                    <input className='input' type='text' name='address' placeholder='Enter your Address here' required />
                                <h4>Phone Number</h4>
                                    <input className='input' type='tel' name='number's required/>
                                <h4>Select Demo Time</h4>
                                    <div className='container2'>                                <button className='btn2'>1-2</button>
                                        <button className='btn2'>3-4</button>
                                        <button className='btn2'>5-6</button>
                                        <button className='btn2'>7-8</button>
                                    </div>
                                <h4>Where did you hear about us?</h4>
                                        <input className='input' type='dropbox' placeholder='select' name='name' required /> <br></br>
                                    <div>
                                        <button className='btn3'>Continue</button> 
                                    </div>
       
                                <p>By registering here, I agree to PolyMatic’s Terms & Conditions and Privacy Policy</p>
                            </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Form;
