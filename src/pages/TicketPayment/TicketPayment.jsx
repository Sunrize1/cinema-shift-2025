import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { updatePaymentData, setCurrentStep, resetPaymentData } from "../../utils/redux/payForTickets copy/slice";
import {ROUTES} from "../../utils/constants/router";
import { getActiveDate, getActiveTime } from '../../utils/redux/FilmSchedules/seleсtor';
import { submitPayment } from '../../utils/redux/payForTickets copy/thunks';
import { Header } from "../../components/Header/header";
import { Container } from "../../components/Other/Container";
import { ProgressBar } from "../../components/TicketPayment/ProgressBar";
import { TicketPaymentStep1 } from "../../components/TicketPayment/TicketPaymentStep1";
import { TicketPaymentStep2 } from "../../components/TicketPayment/TicketPaymentStep2";
import { TicketPaymentStep3 } from "../../components/TicketPayment/TicketPaymentStep3";
import { TicketPaymentResult } from "../../components/TicketPayment/TicketPaymentResult";

export const TicketPayment = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const activeDate = useSelector(getActiveDate);
    const activeTime = useSelector(getActiveTime);
    const { filmId } = useParams();

    const { currentStep, payment } = useSelector((state) => state.payment);

    useEffect(() => {
        if (!activeDate || !activeTime) {
            navigate(ROUTES.MAIN_ROOT); 
        }
    }, [activeDate, activeTime, navigate]);

    if (!activeDate || !activeTime) {
        return null; 
    }
    

    const seance = {
        date: activeDate.date,
        time: activeTime.time
    };

    useEffect(() => {
        dispatch(updatePaymentData({ filmId }));
        dispatch(updatePaymentData({ seance }));
    }, [dispatch, filmId]);

    const ticketsSelect = (places) => {
        dispatch(updatePaymentData({ tickets: places }));
        dispatch(setCurrentStep(2));
    };

    const personFormOnSubmit = (person) => {
        dispatch(updatePaymentData({ person }));
        dispatch(setCurrentStep(3));
    };

    const debitCardOnSubmit = (debitCard) => {
        dispatch(updatePaymentData({ debitCard }));
        dispatch(setCurrentStep(4));
        dispatch(submitPayment({ ...payment, debitCard }));
    };

    const handleBackButtonClick = () => {
        dispatch(setCurrentStep(currentStep - 1));
    };

    return (
        <Container>
            <Header />
            {currentStep === 1 && <h1 className="text-3xl font-bold">Выбор места</h1>}
            {currentStep === 2 && <h1 className="text-3xl font-bold">Введите ваши данные</h1>}
            {currentStep === 3 && <h1 className="text-3xl font-bold">Введите данные карты для оплаты</h1>}

            {currentStep < 3 && <ProgressBar currentStep={currentStep} totalSteps={3} />}
            
            {currentStep === 1 && (
                <TicketPaymentStep1
                    places={activeTime.places}
                    hallName={activeTime.hallName}
                    onSubmitTickets={ticketsSelect}
                    date={activeTime.date}
                    time={activeTime.time}
                />
            )}
            {currentStep === 2 && (
                <TicketPaymentStep2
                    onSubmit={personFormOnSubmit}
                    handleBackButtonClick={handleBackButtonClick}
                />
            )}
            {currentStep === 3 && (
                <TicketPaymentStep3
                    handleBackButtonClick={handleBackButtonClick}
                    onSubmit={debitCardOnSubmit}
                />
            )}
            {currentStep === 4 && (
                <TicketPaymentResult />
            )}
        </Container>
    );
};