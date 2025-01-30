import React from "react";

export const Button = ({ children, onClick, isActive = true, className = "" }) => {
    return (
        <button
            onClick={isActive ? onClick : undefined}
            disabled={!isActive}
            className={`mt-4 w-full py-2 rounded-lg text-center font-semibold transition duration-200 
                ${isActive ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-50"} 
                ${className}`}
        >
            {children}
        </button>
    );
};