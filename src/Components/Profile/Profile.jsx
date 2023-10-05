import React, { useContext } from 'react';
import styles from './Profile.module.css';
import { UserContext } from '../../Context/Usercontext';
import jwt_decode from "jwt-decode";
import jwtDecode from 'jwt-decode';
export default function Profile() {
  let {userdata}=useContext(UserContext)
  // let encode =localStorage.getItem('usetocken');
  // let decode =jwtDecode(encode)
console.log(userdata);

  return <>
    <h1>{localStorage.getItem('tes')}</h1>
    <h1>{localStorage.getItem('test')}</h1>
    
  
  </>
}
