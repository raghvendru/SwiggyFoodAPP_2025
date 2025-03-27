import React from 'react'
import { CDN_URL } from '../utils/constants'

const ItemList = ({itemList}) => {
  return (
    <div>
    
        {itemList.map((item)=>(<div key={item.card.info.id} className='p-2 m-2 border-b-2 bg-gray-100 text-left flex justify-between'>
            <div className='w-9/12'>
            <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span> -₹{item.card.info.price/100 || item.card.info.defaultPrice/100 }</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
            
        </div>
        <div  className=' p-4 w-3/12'>
        <div className='absolute'>
            <button className= 'bg-black text-white p-2 mx-16 shadow-lg rounded-lg'>Add</button>
            </div>
            <img src={CDN_URL+item.card.info.imageId} className='w-full'/>
            </div>          
            
            </div>   
        ))}
        
        
    </div>
  )
}

export default ItemList
