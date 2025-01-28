import React, { useState } from 'react';
import './../styles/LoginModal.css';
import OTPModal from './OTPModal';
import SlidingCard from './SlidingCard';
import Logo from './Logo';

function LoginModal({ closeModal, openOTPModal}) {
    const [phoneNumber, setPhoneNumber] = useState('+91');
    const [errorMessage, setErrorMessage] = useState('');
    const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if(value.startsWith('+91')&& /^[+91][0-9]*$/.test(value)){
            setPhoneNumber(value);
        }
    };

    const handleSubmit = () => {
        const numberWithoutPrefix = phoneNumber.replace('+91','');
        if(numberWithoutPrefix.length===10){
            setErrorMessage('');
            openOTPModal(phoneNumber);
        }
        else{
            setErrorMessage('Please enter a valid phone number.');
            setPhoneNumber('+91');
        }
    };

    const closeOTPModal = () =>{
        setIsOTPModalOpen(false);
    }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-left">
            <SlidingCard/>
        </div>
        <div className='modal-right'>
        <div className="modal-header">
            <Logo/>
            <button className="close-btn" onClick={closeModal}>✖</button>
        </div>
        <h2>
          <strong>Enter SuperNest</strong>
          <br />
          <span className="light-text">Register or login back into SuperNest by entering your mobile number</span>
        </h2>
        <div className='input-container'>
            <span className='country-code'>+91</span>
            <input 
                type="text"
                value = {phoneNumber.slice(3)}
                onChange={(e) => handleInputChange({target:{value:`+91${e.target.value}`}})}
                className='input-field'
                placeholder='Enter phone number'
            />
        </div>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <button className="otp-btn" onClick={handleSubmit}>Get OTP</button>
        {isOTPModalOpen && <OTPModal phoneNumber={phoneNumber} closeModal={closeOTPModal} />}
      </div>
    </div>
    </div>
  );
}

export default LoginModal;
