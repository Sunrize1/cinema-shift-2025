import {React, useEffect} from "react";
import { useForm, useWatch} from "react-hook-form";

import { Input } from "../Other/Input";
import { Button } from "../Other/Button";

export const TicketPaymentStep2 = ({onSubmit, handleBackButtonClick}) => {
    const { register, handleSubmit, formState: { errors }, setError, clearErrors, control } = useForm();

    const lastName = useWatch({ control, name: "lastname" });
    const firstName = useWatch({ control, name: "firstname" });
    const middleName = useWatch({ control, name: "middlename" });

    const validateSpecialSymbols = (value) => {
        const isCorrect = /^(?!.*--)[a-zA-Zа-яА-Я\- ]+$/.test(value); 

        if (!isCorrect) {
            return "некорректный формат";
        }
        return true;
    };
    

    const validateNameGroup = () => {
        const names = [lastName, firstName, middleName].filter(Boolean); 
        if (names.length === 0) return true; 

        const firstAlphabet = /^[а-яА-Я\s-]+$/.test(names[0]) ? "cyrillic" : "latin";

        for (const name of names) {
            const isCyrillic = /^[а-яА-Я\s-]+$/.test(name);
            const isLatin = /^[a-zA-Z\s-]+$/.test(name);

            if (firstAlphabet === "cyrillic" && !isCyrillic) {
                setError("nameGroup", { type: "manual", message: "Все поля ФИО должны использовать один алфавит (кириллица)" });
                return false
            }
            if (firstAlphabet === "latin" && !isLatin) {
                setError("nameGroup", { type: "manual", message: "Все поля ФИО должны использовать один алфавит (латиница)" });
                return false
            }
        }
        clearErrors("nameGroup");
        return true
    };

    useEffect(() => {
        validateNameGroup();
    }, [lastName, firstName, middleName]);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-md flex flex-col gap-5">
            <Input
                type="text"
                placeholder="Фамилия"
                label="Фамилия*"
                isRequired={true}
                errorMessage={errors.lastname?.message}
                {...register("lastname", {
                    required: "Поле является обязательным",
                    validate: validateSpecialSymbols
                })}
            />

            <Input
                type="text"
                placeholder="Имя"
                label="Имя*"
                isRequired={true}
                errorMessage={errors.firstname?.message}
                {...register("firstname", {
                    required: "Поле является обязательным",
                    validate: validateSpecialSymbols
                })}
            />

            <Input
                type="text"
                placeholder="Отчество"
                label="Отчество"
                errorMessage={errors.middlename?.message}
                {...register("middlename", {
                    validate: validateSpecialSymbols
                })}
            />

            {errors.nameGroup && (
                <p className="text-red-500 text-sm">{errors.nameGroup.message}</p>
            )}

            <Input
                type="tel"
                placeholder="Номер телефона"
                label="Номер телефона*"
                isRequired={true}
                errorMessage={errors.phone?.message}
                {...register("phone", {
                    required: "Поле является обязательным",
                    pattern: {
                        value: /^\+?[0-9]{10,15}$/,
                        message: "Номер телефона должен содержать от 10 до 15 цифр",
                    },
                })}
            />

            <Input
                type="email"
                placeholder="Email"
                label="Email"
                errorMessage={errors.email?.message}
                {...register("email", {
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Некорректный email",
                    },
                })}
            />

            <Input
                type="text"
                placeholder="Адрес"
                label="Адрес"
                errorMessage={errors.address?.message}
                {...register("address")}
            />

            <div className="flex flex-row gap-5">
                <Button isPrimary={false} onClick={handleBackButtonClick}>Назад</Button>
                <Button type="submit">Продолжить</Button>
            </div>
        </form>
    );
};