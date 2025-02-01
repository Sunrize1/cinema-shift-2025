import React, { useState } from "react";
import { TicketPlacePopUp } from "./TicketPlacePopUp";

export const TicketPlaceButton = ({ price, colIndex, rowIndex, onClick, isSelected = false, isActive = true }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative">
            { isSelected 
                ? <button onClick={onClick}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          className="w-7 h-7 bg-purple-800 rounded-md cursor-pointer scale-125 text-center text-xs text-white">{colIndex+1}</button> 
                : <button disabled={!isActive}
                          onClick={onClick}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)} 
                          className={`w-7 h-7 rounded-sm 
                    ${isActive 
                    ? "bg-purple-800  cursor-pointer hover:scale-125 duration-300 ease-in" 
                    : "bg-gray-300  cursor-not-allowed"}`}></button>}
            
            <TicketPlacePopUp price={price} isVisible={isHovered} rowIndex={rowIndex} colIndex={colIndex} />
        </div>
    );
};