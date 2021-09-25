import React, { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
const Chart = (props) => {
  return (
    <CanvasJSChart
      options={{
        data: [
          {
            type: "candlestick",
            dataPoints: props.chartData.map((chartData) => ({
              x: new Date(chartData.Date),
              y: [
                chartData.Open,
                chartData.High,
                chartData.Low,
                chartData.Close,
              ],
            })),
          },
        ],
      }}
    />
  );
};
export default Chart;
