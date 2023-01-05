import React from 'react'
import AnnonceDetails from '../Components/DetailsPage/AnnonceDetails'
import AnnonceurInfos from '../Components/DetailsPage/AnnonceurInfos'
import Navbar from '../Components/Navbar'
const DetailsPage = () => {
  return (
    <div>
     <Navbar/>
    <div className=' p-3 border-gray-300  m-3  rounded-xl border-2  flex flex-col lg:flex-row'>
     <div className='lg:w-1/2 m-4' ><AnnonceDetails/></div>
     <div className='bg-gray-300 h-96 lg:w-1/2 m-4 rounded-xl'>
      <p>hello</p>
     </div>
</div>
      <AnnonceurInfos/>
    </div>
  )
}

export default DetailsPage