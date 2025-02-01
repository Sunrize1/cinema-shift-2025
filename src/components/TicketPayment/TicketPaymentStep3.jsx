import React from "react";
import { useForm, useWatch } from "react-hook-form";

import { Input } from "../Other/Input";
import { Button } from "../Other/Button";

export const TicketPaymentStep3 = ({ handleBackButtonClick, onSubmit }) => {
    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const validateCardNumber = (value) => {
        const cleaned = value.replace(/\s/g, '');
        if (!/^\d{8}$/.test(cleaned)) {
            return "Номер карты должен состоять из 8 цифр";
        }
        return true;
    };

    const validateExpireDate = (value) => {
        if (!/^\d{2}\/\d{2}$/.test(value)) {
            return "Неверный формат срока действия";
        }

        return true;
    };

    const validateCVV = (value) => {
        if (!/^\d{4}$/.test(value)) {
            return "CVV должен состоять из 4 цифр";
        }
        return true;
    };

    const formatCardNumber = (value) => {
        const cleaned = value.replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
        return formatted;
    };

    const formatExpireDate = (value) => {
        const cleaned = value.replace(/\D/g, '');
        const formatted = cleaned.replace(/(\d{2})(\d{0,2})/, '$1/$2');
        return formatted;
    };

    const handleCardNumberChange = (e) => {
        const input = e.target;
        const formattedValue = formatCardNumber(input.value);
        input.value = formattedValue.slice(0, 9);
    };

    const handleExpireDateChange = (e) => {
        const input = e.target;
        const formattedValue = formatExpireDate(input.value);
        input.value = formattedValue.slice(0, 5);
    };

    const handleCVVChange = (e) => {
        const input = e.target;
        const cleaned = input.value.replace(/\D/g, '');
        input.value = cleaned.slice(0, 4);
    };

    return (
        <form className="flex flex-col gap-4 w-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 p-5 bg-gray-200 rounded-2xl">
                <Input
                    type="text" 
                    placeholder="0000 0000"
                    label="Номер*"
                    isRequired={true}
                    errorMessage={errors.pan?.message}
                    {...register("pan", {
                        required: "Поле является обязательным",
                        validate: validateCardNumber
                    })}
                    onChange={handleCardNumberChange} 
                />
                <div className="flex flex-row gap-4">
                    <Input
                        type="text" 
                        placeholder="MM/YY"
                        label="Срок*"
                        isRequired={true}
                        errorMessage={errors.expireDate?.message}
                        {...register("expireDate", {
                            required: "Поле является обязательным",
                            validate: validateExpireDate
                        })}
                        onChange={handleExpireDateChange} 
                    />
                    <Input
                        type="password"
                        placeholder="0000"
                        label="CVV*"
                        isRequired={true}
                        errorMessage={errors.cvv?.message}
                        {...register("cvv", {
                            required: "Поле является обязательным",
                            validate: validateCVV
                        })}
                        onChange={handleCVVChange} 
                    />
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <Button isPrimary={false} onClick={handleBackButtonClick}>Назад</Button>
                <Button type="submit">Оплатить</Button>
            </div>
        </form>
    );
};