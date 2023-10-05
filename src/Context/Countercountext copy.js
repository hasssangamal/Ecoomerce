import { createContext } from "react";
import { useState } from "react";
export let CounterContext =createContext();
export default function CounterContextProsider(props){

const [counter, setcounter] = useState(0);

return <CounterContext.Provider value={{counter}}>
{props.children}
</CounterContext.Provider>

}