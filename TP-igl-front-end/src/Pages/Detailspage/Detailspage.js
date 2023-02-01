import React from 'react'
import DetailsPage from '../../Components/DetailsPage/AnnonceDetails'
import Detailsannonceur from '../../Components/DetailsPage/AnnonceurInfos'
import  Map from '../../Components/DetailsPage/Map'
function Detailspage() {
  return (
    <>
    <div className='flex   flex-col lg:flex-row   m-4 p-3 border-gray-300   rounded-xl border-2'>
    <DetailsPage/><Map/></div>
    <div className='flex justify-center '>
    <Detailsannonceur/></div>
    </>
  )
}

export default Detailspage
