import React from "react";
import { Header } from "../../components/Header/header";
import { Main } from "../../components/Main/main";

export const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col gap-5">
      <Header />
      <Main />
    </div>
  );
};

