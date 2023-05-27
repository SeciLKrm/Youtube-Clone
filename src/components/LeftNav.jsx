import React, { useContext } from 'react'
import {categories} from '../utils/constant'
import { Context } from '../context/contextApi'


const LeftNav = () => {
    // context yapısndan sağlanan state ve fonksiyonlara abone olma
    const { selectedCategory, setSelectedCategory } = useContext(Context);

    
  return (
    <div className='bg-dark text-light d-flex flex-column gap-2 ' >
    
   {
categories.map((item,index)=>{
  return (
    <>
    <div key={index} className={`p-2 ${selectedCategory === item.name && 'bg-primary'}` } 
     onClick={()=>setSelectedCategory(item.name)}
     style={{cursor:'pointer'}} >
      <span>{item.icon} </span>
      <span>{item.name}   </span>
    </div>
    <div>
      {item.divider && <hr className='my-5'/>}
    </div>
    </>
  )
})
   }

    </div>
  )
}

export default LeftNav