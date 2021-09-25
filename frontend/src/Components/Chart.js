import React, { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
const Chart = (props) => {
  return (
    <CanvasJSChart
      options={{
        data: [
          {
            type: "candlestick",
            dataPoints: props.stockData.map((stockData) => ({
              x: new Date(stockData.Date),
              y: [
                stockData.Open,
                stockData.High,
                stockData.Low,
                stockData.Close,
              ],
            })),
          },
        ],
      }}
    />
  );
};
export default Chart;
