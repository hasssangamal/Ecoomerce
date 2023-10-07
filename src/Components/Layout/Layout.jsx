import React from 'react';

import { Outlet } from 'react-router-dom';
import { Offline} from "react-detect-offline";
import Navbar from '../Navbar/Navbar'


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
