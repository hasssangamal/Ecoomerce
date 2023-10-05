
import React, { useState } from 'react';
// import styles from './Products.module.css';
import { getallcat  ,v} from '../../redux/categoriesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import im from '../../Assets/images/download.png'
export default function Categories() {
let dispatch =useDispatch()
let {loading,categories,Error,textcat}=useSelector((state) => {
    return state.categories
  })
useEffect(() => {
dispatch(getallcat())
}, []);
console.log(categories);
console.log(textcat);
  return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Categories</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="shortcut icon" href={im}  />
            </Helmet>
{loading?<div className="ger">
<Oval
  height={80}
  width={80}
  color="#fff"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="green"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
</div>:<div className='container'>
<div className='row mt-5 '>
{categories.map((item)=>(

<div key={item._id} className='col-md-3 col-lg-4 img-cat'>
<div className='inner'>
    <Link >
    <img className='imgcat'  style={{width:"100%",height:'100%',textAlign:"center"}} src={item.image}alt="" onClick={() => {
      dispatch(v(item._id))
    
    }}/>
    <h2 className='h6  text-success mt-3 fs-4 fw-bold'>{item.name}</h2>
    
      
      </Link>
</div>
  </div>
))}

  </div>
<div className="row">
{
  textcat.map((ele)=>(
    <div key={ele._id} className='col-md-4 col-lg-4 img-cat'>
    <div className='inner'>
      
    
        <h2 className='h6  text-success mt-3 fs-4 fw-bold'>{ele.name}</h2>
        
          
        
    </div>
      </div>
  ))
}
</div>

  
  </div>}

  </>
}
