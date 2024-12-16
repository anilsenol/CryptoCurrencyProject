import React from "react";
import "../styles/Main.css";
import { FaSearch } from "react-icons/fa";
import CryptoList from "./CryptoList";

const MainPage = () => {
  return (
    <div>
      <div className="main">
        <input className="text-field" type="text" placeholder="Search Crypto" />
        <FaSearch className="search-btn" />
      </div>
      <CryptoList />
    </div>
  );
};

export default MainPage;
