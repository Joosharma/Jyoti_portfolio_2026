import React from "react";
import Button from "../components/button/Button";
import ProjectContain from "../components/ProjectContain";
import SkillBar from "../components/SkillBar";
import TechnologySection from "../components/TechnologySection";
import projectImg1 from "../assets/project-1-img.jpg";
import projectImg2 from "../assets/project-2-img.jpg";
import projectImg3 from "../assets/project-3-img.jpeg";
import profile from "../assets/jyoti-profile.jpg";
import resume from "../../public/Jyoti_resume_2026.pdf";
import Form from "../components/Form";
// https://github.com/Joosharma

const MainScreen = () => {
  const head = `  Welcome to my portfolio`;

  const info = {
    name: "Jyoti",
    role: "Designer & Developer",
    about: `Frontend Developer focused on building intuitive, responsive user interfaces using HTML, CSS, JavaScript, React, and Angular, with an emphasis on clean code, performance optimization, component-based architecture, and scalable UI design.`,
  };

  const statdata = [
    {
      id: 1,
      projectNum: `5+ `,
      projectTitle: `5+ Frontend Projects`,
    },
    {
      id: 2,
      projectNum: 50,
      projectTitle: `100% Learning Focus or Hands-on Practice`,
    },
    {
      id: 3,
      projectNum: 5,
      projectTitle: `Fresher / Entry-Level Developer`,
    },
    {
      id: 4,
      projectNum: 15,
      projectTitle: `Continuous Skill Growth`,
    },
  ];

  const servicesCardData = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeWidth="round"
          strokeLinecap="round"
          className="lucide lucide-rocket-icon lucide-rocket"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      cardTitle: `ui/ux Designing`,
      cardDiscrip: ` Creating beautiful, intuitive interfaces that users love`,
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeWidth="round"
          strokeLinecap="round"
          className="lucide lucide-palette-icon lucide-palette"
        >
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      ),
      cardTitle: `Development`,
      cardDiscrip: `Building robust applications with modern technologies`,
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeWidth="round"
          strokeLinecap="round"
          className="lucide lucide-code-icon lucide-code"
        >
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      ),
      cardTitle: `Problem Solving`,
      cardDiscrip: `Finding creative solutions to complex challenges`,
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          strokeWidth="round"
          strokeLinecap="round"
          className="lucide lucide-lightbulb-icon lucide-lightbulb"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
      cardTitle: `Fast Delivery`,
      cardDiscrip: `Delivering quality work on time, every time`,
    },
  ];

  return (
    <div>
      {/* hero section */}
      <section id="home" className="bg-background-main py-5 overflow-hidden">
        <div className="container mx-auto py-6 md:px-6">
          <h1 className="text-primary-orange uppercase font-medium max-md:text-center">
            {head}
          </h1>
          <div className="grid max-sm:grid-cols-1 md:grid-cols-2  max-md:gap-6">
            {/* content */}
            <div className="content flex flex-col gap-8 text-text-secondary max-md:items-center max-md:px-5 ">
              <h2 className=" max-sm:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-md:text-center max-md:leading-8 max-sm:mt-3">
                Hi, I'm{" "}
                <i className="bg-linear-to-r from-orange-400 via-green-400 to-teal-400 bg-clip-text text-transparent ">
                  {info.name}
                </i>{" "}
                {info.role}
              </h2>
              <p className="text-xl max-md:text-center max-md:leading-6">
                {info.about}
              </p>
              {/* buttons */}
              <div className="btns flex gap-2 ">
                <a href="https://github.com/Joosharma">
                  <Button btnName="View My Work" showArrow={true} />
                </a>

                <a href={resume} download="Jyoti-Sharma-Frontend-Resume">
                  <Button btnName="Download Resume" />
                </a>
              </div>
              {/* social icons */}
              <div className="flex gap-3"></div>
            </div>
            {/* img */}
            <div className="img flex max-md:justify-center md:justify-end pr-6 relative max-md:px-6">
              {/* experience count */}
              {/* <div className="flex flex-col justify-center items-center shadow-lg bg-background-secondary p-4 rounded-3xl absolute right-0 top-25 border border-solid border-border-color ">
                <p className="text-3xl font-extrabold text-primary-orange ">
                  4+
                </p>
                <span className="text-sm font-medium text-text-secondary">
                  Years Exps.
                </span>
              </div> */}
              {/* project count */}
              {/* <div className="flex flex-col justify-center items-center shadow-lg bg-background-secondary p-4 rounded-3xl absolute left-50 max-md:left-25 max-sm:left-10 max-md:bottom-20 bottom-40 border border-solid border-border-color ">
                <p className="text-3xl font-extrabold text-text-blue">50+</p>
                <span className="text-sm font-medium text-text-secondary">
                  Projects
                </span>
              </div> */}
              {/* profile img */}
              <div className="max-sm:w-80 max-sm:h-80 sm:w-90 sm:h-90  lg:w-100 lg:h-100 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 ring-2 ring-primary-orange ">
                <img
                  src={profile}
                  className="h-full w-full object-cover -rotate-10 object-top scale-100 "
                  alt="portfolio image of gagandeep likhare"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="bg-background-next max-sm:py-10 py-20 overflow-hidden">
        {/* heading */}
        <div>
          <div id="about" className="heading">
            <h2 className="text-sm text-center text-primary-orange uppercase font-bold  mb-4">
              About Me
            </h2>
            <p className="max-sm:text-3xl text-5xl text-center font-bold text-white max-sm:px-5 md:px-5">
              Passionate about creating modern <br />
              <i>frontend experiences</i>
            </p>
          </div>
        </div>
        {/* context and exprs */}
        <div className="container mx-auto max-sm:px-5 lg:px-40 py-10 grid max-md:grid-cols-1 md:grid-cols-2 max-md:gap-5 md:px-6">
          <div className="text-text-secondary font-medium text-lg flex flex-col items-center justify-center gap-5">
            <p className="max-sm:leading-6 max-sm:text-center">
              I am a frontend developer with a strong focus on building
              responsive, user-friendly web interfaces. I enjoy transforming
              design ideas into clean, functional, and visually engaging user
              experiences using modern frontend technologies.
            </p>
            <p className="max-sm:leading-6 max-sm:text-center">
              I work with HTML, CSS, JavaScript, React, Angular and Tailwind CSS
              to create scalable UI components and performance-driven web
              applications. I am continuously learning and improving my skills
              to deliver better digital experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 px-6 max-sm:px-0 max-sm:py-5">
            {statdata.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 justify-center  items-center  shadow-lg bg-background-secondary  rounded-2xl bottom-6 border border-solid border-border-color py-5 "
              >
                <p className="text-2xl font-semibold text-text-blue text-center ">
                  {item.projectTitle}
                </p>
                {/* <span className="text-sm font-medium text-text-secondary">
                  {item.projectTitle}
                </span> */}
              </div>
            ))}
          </div>
        </div>
        {/* services */}
        <div className="container mx-auto max-sm:px-5 lg:px-40 grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6">
          {servicesCardData.map((items) => (
            <div
              key={items.id}
              className="flex flex-col gap-3 justify-between p-6 items-start shadow-lg bg-background-secondary rounded-3xl border border-border-color" 
     
            >
              {/* icon */}
              <span className="text-primary-orange p-3 rounded-xl border border-border-color bg-background-icons cursor-pointer animate-bounce">
                {items.icon}
              </span>
              {/* title */}
              <p className="text-xl font-bold text-white">{items.cardTitle}</p>
              {/* description */}
              <p className="text-sm font-medium text-text-secondary">
                {items.cardDiscrip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* projects section  */}
      <section className="bg-background-main overflow-hidden">
        {/* heading  */}
        <div className="heading py-10 max-md:px-5 flex flex-col gap-4 md:px-6">
          <h2 className="uppercase text-sm text-primary-orange text-center font-medium">
            my work
          </h2>
          <p className=" max-sm:text-2xl text-3xl text-white font-bold text-center">
            <i>Featured Frontend Projects</i>
          </p>
          <p className="text-text-secondary text-lg text-center font-bold">
            Each project highlights my ability to build responsive,
            user-friendly interfaces with clean and scalable code.
          </p>
        </div>
        {/* contain */}
        <div id="work" className="container mx-auto md:px-6">
          <div className="grid max-md:grid-cols-1 md:grid-cols-2 py-8 max-md:px-5 max-md:gap-6">
            {/* img */}
            <div className="rounded-2xl overflow-hidden " data-aos="fade-left">
              <a href="https://react-ecommerce-virid.vercel.app/">
                <img
                  src={projectImg1}
                  alt=""
                  className="h-full w-full hover:scale-105  duration-300 ease-in-out cursor-pointer"
                />
              </a>
            </div>
            <ProjectContain
              title="E-Commerce Portfolio Website"
              description="This is a modern e-commerce–style portfolio website built using React JS, Tailwind CSS, and Redux.
              The project focuses on clean UI design, reusable components, and efficient global state management. Redux is used to handle application state such as product data, cart actions, and UI updates, ensuring scalability and better performance."
              technologies={["React JS", "Tailwind CSS", "JavaScript", "Vite"]}
            />
          </div>
          <div className="grid max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse md:grid-cols-2 py-8 max-md:px-5 max-md:gap-6">
            <ProjectContain
              title="Viraj Soft Tech Solution "
              description="This project is a complete frontend website developed for Viraj Soft Tech Solution, where I designed and implemented all pages from scratch using Tailwind CSS. The project focuses on building a fully responsive, modern, and consistent UI aligned with the company’s branding and business requirements."
              technologies={["React JS", "Tailwind CSS", "JavaScript", "Vite"]}
            />
            {/* img */}
            <div
              className="rounded-2xl overflow-hidden scale-100"
              data-aos="fade-right"
            >
              <a href="https://virajsofttechsolutions.com/">
                {" "}
                <img
                  src={projectImg2}
                  alt=""
                  className="h-full w-full hover:scale-105   duration-300 ease-in-out cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="grid max-md:grid-cols-1 md:grid-cols-2 py-8 max-md:px-5 max-md:gap-6">
            {/* img */}
            <div className="rounded-2xl overflow-hidden " data-aos="fade-left">
              <a href="https://shaadijeevan.com">
                {" "}
                <img
                  src={projectImg3}
                  alt=""
                  className="h-full w-full hover:scale-105  duration-300 ease-in-out cursor-pointer"
                />
              </a>
            </div>
            <ProjectContain
              title="Shaadi Jeevan"
              description="This project is a modern matrimonial platform where I contributed to the web designing and frontend styling using Tailwind CSS. My role focused on building responsive layouts, designing UI components, and maintaining visual consistency across different pages"
              technologies={["Tailwind CSS"]}
            />
          </div>
        </div>
      </section>
      {/* skill */}
      <section className="bg-background-next max-lg:py-10 lg:py-20 overflow-hidden">
        <div
          id="skills"
          className="container mx-auto max-sm:px-5 sm:px-10  lg:px-40 py-6"
        >
          {/* heading */}
          <div className="flex flex-col gap-6 heading ">
            <h2 className="uppercase text-lg text-primary-orange text-center font-medium">
              Skills
            </h2>
            <p className="text-3xl text-white font-bold text-center">
              <i>Technologies I Work With</i>
            </p>
            <p className="text-text-secondary max-sm:text-lg max-sm:leading-6 text-xl text-center font-bold">
              As a frontend developer, I specialize in building responsive and
              user-friendly web interfaces using modern technologies. I focus on
              writing clean, maintainable code and creating seamless user
              experiences across devices. My expertise includes component-based
              architecture, state management, and performance optimization.
            </p>
          </div>
          {/* skillbar */}
          <div className="skills grid max-sm:grid-cols-1 max-sm:place-items-center grid-cols-2 gap-5 mt-10 font-bold">
            <SkillBar skill="HTML" percentage={90} />
            <SkillBar skill="CSS" percentage={95} />
            <SkillBar skill="JavaScript" percentage={86} />
            <SkillBar skill="Tailwind Css" percentage={98} />
            <SkillBar skill="Bootstrap" percentage={90} />
            <SkillBar skill="jQuery" percentage={85} />
            <SkillBar skill="React js" percentage={94} />
            <SkillBar skill="Angular" percentage={93} />
            <SkillBar skill="Redux Toolkit" percentage={80} />
            <SkillBar skill="Next js" percentage={90} />
          </div>
          {/* technologies work with */}
          <TechnologySection />
        </div>
      </section>
      {/* contact */}
      <section className="bg-background-main border-b border-solid border-border-color max-lg:py-10 lg:py-20  overflow-hidden">
        <div
          id="contact"
          className="container mx-auto max-sm:px-5   lg:px-30 py-6"
        >
          {/* heading */}
          <div className="flex flex-col gap-6 heading text-center">
            <h2 className="uppercase text-lg text-primary-orange font-medium">
              Get in Touch
            </h2>
            <p className="max-sm:text-2xl text-5xl text-white font-bold">
              Let's talk about your<i> project</i>
            </p>
            <p className="text-text-secondary text-xl font-bold">
              I'm currently available for freelance work and open to new
              opportunities.
            </p>
          </div>
          <div className="w-full py-10 flex max-sm:flex-wrap gap-9 ">
            <div className="sm:w-1/3 max-sm:w-full flex flex-col max-sm:flex-wrap gap-10 ">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3">
                  <span className="text-primary-orange p-3 rounded-xl   bg-background-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-mail-icon lucide-mail"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                  </span>
                  <ul className="leading-5">
                    <li className="text-white font-medium">Email</li>
                    <li className="text-text-secondary">
                      jyotisharma131561@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary-orange p-3 rounded-xl   bg-background-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-phone-icon lucide-phone"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                  </span>
                  <ul className="leading-5">
                    <li className="text-white font-medium">Phone</li>
                    <li className="text-text-secondary">6260125003</li>
                  </ul>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary-orange p-3 rounded-xl   bg-background-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-map-pin-icon lucide-map-pin"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <ul className="leading-5">
                    <li className="text-white font-medium">Location</li>
                    <li className="text-text-secondary">
                      Jabalpur, Madhya Pradesh
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-background-secondary border border-solid border-border-color rounded-2xl p-6  ">
                <h3 className="text-white text-xl font-bold">
                  Available for work
                </h3>
                <p className="text-text-secondary">
                  Available for frontend roles (remote or on-site). Based in
                  Jabalpur, open to relocation and new challenges.
                </p>
              </div>
              {/* whatsapp floating button */}
              <div className="floating_whatsapp overflow-hidden">
                <a
                  href="https://wa.me/917748945408?text=Hello%20Jyoti,%20I%20visited%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" fixed bottom-10 z-20 max-sm:left-[10%]  sm:right-[10%] 500  text-white bg-green-500  rounded-full shadow-lg hover:scale-110 transition-all duration-300 overflow-hidden  animate-bounce"
                >
                  <i className="fa-brands fa-whatsapp text-4xl bg-green-500 hover:bg-green-600 py-3 px-4"></i>
                </a>
              </div>
            </div>
            {/* form */}
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainScreen;
