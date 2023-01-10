import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {IoIosListBox} from 'react-icons/io'
import {MdFavorite} from 'react-icons/md'
const Links = () => {
  return (
    <div>
      
    <div className='flex flex-col h-fit w-fit shadow-md  p-3 '>
     <div className=' flex flex-row text-center py-1 align-middle'>
        <FaUserAlt/>
        <p>Mon compte</p>
     </div> 
      <div className=' flex flex-row border-y-2 text-center align-middle py-1'>
        <IoIosListBox/>
        <p>Mes annonces</p>
     </div>
     <div className=' flex flex-row  text-center py-1 align-middle'>
        <MdFavorite/>
        <p>Mes favorits</p>
     </div>

    </div>
    </div>
  )
}

export default Links