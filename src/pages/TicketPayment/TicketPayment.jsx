import {React, useState, useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";


import { Header } from "../../components/Header/header";
import { Container } from "../../components/Other/Container";
import { ProgressBar } from "../../components/TicketPayment/ProgressBar";
import { TicketPaymentStep1 } from "../../components/TicketPayment/TicketPaymentStep1";

export const TicketPayment = () => {
    const location = useLocation();
    const activeTime = location.state?.activeTime;

    const [currentStep, setCurrentStep] = useState(1); 
    const totalSteps = 3; 

    const [payment, setPayment] = useState({
        filmId: useParams().filmId,
        person: {},
        debitCard: {},
        seance: {
            date: activeTime.date,
            time: activeTime.time,
        },
        tickets: [],
    });

    const ticketsSelect = (places) => {
        setPayment((prev) => ({
            ...prev,
            tickets: places, 
        }));
        setCurrentStep(2);
    };

    return (
        <Container>
        <Header/>
        <h1 className="text-3xl font-bold">Выбор места</h1>
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps}/>
        {currentStep === 1 ? <TicketPaymentStep1 places={activeTime.places} 
                            hallName={activeTime.hallName}
                            onSubmitTickets={ticketsSelect}
                            date={activeTime.date} 
                            time={activeTime.time} /> : null}
        </Container>
    );
}