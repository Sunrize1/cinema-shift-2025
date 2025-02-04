import React from "react";
import { useDispatch, useSelector,  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';


import { resetPaymentData } from "../../utils/redux/payForTickets copy/slice";
import { ROUTES } from "../../utils/constants/router";
import { Button } from "../Other/Button";

export const TicketPaymentResult = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { order } = useSelector((state) => state.payment);

    if (!order) {
        return <div className="flex justify-center items-center h-screen">Загрузка</div>;
    }

    const newDate = parse(order.tickets[0].seance.date, "dd.MM.yy", new Date());

    const handleBackButtonClick = () => {
        dispatch(resetPaymentData())
        navigate(ROUTES.MAIN_ROOT);
    }


    return (
        <div className="flex flex-col gap-5 w-lg">
            <div className="flex flex-row gap-10 items-center">
                <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56 28.1421C56 43.6061 43.464 56.1421 28 56.1421C12.536 56.1421 0 43.6061 0 28.1421C0 12.6781 12.536 0.14209 28 0.14209C43.464 0.14209 56 12.6781 56 28.1421Z" fill="url(#paint0_linear_16076_3943)"/>
                <path d="M40.1381 19.532C39.4904 19.0155 38.5466 19.1219 38.0301 19.7697L24.9464 36.1785C24.7604 36.4118 24.4128 36.4313 24.2019 36.2203L17.8649 29.8834C17.2791 29.2976 16.3294 29.2976 15.7436 29.8834C15.1578 30.4692 15.1578 31.4189 15.7436 32.0047L22.0806 38.3417C23.5572 39.8183 25.9901 39.6816 27.292 38.0488L40.3757 21.64C40.8922 20.9922 40.7858 20.0485 40.1381 19.532Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_16076_3943" x1="28" y1="56.1421" x2="28" y2="0.142088" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7DBA6E"/>
                <stop offset="0.9531" stop-color="#C6E99A"/>
                </linearGradient>
                </defs>
                </svg>
                <h1 className="text-3xl font-bold"> Оплата прошла успешно!</h1>
            </div>
            <div className="flex flex-col gap-4 w-4xl p-5 border-2 border-gray-300 rounded-3xl">
                <div>
                    <span className="text-gray-600">Номер билета</span>
                    <p className="text-lg">{order.orderNumber}</p>
                </div>
                <div>
                    <span className="text-gray-600">фильм</span>
                    <p className="text-lg">{order.filmName}</p>
                </div>
                <div>
                    <span className="text-gray-600">Дата и время</span>
                    <p className="text-lg">{`${format(newDate, "d MMMM", { locale: ru })} ${order.tickets[0].seance.time}`}</p>
                </div>
                <div>
                    <span className="text-gray-600">Ряды и Места</span>
                    {order.tickets.map((ticket, index) => (
                        <p key={index} className="text-lg">{`${ticket.row + 1} ряд ${ticket.column + 1} место`}</p>
                    ))}
                </div>
                
                <span className="text-gray-600">Вся информация была продублирована в SMS</span>
            </div>
            <div className="flex flex-row">
                <Button isPrimary={false} isActive={false}>Детали заказа</Button>
                <Button onClick={handleBackButtonClick}>На главную</Button>
            </div>
        </div>
    )
}