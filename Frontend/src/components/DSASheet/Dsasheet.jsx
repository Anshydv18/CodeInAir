import React, { useState } from 'react'

const Dsasheet = () => {
    const [sheet,setsheet]=useState({
        arrays:0,
        binarysearch:0,
        trees:0,
        dp:0,
        graph:0,
    })
   
  return (
    <div className='px-16'>
      <h1 className='text-center bg-blue-600 text-2xl text-white py-2 rounded-2xl'>Master DSA</h1>
      <div>
        <h2 className='text-center py-1 cursor-pointer' onClick={(e)=>{sheet.arrays=!sheet.arrays}}>Arrays</h2>
        {sheet.arrays &&  console.log(sheet)}
        <h2>Binary Search</h2>
        {}
        <h3>Trees</h3>
        {}
        <h4>Dynamic Programming</h4>
        {}
        <h5>Graph</h5>
        {}
      </div>
    </div>
  )
}

export default Dsasheet
