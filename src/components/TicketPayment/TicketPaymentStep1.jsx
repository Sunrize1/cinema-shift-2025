import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

import { TicketPlaceButton } from "./TicketPlaceButton";
import { Button } from "../Other/Button";


export const TicketPaymentStep1 = ({ places, hallName, date, time, onSubmitTickets }) => {
    const navigate = useNavigate();
    const [selectedTickets, setSelectedTickets] = useState([]);
    const [sum, setSum] = useState(0);
    const newDate = parse(date, "dd.MM.yy", new Date());

    const ticketSelect = (row, col, ticketPrice) => {
        setSelectedTickets((prev) => {
          
          const exists = prev.some(ticket => ticket.row === row && ticket.column === col);
      
          
          setSum((prevSum) => exists ? prevSum - ticketPrice : prevSum + ticketPrice);
      
          return exists
            ? prev.filter(ticket => ticket.row !== row || ticket.column !== col)
            : [...prev, { row, column: col }]; 
        });
      };

    const translateHallName = (hallName) => {
        switch (hallName) {
            case "Red":
                return "Красный";
            case "Blue":
                return "Синий";
            case "Green":
                return "Зеленый";
            default:
                return hallName;
        }
    };

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    

    return (
        <div className="flex flex-col gap-5 w-md">
            <div className='flex flex-col gap-1 w-lg'>
                <p className='text-center text-gray-600'>Экран</p>
                <div className='w-lg bg-gray-300 h-5 rounded-2xl'></div>
            </div>
            <p className="text-gray-600">Ряд</p>
            {places.map((place, rowIndex) => (
                <div key={rowIndex} className="flex flex-row justify-between">
                    <p>{rowIndex + 1}</p>
                    {place.map((col, colIndex) => {
                        const isSelected = selectedTickets.some(ticket => ticket.row === rowIndex && ticket.column === colIndex);
                        return (
                            <TicketPlaceButton 
                                key={colIndex}
                                price={col.price}
                                rowIndex={rowIndex}
                                colIndex={colIndex} 
                                isActive={col.type !== 'BLOCKED'}
                                isSelected={isSelected}
                                onClick={() => ticketSelect(rowIndex, colIndex, col.price)}
                            />
                        );
                    })}
                </div>
            ))}

            <div>
                <span className="text-gray-600">Зал</span>
                <p className="text-lg">{translateHallName(hallName)}</p>
            </div>
            <div>
                <span className="text-gray-600">Дата и время</span>
                <p className="text-lg">{`${format(newDate, "d MMMM", { locale: ru })} ${time}`}</p>
            </div>
            <div>
                <span className="text-gray-600">Места</span>
                {selectedTickets.map((ticket, index) => (
                <p key={index} className="text-lg">{`${ticket.row + 1} ряд ${ticket.column + 1} место`}</p>
            ))}
            </div>
            <h2 className='text-2xl font-bold'>{`Сумма: ${sum} ₽`}</h2>
            <div className='flex flex-row gap-5'>
                <Button isPrimary={false} onClick={handleBackButtonClick}>Назад</Button>
                <Button isActive={selectedTickets.length > 0} onClick={() => onSubmitTickets(selectedTickets)}>Купить</Button>
            </div>
        </div>
    );
};
