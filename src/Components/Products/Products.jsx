
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/cartcontext';
import {Helmet} from "react-helmet";
import im from '../../Assets/images/download.png'
const Featureproduct = () => {
const [prod, setprod] = useState([]);
const [records, setrecords] = useState(prod);


  
let{addtocart}=useContext(CartContext)
async function addtoproduct(id){
let {data}=await addtocart(id)

if(data.status==="success"){
  toast('the product is added to cart', {
    duration: 4000,
    position: 'top-center',
  
    // Styling
    style: {},
    className: '',
  
    // Custom Icon
    icon: '👏',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
}
}


async function getallprod(){
let information= await axios('https://ecommerce.routemisr.com/api/v1/products')
// setprod(information.data.data)
setprod(information?.data.data);
setrecords(information?.data.data);
return information
}
const se = (params) => {
  
}
let {isLoading,isError,data,isFetched,refetch}=useQuery('featuredata',getallprod,{


 
})
console.log(records);

const fitered = (event) => {
  setrecords(prod.filter(f=> f.slug.includes(event)))
}



  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Products</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <link rel="shortcut icon" href={im}  />
            </Helmet>
{isLoading ?    <div className='d-flex justify-content-center align-items-center'>
<div className="ger">
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
</div>

    </div>:  <div className="container mt-3">
<input type="text" className='form-control mt-4 mb-4' placeholder='search....' onChange={(eo) => {
  fitered(eo.target.value)
}} />
      <div className="row g-3">
        <Toaster/>
    {records.map((item)=>
(
  <div className="col-md-3 mt-3" key={item.id}>
<Link to={`/Proddaetails/${item.id}`}>

<div className='product text-center p-3 pointer'>
<img src={item.imageCover} alt=""  className='w-100'/>
<h4>{item.category.name}</h4>
<span>{item.title.split(' ').slice(0,2).join('')}</span>
<div className='d-flex justify-content-between'>
  <span>{item.price}EGP</span>
  <span><i className="fas fa-star rating-color"></i>   {item.ratingsAverage}</span>

</div>
<button className='btn bg-main text-white' onClick={() => {
  addtoproduct(item.id)
}}>add to cart</button>
  </div>
</Link>
</div>
)
    )}
      </div>
    </div>}


  
    </>
  );
}

export default Featureproduct;
