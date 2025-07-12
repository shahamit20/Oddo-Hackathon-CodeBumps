import React from 'react'
import Navbar from '../other/Navbar'
import Banner from './Banner'
import Category from './Category'
<<<<<<< HEAD
import AddProduct from '../Product/AddProduct'
import CategoryFull from '../home/CategoryFull'
=======
import HowItWorks from './Howitwork'
import Freshfinds from './Freshfind'
>>>>>>> 007381de40d2936fa0be89798d4e04dc831f7de9

function Laddingpage() {
  return (
   <>
   <Navbar />
   <div className='w-[100%] p-2 flex flex-col justify-center items-center'>

   <Banner />
   <Category />
   <Freshfinds />
  <HowItWorks/>
   </div>
      </> 
  )
}

export default Laddingpage