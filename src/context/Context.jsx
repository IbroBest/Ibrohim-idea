import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [taqqoslash , setTaqqoslash] = useState([])
  const [tanlanganlar ,setTanlanganlar] = useState([])
  const [basket , setBasket] = useState([])
  const [data, setData] = useState([]);
  const [DynamicItem,setDynamicItem] = useState([])
  const AllTanlanganlar = (product)=>{
    setTanlanganlar([...tanlanganlar,product])
  }
    const allBasket = (product)=>{
      setBasket([...basket,product])
  }
  const AllTaqooslangan = (product)=>{
    setTaqqoslash([...taqqoslash,product])
  }

    
  return <Context.Provider value={{DynamicItem,setDynamicItem,setData,data,allBasket,setBasket,basket,AllTanlanganlar,tanlanganlar,setTanlanganlar,taqqoslash,setTaqqoslash,AllTaqooslangan,}}>{children}</Context.Provider>
};
