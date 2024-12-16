import React, { useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets";

function CoinService() {
  useEffect(() => {
    const getCoins = async () => {
      const response = await axios.get(BASE_URL, {
        params: {
          vs_currency: "usd",
        },
      });
      console.log(response.data);
    };

    getCoins();
  }, []);
}

export default CoinService;
