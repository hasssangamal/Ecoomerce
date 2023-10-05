import { createContext } from "react";
import { useState } from "react";
export let UserContext =createContext();
export default function UserContextProvider(props){

const [usercontext, setusercontext] = useState(null);
const [userdata, setuserdata] = useState(null);

return <UserContext.Provider value={{usercontext ,setusercontext ,userdata,setuserdata}}>
{props.children}
</UserContext.Provider>

}