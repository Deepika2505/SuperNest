import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoginModal from './components/LoginModal';
import OTPModal from './components/OTPModal';
import Footer from './components/Footer';
import Search from './components/Search';
import Experience from './components/Experience';
import Content from './components/Content';
import AvailableIn from './components/AvailableIn';
import RecentlyAdded from './components/RecentlyAdded';
import HeroSection from './components/HeroSection';


function App(){
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [phoneNumber,setPhoneNumber] =useState('');
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  
  const openOTPModal = (number) => {
    setPhoneNumber(number);
    setIsLoginModalOpen(false);
    setIsOTPModalOpen(true);
  };

  const closeModal = () => {
    setIsOTPModalOpen(false);
    setIsLoginModalOpen(false);
  };

  const openLoginModal = () =>{
    setIsOTPModalOpen(false);
    setIsLoginModalOpen(true);
  }

  const navbarRef = useRef(null);
  const [navbarHeight,setNavbarHeight] = useState(0);

  useEffect(()=>{
    const updateNavbarHeight = () => {
      if(navbarRef.current){
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize',updateNavbarHeight);
    return () =>{
      window.removeEventListener('resize',updateNavbarHeight);
    };
  },[]);

  return (
    <div className='App'>
      <Navbar ref = {navbarRef} openLoginModal={openLoginModal} />
      {isLoginModalOpen && (
        <LoginModal
          closeModal={closeModal}
          openOTPModal={openOTPModal}
        />
      )}
      {isOTPModalOpen && (
        <OTPModal phoneNumber={phoneNumber} closeModal={closeModal} openLoginModal={openLoginModal} />
      )}
      <HeroSection  className="hero-section" style={{ marginTop: `${navbarHeight}px` }}/>
      <AvailableIn/>
      {/* <SearchBar/> */}
      <RecentlyAdded/>
      <Content/>
      <Experience/>
      <Search/>
      <Footer/>       
    </div>
  )
}

export default App;
