import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";
import Navbar from '../Navbar/Navbar'
import { useState } from 'react';

export default function Layout() {  return <>
  <Navbar/>

  <Outlet></Outlet>

  <div>
    
    <Offline>

      <div className='network d-flex flex-column'>
      <i class="fa-solid fa-wifi"></i>
      <p>you are offline check your internet please.... </p>
      </div>
    </Offline>
  
  </div>

  </>
}
