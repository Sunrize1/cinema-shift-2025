import React from "react";

export const TicketPlacePopUp = ({ price, rowIndex, colIndex, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className="flex flex-col items-start w-30 absolute bottom-full left-1/2 transform 
        -translate-x-1/2 mb-2 bg-white text-black text-sm px-3 py-1 rounded-lg shadow-md border border-gray-300">
            <span className="font-bold">{`${price} ₽`}</span>
            <span>{`${rowIndex + 1} ряд, ${colIndex + 1} место`}</span>
        </div>
    );
};
