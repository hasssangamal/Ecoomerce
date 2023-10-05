import React from 'react';
import { useQuery } from 'react-query';
import Slider from "react-slick";
// import styles from './Categoryslider.module.css';
import axios from 'axios';
import {Helmet} from "react-helmet";
export default function Categoryslider() {

function getdata(){
  return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
}
let {isFetched,isLoading,data}=useQuery('getdata',getdata)


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 4,
  slidesToShow: 6,
  autoplay:true,

  responsive:[
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      
      }
    },

  ]
};
  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>specific product</title>
                <link rel="canonical" href="http://mysite.com/example" />
              
            </Helmet>
<div className='container mb-5'>
    <Slider {...settings}>
      {data?.data.data.map((cat)=>(
        <img src={cat.image} key={cat._id} height={200} alt="" />
      ))}
          </Slider>
  
</div>

  </>
}
