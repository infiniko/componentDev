import { useState } from "react";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepCounter from "./components/StepCounter";

const initialData = {
  firstName: "",
  lastName: "",
  age: 18,
  address: "",
  city: "",
  salary: "",
  occupation: "",
};

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialData);
  const steps = [
    {
      id: 0,
      name: "Personal info",
      component: StepOne,
    },
    {
      id: 1,
      name: "Address info",
      component: StepTwo,
    },
    {
      id: 2,
      name: "Financial info",
      component: StepThree,
    },
  ];

  const isFirstPage = currentStep === 0;
  const isLastPage = currentStep === steps.length - 1;

  const prevClick = () => {
    setCurrentStep((prev) => (isFirstPage ? prev : prev - 1));
  };

  const nextClick = () => {
    setCurrentStep((prev) => prev + 1);
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[1000px] bg-blue-50 shadow-lg rounded-2xl p-20">
        <StepCounter currentStep={currentStep} steps={steps} />
        <form onSubmit={handleSubmit}>
          <div className="">
            <CurrentStepComponent
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </form>
        <div className="flex items-center justify-between">
          <button
            type="button"
            disabled={isFirstPage}
            className="rounded-sm border-2 p-2 bg-gray-200"
            onClick={prevClick}
          >
            Previous
          </button>
          {isLastPage ? (
            <button
              type="button"
              className="rounded-sm border-2 p-2 bg-gray-800 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              className="rounded-sm border-2 p-2 bg-gray-800 text-white"
              onClick={nextClick}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
