import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  let basketStorage  = localStorage.getItem('basket__product')
  let tanlanganStoage = localStorage.getItem('tanlangan__product')
  let taqqoshlashStoage = localStorage.getItem('taqqoslash__product')

  const [basket , setBasket] = useState(JSON.parse(basketStorage)|| [])
  const [taqqoslash , setTaqqoslash] = useState(JSON.parse(taqqoshlashStoage) || [])
  const [tanlanganlar ,setTanlanganlar] = useState(JSON.parse(tanlanganStoage) || [])
  const [data, setData] = useState([]);
  const [DynamicItem,setDynamicItem] = useState([])
  const [attributes,setAtributes] = useState([])
  const AllTanlanganlar = (product)=>{
    setTanlanganlar([...tanlanganlar,product])
  }
    const allBasket = (product)=>{
      setBasket([...basket,product])
    }

  const AllTaqooslangan = (product)=>{
    setTaqqoslash([...taqqoslash,product])
  }
  const [inputValue,setInputValue]= useState('')

  useEffect(()=>{
    localStorage.setItem('basket__product',JSON.stringify(basket))
  },[basket])

  useEffect(()=>{
    localStorage.setItem('tanlangan__product',JSON.stringify(tanlanganlar))
  },[tanlanganlar])

  useEffect(()=>{
    localStorage.setItem('taqqoslash__product',JSON.stringify(taqqoslash))
  },[taqqoslash])
    
  return <Context.Provider value={{attributes,setAtributes,DynamicItem,setDynamicItem,setData,data,allBasket,setBasket,basket,AllTanlanganlar,tanlanganlar,setTanlanganlar,taqqoslash,setTaqqoslash,AllTaqooslangan,}}>{children}</Context.Provider>
};
