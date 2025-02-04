import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


import { resetPaymentData } from "../../utils/redux/payForTickets copy/slice";
import { setActiveTime } from '../../utils/redux/FilmSchedules/slice';
import { getActiveSeances, getActiveTime } from '../../utils/redux/FilmSchedules/seleсtor';
import { FilmScheduleDateTimesCell } from "./FilmScheduleDateTimesCell";
import { ROUTES } from "../../utils/constants/router";
import { Button } from '../Other/Button';

export const FilmScheduleDateTimes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filmId } = useParams();
  const activeSeances = useSelector(getActiveSeances);
  const activeTime = useSelector(getActiveTime);

  const handleDateTimeClick = (time) => {
    dispatch(resetPaymentData());
    dispatch(setActiveTime(time));
  };

  const handleButtonClick = () => {
    navigate(ROUTES.TICKET_PAYMENT.replace(':filmId', filmId));
  };

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

  return (
    <div className="w-xs">
      {activeSeances.map((hall) => (
        <div className="flex flex-col gap-3" key={hall.hallName}>
          <h3 className="mx-1 text-gray-600">{translateHallName(hall.hallName)}</h3>
          <div className="flex flex-row gap-1">
            {hall.times.map((time) => (
              <FilmScheduleDateTimesCell
                key={time.time}
                time={time.time}
                isActive={time.id === activeTime?.id}
                onClick={() => handleDateTimeClick(time)}
              />
            ))}
          </div>
        </div>
      ))}
      <Button isActive={activeTime?.id} onClick={handleButtonClick}>Продолжить</Button>
    </div>
  );
};