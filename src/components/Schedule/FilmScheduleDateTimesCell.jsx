import React from "react";

export const FilmScheduleDateTimesCell = ({ time, isActive = false, onClick }) => {


    return (
        <div
        onClick={onClick}
        className={`rounded-2xl  border-1 border-gray-300 p-1 w-16 h-10
             flex justify-center items-center cursor-pointer
             ${isActive ? "bg-gray-500 text-white" : "bg-white"}`}
    >
        <p>{time}</p>
    </div>
    )
}