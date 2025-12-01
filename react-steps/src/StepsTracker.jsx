import React, { useEffect, useRef, useState } from "react";

const StepsTracker = ({ stepsConfig }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
    });
  }, [stepRef, stepsConfig.length]);

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev === stepsConfig.length) {
        setIsCompleted(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComp = stepsConfig[currentStep - 1].component;
  return (
    <>
      <div className="steps-container">
        {stepsConfig.map((step, index) => (
          <div
            key={step.id}
            ref={(currEl) => (stepRef.current[index] = currEl)}
            className={`step ${
              currentStep > index + 1 || isCompleted ? "complete" : ""
            } ${currentStep === index + 1 ? "active" : ""}`}
          >
            <div className="step-num">
              {currentStep > index + 1 || isCompleted ? (
                <span>&#10003;</span>
              ) : (
                step.id
              )}
            </div>
            <div className="step-name">{step.name}</div>
          </div>
        ))}
      </div>

      <div
        className="step-progress-bar"
        style={{
          width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
          marginLeft: margins.marginLeft,
          marginRight: margins.marginRight,
        }}
      >
        <div
          className="progress"
          style={{ width: `${calculateProgressBarWidth()}%` }}
        ></div>
      </div>

      <ActiveComp />
      {!isCompleted && (
        <button className="progress-btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "FINISH" : "NEXT"}
        </button>
      )}
    </>
  );
};

export default StepsTracker;
