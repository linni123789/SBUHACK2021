import React, { useEffect, useState } from "react";
const Chart = (props) => {
  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    const fetchStockData = async () => {
      fetch("/api/history", {
        method: "POST",
        body: JSON.stringify({
          ticker: props.stock,
          Start_Date: props.start_date,
          End_Date: props.end_date,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((message) => console.log(message));
    };
    fetchStockData();
  }, []);
  function formatStockData(stockData) {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;
      return {
        date,
        open: Number(priceData["1. open"]),
        high: Number(priceData["2. high"]),
        low: Number(priceData["3. low"]),
        close: Number(priceData["4. close"]),
      };
    });
  }
  return <div>GRAPH</div>;
};
export default Chart;
