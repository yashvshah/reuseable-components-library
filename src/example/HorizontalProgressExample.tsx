import React, { useState } from "react";
import ProgressSteps from "../components/HorizontalProgressSteps/HorizontalProgressSteps";
import FormComponent from "../example/UseFormikExample";
import { Button } from "../components";

const HorizontalProgressExample = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { label: "Step 1" },
    { label: "Step 2" },
    { label: "Step 3" },
    { label: "Step 4" },
  ];

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const getStepComponent = (currentStep) => {
    switch (currentStep) {
      case 0:
        return <FormComponent handleNextStep={handleNextStep} />;
      case 1:
        return (
          <div>
            <h5>My name is </h5>

            <Button
              type="submit"
              btnClassName="w-full bg-tint-600 text-white py-2 px-4 rounded-md"
              onClick={handleNextStep}
            >
              Next
            </Button>
            <Button
              type="submit"
              btnClassName="w-full bg-tint-600 text-white py-2 px-4 rounded-md"
              onClick={handlePrevStep}
            >
              Previous
            </Button>
          </div>
        );
      case 2:
        return (
          <div>
            <h5>Arrpith</h5>
            <Button
              type="submit"
              btnClassName="w-full bg-tint-600 text-white py-2 px-4 rounded-md"
              onClick={handleNextStep}
            >
              Next
            </Button>
            <Button
              type="submit"
              btnClassName="w-full bg-tint-600 text-white py-2 px-4 rounded-md"
              onClick={handlePrevStep}
            >
              Previous
            </Button>
          </div>
        );
      case 3:
        return (
          <div>
            <h5>Shah</h5>

            <Button
              type="submit"
              btnClassName="w-full bg-tint-600 text-white py-2 px-4 rounded-md"
              onClick={handleNextStep}
            >
              Next
            </Button>
            <Button
              type="submit"
              btnClassName="w-full bg-tint-600 text-white py-2 px-4 rounded-md"
              onClick={handlePrevStep}
            >
              Previous
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-10 flex justify-center">
      <ProgressSteps
        steps={steps}
        labelName={[
          "Pan verification",
          "Bank Verification",
          "Video KYC",
          "User Information",
        ]}
        initialStep={currentStep}
        currentStepComponent={getStepComponent(currentStep)}  />
    </div>
  );
};

export default HorizontalProgressExample;
