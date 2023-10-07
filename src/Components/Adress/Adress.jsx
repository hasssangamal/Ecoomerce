import React, { useContext } from 'react';

import { Formik, useFormik } from 'formik';
import { CartContext } from '../../Context/cartcontext';
import { useState } from 'react';
export default function Adress() {

let {payadress,cd}=useContext(CartContext)




   async function handle(values){
    let res =await payadress(cd,'http://localhost:3000',values)
    console.log(res.data.session.url);
    window.location.href=res?.data.session.url
  
  }

let formik =useFormik({
initialValues:{
  details: "",
  phone: "",
  city: ""
},
onSubmit:handle

})


  return <>
<div className="container">
<form action="" onSubmit={formik.handleSubmit}>
  <label htmlFor="details">Details:</label>
  <input  require className='form-control' type="text" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} id='details' name="details"  />
  <label htmlFor="phone">phone:</label>
  <input require  className='form-control' type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} id='phone' name="phone"  />
  <label htmlFor="city">city:</label>
  <input  require className='form-control' type="tel" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} id='city' name="city"  />
  <button  disabled={!formik.isValid || !formik.dirty} className='btn bg-main text-white mt-4' type='submit'> pay now</button>
</form>
</div>
  </> 
}
