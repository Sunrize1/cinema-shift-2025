import React from "react";

export const ProgressBar = ({ totalSteps = 3, currentStep = 1 }) => {

    const calculateProgress = (totalSteps, currentStep) => {
        return (currentStep / totalSteps) * 100;
      };

  return (
    <div className="flex flex-col gap-2" >
    <h2>{`Шаг ${currentStep} из ${totalSteps}`}</h2>
    <div className="w-md bg-gray-200 rounded-full">
      <div
        className="bg-green-500 h-1 rounded-full transition-all duration-300"
        style={{ width: `${calculateProgress(totalSteps, currentStep )}%` }}
      ></div>
    </div>
    </div>
  );
};


