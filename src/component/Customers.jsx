import React from "react";
import AnimatedNumbers from "react-animated-numbers";

// Sample list of achievements
const achievementsList = [
  {
    metric: "Candidates",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "",
    metric: "Countries",
    value: "13",
  },
];

// Customers component
const Customers = () => {
  return (
    <div className="py-8 px-4 dark:bg-gradient-to-b from-slate-900 to-gray-900 flex justify-center items-center ">
      {/* Container for the achievements list */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:border-[#33353F] sm:border rounded-md py-8 px-4 sm:px-16 space-y-8 sm:space-y-0 sm:space-x-16">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row items-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(
                    achievement.value.replace(/,/g, "")
                  )}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Exporting the Customers component
export default Customers;
