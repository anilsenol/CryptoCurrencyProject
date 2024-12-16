import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import CoinService from "./services/CoinService";

function App() {
  return (
    <div>
      <div>
        <Header />
        <CoinService />
        <MainPage />
      </div>
    </div>
  );
}

export default App;
