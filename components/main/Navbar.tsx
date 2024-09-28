"use client";
import { FiGithub } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from "framer-motion";

const Navigationcontent=[{
  id:"1", 
  name:"Home"
},{
  id:"2",
  name:"About"
},
{
  id:"3",
  name:"Projects"
},
{
  id:"4",
  name:"Skills"
},
{
  id:"5",
  name:"Contact"
}]
// {
//   id:"6",
//   name:"Resume"
// }

export default function Navigationbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
      <div className="w-11/12 2xl:max-w-9xl pr-9   py-4 z-50 fixed top-2 h-12 md:h-16 2xl:h-20 flex  items-center md:justify-end rounded-full shadow-lg">
        <div className=" flex md:flex-none flex-grow justify-around text-xs md:text-sm text-white  md:gap-8 lg:gap-12 mx-2 md:ml-10">
          {Navigationcontent.map((nav)=>{

         return  <div key={nav.id}
            className="cursor-pointer transform transition hover:scale-110 text-md 2xl:text-xl hover:text-gray-400"
            onClick={() => scrollToSection(nav.id)}
          >
            {nav.name}
          </div>
          })}
        </div>
        {/* <div className="md:flex md:justify-between gap-6 hidden   md:gap-10 items-center mr-6 md:mr-12  lg:text-xl">
          <a href={"https://github.com/Vansh-Parate"} target="_blank">
            <div>
              <FiGithub  className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400"/>
            </div>
          </a>
          <a
            href={"https://www.linkedin.com/in/rahul-soni-50b806203/"}
            target="_blank"
          >
            <div>
              <FaLinkedin className="cursor-pointer transform transition text-cyan-600  hover:scale-110 hover:text-gray-400" />
            </div>
          </a>
          <a href={"https://twitter.com/SoniRahul3108"} target="_blank">
            <div>
              <FaXTwitter className="cursor-pointer transform transition hover:scale-110 text-white hover:text-gray-400" />
            </div>
          </a>
          <a
            href={"https://www.instagram.com/index.developers/"}
            target="_blank"
          >
            <div>
              <FaInstagram className="cursor-pointer transform transition text-xl lg:text-2xl text-pink-800 hover:scale-110 hover:text-gray-400" />
            </div>
          </a>
          </div> */}
     </div>
  );
}