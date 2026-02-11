import React from "react";

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="w-full max-w-md mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-white">{skill}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>

      <div className="w-full max-sm:h-1 h-2 bg-[#2a2a2a] rounded-full">
        <div
          className="max-sm:h-1 h-2  bg-[#EB6847] rounded-full transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
