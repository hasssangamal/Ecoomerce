import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Categories from './Components/Categories/Categories'
import Layout from './Components/Layout/Layout'
import { useEffect} from 'react';
import { useContext } from 'react';
import { UserContext } from './Context/Usercontext';
import Protectedrou from './protectedrou/protectedrou';
import Proddaetails from './Components/Proddaetails/Proddaetails';
import CartContextProvider from './Context/cartcontext';
import Adress from './Components/Adress/Adress'
import Allorders from './Components/Allorders/Allorders'
import { store } from './redux/store';
import { Provider } from 'react-redux';

;
let routes = createHashRouter([
  { path: '/', element: <Layout />, children: [
    {index:true , element:<Protectedrou><Home/></Protectedrou>},
    {path:'Products' , element:<Protectedrou><Products/></Protectedrou>},
    {path:'Cart' , element:<Protectedrou><Cart/></Protectedrou>},
    {path:'Categories' , element:<Protectedrou><Categories/></Protectedrou>},
    {path:'Brands' , element:<Protectedrou><Brands/></Protectedrou>},
    {path:'Proddaetails/:id' , element:<Protectedrou><Proddaetails/></Protectedrou>},
    // {path:'Profile' , element:<Protectedrou><Profile/></Protectedrou>},
    {path:'allorders' , element:<Protectedrou><Allorders/></Protectedrou>},
    {path:'Adress' , element:<Protectedrou><Adress /></Protectedrou>},
  


  
  
  
    {path:'Login' , element:<Login/>},
    {path:'Register' , element:<Register/>},
  ] }
])

function App() {

  let {setusercontext}=useContext(UserContext)
useEffect(() => {
if(localStorage.getItem('usetocken') !== null){
  setusercontext(localStorage.getItem('usetocken'))
}
}, []);


  return <Provider store={store}>
  
     <CartContextProvider>
 <RouterProvider router={routes}></RouterProvider>
  </CartContextProvider>

  </Provider>
}

export default App;
