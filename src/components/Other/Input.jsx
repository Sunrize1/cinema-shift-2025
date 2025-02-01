import React from "react";

export const Input = ({ 
    type, 
    placeholder, 
    isRequired = false, 
    label, 
    errorMessage,
    ...props 
}) => {
    return (
        <label className="flex flex-col gap-1">
            {label}
            <input
                type={type}
                required={isRequired}
                placeholder={placeholder}
                {...props} 
                className={`w-full px-3 py-2 bg-white border-2 ${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-purple-500`}
            />
            
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        </label>
    );
};