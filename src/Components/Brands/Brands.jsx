import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getallbrands } from '../../redux/brandsReducer';
import { getspecifcbrand } from '../../redux/brandsReducer';
import { Oval } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import im from '../../Assets/images/download.png'
export default function Brands() {
  const [transalt, setstate] = useState('');
  const [opacity, setopacity] = useState('');
  let dispatch =useDispatch()
  let {loading,branding,Error,specificbrand}=useSelector((state) => {
    return state.brands
  })
useEffect(() => {
dispatch(getallbrands ())
}, []);




  return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
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
<h2 className='text-center text-main fl-5 fw-bold mt-4'>All Brands</h2>
<div className='row mt-5 '>
{
branding.map((item)=>(
  <div key={item._id} className='col-md-3   img-cat'>
<div className='inner'>
    <Link>
    <img  style={{width:"100%",height:'100%',textAlign:"center"}} src={item.image}alt="" onClick={() => {
      dispatch(getspecifcbrand(item._id))
      setstate('y')
      setopacity('opacity')
    // console.log(item._id);
    }}/>
    <h2 className='h6  text-success mt-3 fs-4 fw-bold'>{item.name}</h2>
    
      
      </Link>
</div>
  </div>
))

}

  </div>


<div className={`screenbrand ${opacity}`} onClick={() => {
  setstate('')
  setopacity('')
}}>


  
    {
[specificbrand].map((item)=>(

  <div key={item._id}  className={`smallscreen ${transalt}`}>
    <div className="close">
      <button className='btn' onClick={() => {
        
          setstate('')
          setopacity('')
      }}><i className='fas fa-close'></i></button>
    </div>
    <hr />
    <div  className="contscreen1">
    <div>
    <img src={item.image} className='w-25' alt="" />
    </div>
    <div>
    <h2 className='text-main'>{item.name}</h2>
      <h5>{item.slug}</h5></div>
  
    </div>
    <hr />
    <div className="btnclose">
    <button type="button" class="btn btn-secondary me-2" onClick={() => {
        setstate('')
        setopacity('')
    }}>close</button>
    </div>
    </div>
))
}

</div>

  
  </div>}
  </>
}
