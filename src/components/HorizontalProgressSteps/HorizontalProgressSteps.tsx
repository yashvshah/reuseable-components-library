import clsx from "clsx";
import React, { useEffect, useState } from "react";

type ProgressStep = {
  label: string;
};

type ProgressStepsProps = {
  steps: ProgressStep[];
  labelName: string[];
  activeBtnClassName?: string;
  inActiveBtnClassName?: string;
  progressBarClassName?: string;
  childBackgroundClassName?: string;
  mainClassName?: string;
  currentStepComponent: React.ReactNode;
  initialStep: number;
};

const HorizontalProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  labelName,
  activeBtnClassName,
  inActiveBtnClassName,
  progressBarClassName,
  childBackgroundClassName,
  mainClassName,
  currentStepComponent,
  initialStep,
}) => {
  const [activeStep, setActiveStep] = useState<number>(initialStep);

  useEffect(() => {
    setActiveStep(initialStep);
  }, [initialStep]);

  return (
    <div className={`flex flex-col ${mainClassName}`}>
      <div
        className={clsx(
          `h-1 rounded flex items-center  ${
            progressBarClassName === undefined || null
              ? "bg-orange-400"
              : progressBarClassName
          }`
        )}
      >
        <div className="flex justify-between w-full mx-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex rounded-full ${
                activeStep === index
                  ? clsx(
                      activeBtnClassName === undefined || null
                        ? "bg-yellow-900 text-white"
                        : activeBtnClassName
                    )
                  : clsx(
                      inActiveBtnClassName === undefined || null
                        ? "bg-orange-700"
                        : inActiveBtnClassName
                    )
              }`}
            >
              <div className="rounded-full h-6 w-6 flex items-center justify-center border-2 border-white">
                {activeStep > index ? (
                  <span className="text-sm font-semibold">&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        {labelName.map((step, index) => (
          <div key={index} className="mt-2 text-center">
            {step}
          </div>
        ))}
      </div>
      <div
        className={clsx(
          childBackgroundClassName === undefined || null
            ? "w-full p-3"
            : childBackgroundClassName
        )}
      >
        <div className="mb-4">{currentStepComponent}</div>
      </div>
    </div>
  );
};

export default HorizontalProgressSteps;
