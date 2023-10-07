import React from 'react';

import {  useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Rings } from 'react-loader-spinner';
export default function Register() {
let [laoding, setloading] = useState(false);
const [error, seterror] = useState(null);
const navigate = useNavigate();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const valid = yup.object({
    name:yup.string("must be string").min(3,"must be min 3 char").max(10,"must be 10 char").required("this name is required"),
    email:yup.string('email is not valid').email().required('this  field email is required'),
    phone:yup.string().matches(phoneRegExp, 'Phone number is not valid').required('this is required').min(11,"must be 11 num").max(11,"must be 11 num"),
    password:yup
    .string()
    .required('Please Enter your password')
    .matches(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      "Has minimum 8 characters in length,At least one uppercase,At least one lowercase,At least one digit,At least one special character"),
      rePassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match")
  })
    
  
async function sendata(values){

setloading(true)
let{data} =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
.catch((err)=>{
setloading(false)
seterror(err.response.data.message)
}
)
if(data.message === 'success'){

  setloading(false);
  navigate('/Login');
  
}


}
  let formik =useFormik({
initialValues:{
  name:"",
  email:"",
  phone:"",
  password:"",
  rePassword:"",
},
onSubmit:sendata,
validationSchema:valid,
sendata,
  })



  return <>
    <form onSubmit={formik.handleSubmit}>
< div className="container">
{error !==null?<div className='alert alert-danger text-center'>{error}</div>:''}

<label htmlFor="name" className='mb-3'>username:</label>
<input className='form-control' type="text" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} id='name'/>
{formik.errors.name && formik.touched.name?<div className='alert alert-danger text-center'>{formik.errors.name}</div>:""}

<label htmlFor="email" className='mb-3'>email:</label>
<input className='form-control' type="text" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id='email'/>
{formik.errors.email && formik.touched.email?<div className='alert alert-danger text-center'>{formik.errors.email}</div>:""}

<label htmlFor="phone" className='mb-3'>phone:</label>
<input className='form-control' type="text" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} id='phone'/>
{formik.errors.phone && formik.touched.phone?<div className='alert alert-danger text-center'>{formik.errors.phone}</div>:""}

<label htmlFor="password" className='mt-3 mb-3'>password:</label>
<input className='form-control' type="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id='password'/>
{formik.errors.password && formik.touched.password?<div className='alert alert-danger text-center'>{formik.errors.password}</div>:""}
<label htmlFor="rePassword" className='mt-3 mb-3'>rePassword:</label>
<input className='form-control' type="password" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} id='rePassword'/>
{formik.errors.rePassword && formik.touched.rePassword?<div className='alert alert-danger text-center'>{formik.errors.rePassword}</div>:""}
{laoding ?<Rings
  height="80"
  width="80"
  color="#4fa94d"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>:<button  disabled={!formik.isValid || !formik.dirty}type='submit' className='btn btn-danger mt-3'>riguster</button>}

</div>

    </form>
  </>
}
