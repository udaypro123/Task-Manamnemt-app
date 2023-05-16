import { createContext, useState } from "react";

export const glabaldata = createContext();

function DataProvider({children}){


    // let vlauedata=localStorage.getItem("data")? JSON.parse(localStorage.getItem("data")):[]; 
    
    const[value,setvalue]=useState("")
    const [data,setdata]=useState([])
    const [editBtn,seteditBtn]=useState(true)
    const [editinputData,seteditinputData]=useState(null)
   
  

    return <glabaldata.Provider value={{value,setvalue,data,setdata,editBtn,seteditBtn,editinputData,seteditinputData}}>
        {children}
    </glabaldata.Provider>
}
export default DataProvider;