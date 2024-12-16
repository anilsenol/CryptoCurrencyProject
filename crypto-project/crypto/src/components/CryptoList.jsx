import React from "react";
import "../styles/CryptoList.css";
import CoinService from "../services/CoinService";

// API KEY: CG-N1CSTcHYspquXgEQxzKJBwnz

const CryptoList = () => {
  return (
    <div>
      <div className="container">
        <div className="table-row">
          <h4> Coins</h4>
          <h4>Price</h4>
          <h4>Last 24H Change</h4>
          <h4>Market Cap</h4>
        </div>
      </div>
      <div className="container">
        <div className="table-coin">
          <h4> Coins</h4>
          <h4>Price</h4>
          <h4>Last 24H Change</h4>
          <h4>Market Cap</h4>
        </div>
      </div>
    </div>
  );
};

export default CryptoList;
