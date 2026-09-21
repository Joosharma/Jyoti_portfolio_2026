import React from "react";
const TechnologySection = () => {
  const techno = [
    {
      technology: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript",
        "React.js",
        "Node.js",
        "Angular",
        "Git & GitHub",
        "REST APIs",
        "Postgresql",
      ],
    },
  ];
  return (
    <div className="mt-10">
      <h3 className="text-xl text-white text-center font-bold mb-4">
        Technologies I Work With
      </h3>
      {/* technologies */}
      <div className="flex flex-wrap justify-center gap-3">
        {techno[0].technology.map((item, index) => (
          <span
            key={index}
            className="text-lg max-sm:text-sm py-1 px-3 text-white bg-background-secondary rounded-3xl border border-solid border-border-color "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TechnologySection;
