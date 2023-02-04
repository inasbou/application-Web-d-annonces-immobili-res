import React, { useState } from 'react'
import  {BiMenuAltRight}  from 'react-icons/bi'
import { CgSearch } from "react-icons/cg";
import { GrFormAdd } from "react-icons/gr";
import { BsQuestionLg } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import logo from "../assets/logo.png";
import pic from "../assets/Ellipse.png";
const Navbar = ({ annonces , setAnnonces }) => {
 
    const handelSearch = (value) => {
      const data = annonces.filter((item) =>
        item["type_annonce"].toLowerCase().includes(value)|| item["categorie"].toLowerCase().includes(value)
      );
      setAnnonces(data);
    };
    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-gray-100'>
      
      <div className=" flex flex-row  items-center justify-between  py-1 md:px-10 px-2 gap-2">
        <div className="flex flex-row ">
          <img src={logo}   className="h-5 w-9 " />
         
        </div>
        <div className="flex flex-row px-2  w-24 md:w-64 rounded-2xl bg-violet-200 ">
          <input
            className="bg-violet-200 w-20 md:w-60 "
            type="text"
            placeholder="Rchercher annonce "
            onChange={(e) => handelSearch(e.target.value)}/>
            
           <CgSearch color="gray"  />
        </div>
      
      
      <div onClick={()=>setOpen(!open)} className='text-3xl  right-8   lg:hidden'>
      <BiMenuAltRight />
      </div>

      <ul className={`lg:flex lg:items-center lg:pb-0 py-2 px-2 mx-2 lg:m-0 absolute gap-1 lg:static bg-gray-100 lg:z-auto z-[-1] left-4 justify-center w-full lg:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' top-16':'top-[-490px]'}`}>
      <div className={`flex flex-row  py-1 ${open ? 'gap-5 ':'gap-1'}`}>
          <GrFormAdd 
            color="white"
            className=" rounded-full bg-violet-600 h-6 w-6 p-1 "
          />
          <p className=" text-violet-900"> Publier </p>
        </div>
        <div className={`flex flex-row  py-1 ${open ? 'gap-5 ':'gap-1'}`}>
          <TbMessageCircle
            color="white"
            className=" rounded-full bg-violet-600 h-6 w-6 p-1"
          />
          <p className=" text-violet-900">Messagerie </p>
        </div>
        <div className={`flex flex-row  py-1 ${open ? 'gap-5 ':'gap-1'}`}>
          <BsQuestionLg
            color="white"
            className=" rounded-full bg-violet-600 h-6 w-6 p-1 "
          />
          <p className=" text-violet-900">Aide </p>
        </div>
        <div className={`flex flex-row  py-1 ${open ? 'gap-5 ':'gap-1'}`}>
          <img src={pic} className="h-7 w-7" />
          <p className=" text-violet-text">Mon compte </p>
        </div>
        
      </ul>
      </div>
    </div>
  )
}

export default Navbar;
/*import React from "react";
import { CgSearch } from "react-icons/cg";
import { GrFormAdd } from "react-icons/gr";
import { BsQuestionLg } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex flex-row  justify-between bg-gray-100 p-4">
      <div className=" flex flex-row  justify-between gap-5">
        <div className="flex flex-row ">
          <img src={logo}   className="h-5 w-9 " />
          <p className=" text-violet-900 ">AQAR</p>
        </div>
        <div className="flex flex-row px-2  rounded-2xl bg-violet-200 ">
          <input
            className="bg-violet-200"
            type="text"
            placeholder="Rchercher une annonce "
          />

          <CgSearch color="gray" />
        </div>
      </div>
      <div className="hidden lg:flex">
      <div className="  justify-between gap-3">
        <div className="flex flex-row">
          <GrFormAdd 
            color="white"
            className=" rounded-full bg-violet-600 h-6 w-6 p-1 "
          />
          <p className=" text-violet-900"> Publier </p>
        </div>
        <div className="flex flex-row">
          <TbMessageCircle
            color="white"
            className=" rounded-full bg-violet-600 h-6 w-6 p-1"
          />
          <p className=" text-violet-900">Messagerie </p>
        </div>
        <div className="flex flex-row">
          <BsQuestionLg
            color="white"
            className=" rounded-full bg-violet-600 h-6 w-6 p-1 "
          />
          <p className=" text-violet-900">Aide </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar; */