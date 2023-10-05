import React from 'react';
import { Navigate } from 'react-router-dom';
 const Protectedrou = (props) => {
if(localStorage.getItem('usetocken')!==null){
  return props.children
}else{
  return <Navigate to={'/Login'}/>
}
}

export default Protectedrou;
