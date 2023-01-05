import React from "react";
import { CgSearch } from "react-icons/cg";
import { GrFormAdd } from "react-icons/gr";
import { BsQuestionLg } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import logo from "../assets/logo.png";
import pic from "../assets/Ellipse.png";

const Navbar = () => {
  return (
    <div className="flex flex-row  justify-between bg-gray-100 p-4">
      <div className=" flex flex-row  justify-between gap-5">
        <img src={logo} className="h-7" />

        <div className="flex flex-row px-2  rounded-2xl bg-light-violet ">
          <input
            className="bg-light-violet"
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
            className=" rounded-full bg-violet-btn h-6 w-6 p-1 "
          />
          <p className=" text-violet-text">Publier </p>
        </div>
        <div className="flex flex-row">
          <TbMessageCircle
            color="white"
            className=" rounded-full bg-violet-btn h-6 w-6 p-1"
          />
          <p className=" text-violet-text">Messagerie </p>
        </div>
        <div className="flex flex-row">
          <BsQuestionLg
            color="white"
            className=" rounded-full bg-violet-btn h-6 w-6 p-1 "
          />
          <p className=" text-violet-text">Aide </p>
        </div>
        <div className="flex flex-row">
          <img src={pic} className="h-7 w-7" />
          <p className=" text-violet-text">Mohammed </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar; /*onChange={handleChange}
        value={searchInput} />*/
