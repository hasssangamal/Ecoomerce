import React from 'react';
// import styles from './Mainslider.module.css';
import sliderimage1 from '../../Assets/images/slider-image-1.jpeg' 
import sliderimage2 from '../../Assets/images/slider-image-2.jpeg' 
import sliderimage3 from '../../Assets/images/slider-image-3.jpeg' 
import blog1 from '../../Assets/images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import blog2 from '../../Assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'
import Slider from "react-slick";

export default function Mainslider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <>
  <div className="container  mb-5">
<div className="row gx-0 mt-5">
  <div className="c col-md-8">
  <Slider {...settings}>
  
  <img src={sliderimage1} className='w-100' alt="" />
  <img src={sliderimage2} className='w-100' alt="" />
  <img src={sliderimage3} className='w-100' alt="" />

    </Slider>
  </div>
  <div className="col-md-2 x">

  <img src={blog1} style={{width:"30%",height:"33%"}} alt="" />
  <img src={blog2} style={{width:"30%",height:"33%"}} alt="" />


{/* <div className="row">

<div className="col-md-12">
<img src={blog1} style={{width:"300px"}} alt="" />

</div>

<div className="col-md-12">



</div>

</div> */}
  


  
    
  


  </div>
</div>

  </div>  
  </>
}
