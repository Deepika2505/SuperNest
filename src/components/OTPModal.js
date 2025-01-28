import React, {useState} from 'react';
import './../styles/OTPModal.css';
import SlidingCard from './SlidingCard';
import Logo from './Logo';

function OTPModal({ closeModal,phoneNumber, openLoginModal }) {

    const [otp,setOtp] = useState(Array(4).fill(''));
    const [errorMessage, setErrorMessage] = useState('');
    
    const verifyOtp = () => {
        const correctOtp ='1234';
        const otpValue = otp.join('');
        if(otpValue===correctOtp){
            setErrorMessage('');
            closeModal();
            alert('OTP verified Successfully!');
        }
        else{
            setErrorMessage('Incorrect OTP, please try again.');
        }
    };

    const inputRefs = Array(otp.length)
        .fill(null)
        .map(() => React.createRef());

    const handleOtpChange = (e,index) => {
        const value = e.target.value;
        if(/[^0-9]/.test(value)) return;
        const otpCopy = [...otp];
        otpCopy[index] = value;
        setOtp(otpCopy);
        if(value!==''){
            if(index<otp.length-1){
                inputRefs[index+1].current?.focus();
            }
        }
    };

    const handleResendOtp = () => {
        setOtp(Array(4).fill(''));
        setErrorMessage('');
      };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-left">
            <SlidingCard/>
        </div>
        <div className='modal-right'>
        <div className="modal-header">
          {/* Logo SVG (on the left) */}
            <Logo/>
          {/* Close button */}
            <button className="close-btn" onClick={closeModal}>✖</button>
        </div>
        <h2>
          <strong>Verify OTP</strong>
          <br />
          <span className="light-text">
            OTP has been sent to {phoneNumber}
                    &nbsp;<span className='change-phone' onClick={openLoginModal}>Change?</span>
          </span>
        </h2>
        <div className="otp-input-container">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    value={digit}
                    ref={inputRefs[index]}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength="1"
                    className="otp-input"
                />
            ))}
        </div>
        <p className='resend-text'>
            <span 
                className='clickable-text'
                onClick={() =>{
                    handleResendOtp();
                    setErrorMessage('');
                }}> 
                    Resend OTP
            </span>
            &nbsp;if you haven't received it.
        </p>
        <button className='otp-btn' onClick={verifyOtp}>Verify OTP</button>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
      </div>
    </div>
    </div>
  );
}

export default OTPModal;