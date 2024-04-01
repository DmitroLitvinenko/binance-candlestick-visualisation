import axios from "axios";

// const API_KEY =
//   "yt8wGX54C6DTiUQni4POmuP29uJgk7axy1EwsESqOFmbM9TNaZcIZJbmnBicEpuA";
// const SECRET_KEY =
//   "yjOWH0h0Sbbv12v7ScPK3pz5RkwL0ztfPLgChRCCmu3ivppRHEWUR9eh8nnLGmXd";

// const URL = "https://api.binance.com/api";

const fetchCandlestickData = async () => {
  try {
    const response = await axios.get("https://api.binance.com/api/v3/klines", {
      params: {
        symbol: "BTCUSDT",
        interval: "1d",
        limit: 2,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    return null;
  }
};

export default fetchCandlestickData;
