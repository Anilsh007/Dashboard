import React from 'react';
import Navbar from './navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function MainLayout({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className='main-layout'>
        <Sidebar />
        <div className='outlet-container'>
          <Outlet /> {/* This will render the page based on the route */}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
