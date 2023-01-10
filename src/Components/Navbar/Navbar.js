import React from "react";
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
          <img src={logo}   className="h-5 w-9 " alt="" />
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

      <div className="flex flex-row justify-between gap-3">
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
  );
};

export default Navbar; 