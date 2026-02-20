import React from "react";

const ProjectContain = ({ title, description, technologies, projectLink }) => {
  return (
    <div>
      <div className="about-project h-full w-full flex flex-col justify-center items-start max-md:items-center max-md:gap-2 lg:gap-5 max-sm:px-5 max-sm:py-5 px-10 max-sm:border max-sm:border-solid max-sm:border-border-color max-sm:rounded-2xl max-md:shadow-2xl">
        <h2 className="uppercase text-sm text-primary-orange text-left font-medium ">
          my work
        </h2>
        <h3 className="text-4xl text-center max-sm:text-2xl text-white font-bold mb-4">
          <i>{title}</i>
        </h3>
        <p className="text-text-secondary font-medium mb-6 max-md:text-center">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 max-sm:justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="py-1 px-3 text-lg max-sm:text-sm text-white bg-background-secondary rounded-3xl"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* view my project */}
        <button className="py-2 px-4 bg-primary-orange text-white rounded-lg font-medium flex gap-2 max-lg:mt-5 hover:cursor-pointer">
          <span><a href="https://github.com/Joosharma" >View Project</a></span>
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
            class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectContain;
