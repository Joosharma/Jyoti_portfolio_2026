import { useState } from "react";
// npm run dev -- --host

export default function Offcanvas() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {/* Button */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Open Menu
      </button> */}
      <button
        onClick={() => setIsOpen(true)}
        className="menu md:hidden text-white " 
      >
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
      </button>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0  bg-opacity-50"
        ></div>
      )}
      {/* Sidebar */}
      <div
     className={`fixed top-0 right-0 z-50 h-screen w-50  text-xl bg-primary-orange/20 backdrop-blur-3xl
 text-white font-extrabold opacity-80 shadow-lg transform transition-transform duration-300 ${
   isOpen ? "translate-x-0" : "translate-x-full"
 }`}
      >
        <div className="p-5 flex flex-col gap-5">
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary-orange font-bolder"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <ul className="mt-5 space-y-3 flex flex-col gap-3">
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
        </div>
      </div>
    </div>
  );
}
