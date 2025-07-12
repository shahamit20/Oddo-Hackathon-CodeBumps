import React from 'react'
import Navbar from '../other/Navbar'
import Banner from './Banner'
import Category from './Category'
import AddProduct from '../Product/AddProduct'
import CategoryFull from '../home/CategoryFull'

function Laddingpage() {
  return (
   <>
   <Navbar />
   <div className='w-[100%] p-2 flex flex-col justify-center items-center'>

   <Banner />
   <Category />
   </div>
      </> 
  )
}

export default Laddingpage