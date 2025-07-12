import React from 'react'
import Navbar from '../other/Navbar'
import Banner from './Banner'


import HowItWorks from './Howitwork';
import Freshfinds from './Freshfind';

function Laddingpage() {
  return (
    <>
      <Navbar />
      <div className='w-[100%] p-2 flex flex-col justify-center items-center'>

        <Banner />
        {/* <Category /> */}
        <Freshfinds />
        <HowItWorks />
      </div>
    </>
  )
}

export default Laddingpage