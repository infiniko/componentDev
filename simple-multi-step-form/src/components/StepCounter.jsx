import React from "react";

const StepCounter = ({ currentStep, steps }) => {
  function activeClass(stepId) {
    const circleClass = `h-10 w-10 rounded-3xl text-center pt-2 ${
      currentStep === steps[stepId]?.id
        ? "bg-gray-200 text-gray-900"
        : "bg-gray-600 text-white"
    }`;
    return circleClass;
  }
  return (
    <div className="flex justify-between w-full">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={activeClass(step.id)}>{step.id + 1}</div>
          {steps.length - 1 > index && (
            <div className="h-0.5 mt-6 bg-gray-800 w-30"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepCounter;
