import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../Context/cartcontext';

import { date } from 'yup';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import im from '../../Assets/images/download.png'


export default function Cart() {


let [infor, setinfor] = useState();



  let {xd,getddtocart,updatetocart,deletetocart,Deleteallcarts}=useContext(CartContext)

 async function deletev(id){
  let {data}=await deletetocart(id)
  setinfor(data);
  console.log(data);
}

 async function deleteall(){
  let {data}=await Deleteallcarts()
  
  console.log(data);
}
// useEffect(() => {
  
//   deletev()



// }, []);
 async function updatecount(id,count){
  let {data}=await updatetocart(id,count)
  setinfor(data);



}
localStorage.setItem("as",infor?.data.products.length);

async function getcertdta(){
  let {data}=await getddtocart()
  setinfor(data);
  
  console.log(data);
}
useEffect(() => {
  
getcertdta()



}, []);
console.log(xd);
localStorage.setItem('x',infor?.data?.products.length)
console.log();
  return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
              <link rel="shortcut icon" href={im}  />
            </Helmet>
  <h2 className='text-center'>Shop cart:</h2>
{infor?<div className="container bg-body-tertiary mt-5">
<div className="pay"><Link to={'/Adress'} className='a'> online payment</Link></div>
  <h4 className='text-main'>total cart price: {infor.data.totalCartPrice} EGP</h4>
{infor.data.products.map(it=>(

<div className="row border-bottom" key={it._id}>
  <div className="col-md-2 p-4">
    <img src= {it.product.imageCover}alt="" className='w-100' />
  </div>
  <div className="col-md-10 d-flex justify-content-between   align-items-center">
  <div>
  <h3>{it.product.title.split(' ').splice(0,3).join('')}</h3>
    <h2 className='text-main'>price: {it.price}</h2>
    <button className='btn' onClick={() => {
      deletev(it.product._id)
    
    }}><i className='fas fa-trash text-danger p-2'></i>Remove</button>
  </div>
  <div>
  
    <button className='btn btn-bdr' onClick={() => {

      if (it.count >= 1   ) {
        updatecount(it.product._id,it.count+1)
        console.log("skns");
      }
    }}><i className='fas fa-plus text-main'></i></button>
    <span>{it.count}</span>
  
    
    <button className='btn btn-bdr'onClick={() => {
  if(it.count >= 2){
    updatecount(it.product._id,it.count-1)
    console.log("skns");

  }
      
    }}><i className='fas fa-minus'></i></button>
  </div>
  
  </div>
  
</div>

))}

<button onClick={deleteall} type="button" class="btn btn-outline-warning text-center d-flex mx-auto mt-3 mb-3"><Link to="/">Clear all products</Link></button>
</div>:""}
  </>
}
