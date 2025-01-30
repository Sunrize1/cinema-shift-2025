import React, { Children } from "react";

export const FilmTitle = ({title, ageLimit, className }) => {
    const formatAgeLimit = (ageLimit) => {
        switch (ageLimit) {
            case "G":
                return "0+";
            case "PG":
                return "6+";
            case "PG13":
                return "13+";
            case "R":
                return "17+";
            case "NC17":
                return "18+";
        }
    };


    return (
        <h2 className={className}>{`${title}`+` ${formatAgeLimit(ageLimit)}`}</h2>
    );
}