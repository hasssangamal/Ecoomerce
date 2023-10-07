import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from '../../Context/cartcontext';
import Slider from "react-slick";
export default function Proddaetails() {

  let {addtocart}=useContext(CartContext)
let params =useParams();
console.log(params.id);
function specifiprod(id){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}
let {isFetched,isError,isLoading,data}=useQuery('specifc',() =>specifiprod(params.id)
,{})

console.log(data?.data.data);
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed:2000,

  autoplay:true
};
  return <>
<div className="container p-4">
  <div className="row align-items-center">
    <div className="col-md-4">

    {/* <img src={data?.data.data.imageCover} className='w-100'  alt="" /> */}




<Slider {...settings}>
{data?.data.data.images.map((photo)=>(

<img src={photo} alt="" />
))}
</Slider>



    

  



    
          
    
      
    
  




    </div>
    <div className="col-md-8">
<p>{data?.data.data.description}</p>
<h3 className='text-main'>{data?.data.data.category.name}</h3>
<h4 className='text-main'>price: {data?.data.data.price}EGP</h4>
<div className='d-flex justify-content-between'>
  <span>ratingsQuantity: {data?.data.data.ratingsQuantity}</span>
  <span><i className="fas fa-star rating-color"></i>   {data?.data.data.ratingsAverage}</span>

</div>
  <button className='btn bg-main text-white w-100 mt-4'
  onClick={() => {
    addtocart(params.id)
  }}
  > Add to cart</button>
    </div>
  </div>
</div>
  </>
}
