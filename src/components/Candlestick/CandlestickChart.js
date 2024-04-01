import React, { useEffect } from "react";
import fetchCandlestickData from "../../api/api";

const CandlestickChart = () => {
  useEffect(() => {
    fetchCandlestickData();
  }, []);

  return (
    <div>
      <h2>График свечей BTCUSDT</h2>
    </div>
  );
};

export default CandlestickChart;
