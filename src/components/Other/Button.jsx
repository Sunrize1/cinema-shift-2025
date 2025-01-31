import React from "react";

export const Button = ({ children, onClick, isActive = true, isPrimary = true, className = "" }) => {
    return (
        <button
            onClick={isActive ? onClick : undefined}
            disabled={!isActive}
            className={`mt-4 w-full py-2 rounded-lg text-center font-semibold transition duration-200 
                ${isPrimary 
                    ? isActive 
                        ? "bg-purple-600 hover:bg-purple-700 text-white" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"
                    : isActive 
                        ? "bg-white text-black border border-gray-400 hover:bg-gray-100" 
                        : "bg-gray-100 text-gray-400 border border-gray-300 cursor-not-allowed opacity-50"} 
                ${className}`}
        >
            {children}
        </button>
    );
};
