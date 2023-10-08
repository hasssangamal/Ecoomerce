import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
export let CartContext =createContext();
export default function CartContextProvider(props){
  const [xd, setxd] = useState([]);
const headers={
  token:localStorage.getItem('usetocken')
}
function getddtocart(){

  return axios.get('https://ecommerce.routemisr.com/api/v1/cart',
  {
    headers
  }
  
  
  ).then(res=>{
  
    console.log(res.data);
    setxd(res?.data)
return res
  }).catch(error=>error)


}
function addtocart(id){
  
  return axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
    "productId":id
  },
  {
    headers
  }
  
  
  ).then(res=>{
    console.log(res.data);
    setxd(res?.data)
return res
  }
  ).catch(error=>error)


}


function deletetocart(id){
  
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
  {
    headers
  }
  
  
  ).then(res=>
    {
      console.log(res.data);
      setxd(res?.data)
      return res
    }).catch(error=>error)


}
function updatetocart(id,count){
  
  return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
    count:count
  },
  {
    headers
  }
  
  
  ).then(res=>{
    // console.log(res.data);
    // setxd(res?.data)
    return res
  }).catch(error=>error)


}
function Deleteallcarts(){
  
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
  {
    headers
  }
  
  
  ).then(res=>{
    console.log(res.data);
    setxd(res?.data)
    return res
  }).catch(error=>error)


}
function payadress(cartid,url,values){
  
  return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartid}?url=${url}`,{


  shippingAddress:values

  },
  {
    headers
  }
  
  
  ).then(res=>res).catch(error=>error)


}
const [cd, setcd] = useState();
const [coun, setcount] = useState();
const [sw, setsw] = useState();

async function v(){
let {data} =await getddtocart()
console.log(data?.numOfCartItems);
setcd(data?.data._id)

}
useEffect(() => {
v()
}, []);

return <CartContext.Provider value={{xd, Deleteallcarts,addtocart ,getddtocart ,updatetocart,coun,cd,deletetocart,payadress}}>
{props.children}
</CartContext.Provider>

}