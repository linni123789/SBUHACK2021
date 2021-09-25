import React, { useEffect, useState } from "react";
const Chart = (props) => {
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getDailyChartForSymbol("TSLA");
      setStockData(formatStockData());
    };
    fetchStockData();
  }, []);
  function formatStockData(stockData) {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;
    });
  }
  return <div>GRAPH</div>;
};
export default Chart;
