import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background-main border-t border-solid border-border-color py-6 ">
      <div className="container mx-auto max-sm:px-5  max-sm:gap-3 flex justify-between max-sm:flex-col items-center">
        <a className="text-xl font-bold text-white">
          Port<span className="text-primary-orange">folio</span>
        </a>

        <ul className="flex max-sm:gap-3 max-sm:justify-center gap-5">
          <a href="https://github.com/Joosharma?tab=repositories">
            <li className="text-white border border-solid border-border-color p-3 rounded-[50%] hover:cursor-pointer hover:animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </li>
          </a>
          <a href="https://www.instagram.com/jyoti__8055__?igsh=MWd6cTl1MHQ5cTR0Nw==">
            <li className="text-white border border-solid border-border-color p-3 rounded-[50%] hover:animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jyoti-66a222266/">
            <li className="text-white border border-solid border-border-color p-3 rounded-[50%] hover:animate-spin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </li>
          </a>
          {/* whatsapp */}
          <a  id="letTalk" href="https://wa.me/917748945408?text=Hello%20Jyoti,%20I%20visited%20your%20portfolio">
            <li className="text-white border border-solid border-border-color p-3 px-4 rounded-[50%] hover:animate-spin">
               <i className="fa-brands fa-whatsapp text-2xl text-gray-200"></i>
            </li>
          </a>
          {/* <a
            href="https://wa.me/917748945408?text=Hello%20Jyoti,%20I%20visited%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className=" bottom-10 left-10 500  text-white  rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 rounded-full overflow-hidden"
          >
            <i className="fa-brands fa-whatsapp text-6xl bg-green-500 hover:bg-green-600"></i>
          </a> */}
        </ul>
        <span className="text-text-secondary">
          © 2024 Jyoti. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
