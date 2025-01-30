import React from "react";
import { useNavigate } from "react-router-dom";

export const BackArrow = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <div className="flex gap-4 items-center transition delay-300 hover:-translate-y-1 cursor-pointer hover:animate-pulse hover:scale-100" onClick={handleClick}>
            <svg  width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.3632 10.409C6.66095 10.7052 6.66156 11.1869 6.36456 11.484C6.06808 11.7804 5.58739 11.7804 5.29092 11.484L0.533369 6.7264C0.143421 6.33646 0.142761 5.70443 0.531894 5.31367L5.2658 0.559955C5.56216 0.262355 6.04382 0.261852 6.3408 0.558834C6.63734 0.855377 6.63734 1.33617 6.3408 1.63271L1.95274 6.02077L6.3632 10.409Z" fill="#97A1AF"/>
            </svg>
            <p className="text-gray-600">Назад</p>
        </div>
    )
}
