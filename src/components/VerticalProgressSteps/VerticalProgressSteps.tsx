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
  labelNameClassName?: string;
  initialStep: number;
  currentStepComponent: React.ReactNode;
};

const VerticalProgressSteps: React.FC<ProgressStepsProps> = ({
  steps,
  labelName,
  activeBtnClassName,
  inActiveBtnClassName,
  progressBarClassName,
  childBackgroundClassName,
  labelNameClassName,
  mainClassName,
  currentStepComponent,
  initialStep,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  return (
    <div
      className={clsx(
        mainClassName === undefined || null ? "flex h-96" : mainClassName
      )}
    >
      <div className="flex items-start">
        <div
          className={clsx(
            `${
              progressBarClassName === undefined || null
                ? "w-2 bg-orange-400"
                : progressBarClassName
            }`
          )}
        >
          <div className="flex flex-col justify-between items-center h-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center rounded-full ${
                  currentStep === index
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
                  {currentStep > index ? (
                    <span className="text-sm font-semibold">&#10003;</span>
                  ) : (
                    index + 1
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex flex-col justify-between items-start ${clsx(
            labelNameClassName === undefined || null
              ? "h-96"
              : labelNameClassName
          )}`}
        >
          {labelName.map((step, index) => (
            <div key={index} className="ml-3">
              {step}
            </div>
          ))}
        </div>
      </div>
      <div
        className={clsx(
          childBackgroundClassName === undefined || null
            ? "w-3/4 p-8"
            : childBackgroundClassName
        )}
      >
        <div className="mb-4">{currentStepComponent}</div>
      </div>
    </div>
  );
};

export default VerticalProgressSteps;
