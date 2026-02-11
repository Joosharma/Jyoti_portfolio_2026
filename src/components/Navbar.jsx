import React from "react";
import { Sun } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-background-main border-b  border-solid border-border-color">
        <div className="container mx-auto flex items-center justify-between  py-4 max-md:px-6">
          <a className="text-3xl font-bold text-white">
            Port<span className="text-primary-orange">folio</span>
          </a>
          <ul className="flex items-center gap-6 font-medium font-color text-text-secondary max-md:hidden">
            <li className="hover:text-primary-orange hover:font-bold hover:scale-3d cursor-pointer  ">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary-orange hover:font-bold hover:scale-3d cursor-pointer  ">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary-orange hover:font-bold hover:scale-3d cursor-pointer  ">
              <a href="#work">Work</a>
            </li>
            <li className="hover:text-primary-orange hover:font-bold hover:scale-3d cursor-pointer  ">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-primary-orange hover:font-bold hover:scale-3d cursor-pointer  ">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="flex items-center gap-3 text-white max-md:hidden">
           
            {/* <span>
              <Sun size={20} />
            </span> */}
            <a href="#contact">
              {" "}
              <a href="#letTalk">
                {" "}
                <button className="w-full hover:cursor-pointer  hover:bg-linear-to-r from bg-primary-orange to-red-500 text-white font-semibold py-1 px-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
                  Let's Talk
                </button>
              </a>
            </a>
          </div>
          <div className="menu md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
