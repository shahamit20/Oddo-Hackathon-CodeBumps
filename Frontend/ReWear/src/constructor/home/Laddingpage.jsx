import React from 'react'
import Navbar from '../other/Navbar'
import Banner from './Banner'
import Category from './Category'
import FreshFinds from './Freshefind'

function Laddingpage() {
  return (
   <>
   <Navbar />
   <div className='w-[100%] p-2 flex flex-col justify-center items-center'>

   <Banner />
   <Category />
   <FreshFinds />
   </div>
      </> 
  )
}

export default Laddingpage