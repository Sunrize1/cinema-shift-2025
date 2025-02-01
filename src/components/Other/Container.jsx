import React from "react";

export const Container = ({ children }) => {
    return <div className="max-w-screen-lg mx-auto flex flex-col gap-6 mb-5">{children}</div>;
}