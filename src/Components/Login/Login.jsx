import React, { useContext } from 'react';

import {  useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../Context/Usercontext';
export default function Login() {
let [laoding, setloading] = useState(false);
const [error, seterror] = useState(null);
let {setusercontext ,setuserdata} =useContext(UserContext)

const navigate = useNavigate();


  const valid = yup.object({
    
    email:yup.string('email is not valid').email().required('this  field email is required'),
  
    password:yup
    .string()
    .required('Please Enter your password')
    .matches(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      "Has minimum 8 characters in length,At least one uppercase,At least one lowercase,At least one digit,At least one special character"),
    
  })
    
  
async function sendata(values){

setloading(true)
let{data} =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
.catch((err)=>{
  setloading(false)
  seterror(err.response.data.message)
  }
  )
if(data.message === 'success'){

  setloading(false);
  localStorage.setItem('usetocken',data.token)
  setusercontext(data.token)
setuserdata(data.user);
localStorage.setItem('test',data.user.name)
localStorage.setItem('tes',data.user.email)
  navigate('/');
  
}


}
  let formik =useFormik({
initialValues:{

  email:"",

  password:"",

},
onSubmit:sendata,
validationSchema:valid,
sendata,
  })



  return <>
    <form onSubmit={formik.handleSubmit}>
< div className="container">
{error !==null?<div className='alert alert-danger text-center'>{error}</div>:''}
<label htmlFor="email" className='mb-3'>email:</label>
<input className='form-control' type="text" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id='email'/>
{formik.errors.email && formik.touched.email?<div className='alert alert-danger text-center'>{formik.errors.email}</div>:""}



<label htmlFor="password" className='mt-3 mb-3'>password:</label>
<input className='form-control' type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id='password'/>
{formik.errors.password && formik.touched.password?<div className='alert alert-danger text-center'>{formik.errors.password}</div>:""}

{laoding ?<Rings
  height="80"
  width="80"
  color="#4fa94d"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>:<button  disabled={!formik.isValid || !formik.dirty}type='submit' className='btn btn-success mt-3'>login</button>}
</div>

    </form>
  </>
}
