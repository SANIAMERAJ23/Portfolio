import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../index.css';
import { Outlet } from 'react-router-dom';
import Home from './Home';

const Applayout = () => {
  return (
    <div className=' m-0 p-0'>
      <Header />
      <hr className='border-2 border-black-100 mx-[9vw]' />
      <Outlet/>
      <span className='mb-9'>..</span>
      <Footer />
    </div>
  );
};

export default Applayout;
