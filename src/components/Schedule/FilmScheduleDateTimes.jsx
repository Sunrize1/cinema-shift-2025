import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FilmScheduleDateTimesCell } from "./FilmScheduleDateTimesCell";
import {ROUTES} from "../../utils/constants/router";
import {Button} from '../Other/Button';


export const FilmScheduleDateTimes = ({ seances, date}) => {
    const navigate = useNavigate();
    const { filmId } = useParams(); 
    const [activeSeances, setActiveSeances] = useState([]);
    const [activeTime, setActiveTime] = useState({id: null});

    useEffect(() => {
        
        if (seances && seances.length > 0) {
            const hallsMap = {};

            seances.forEach((item) => {
                const id = item.id;
                const hallName = item.hall.name;
                const time = item.time;
                const places = item.hall.places;

                if (!hallsMap[hallName]) {
                    hallsMap[hallName] = [];
                }

                hallsMap[hallName].push({
                    id: id,
                    date: date,
                    time: time,
                    hallName: hallName,
                    places: places,
                });
            });

            const hallsArray = Object.keys(hallsMap).map((hallName) => ({
                hallName: hallName,
                times: hallsMap[hallName],
            }));

            setActiveSeances(hallsArray);
        } else {
            setActiveSeances([]);
        }
    }, [seances]);

    const translateHallName = (hallName) => {
        switch (hallName) {
            case "Red":
                return "Красный зал";
            case "Blue":
                return "Синий зал";
            case "Green":
                return "Зеленый зал";
            default:
                return hallName;
        }
    };

    const handleDateTimeClick = (time) => {
        setActiveTime(time);
    };

    const handleButtonClick = () => {
        navigate(ROUTES.TICKET_PAYMENT.replace(':filmId', filmId),
            {state: { activeTime: activeTime}},
        );
    };
    

    return (
        <div>
            {activeSeances.map((hall) => (
                <div className="flex flex-col gap-3" key={hall.hallName}>
                    <h3 className="mx-1 text-gray-600">{translateHallName(hall.hallName)}</h3>
                    <div className="flex flex-row gap-1">
                        {hall.times.map((time) => (
                            <FilmScheduleDateTimesCell
                                key={time.time}
                                time={time.time}
                                isActive={time.id ===  activeTime.id}
                                onClick={() => handleDateTimeClick(time)}
                            />
                        ))}
                    </div>
                </div>
            ))}
            <Button isActive={activeTime.id} onClick={handleButtonClick}>Продолжить</Button>
        </div>
    );
};