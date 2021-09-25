import React, { useEffect, useState } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";
const Chart = (props) => {
  return (
    <CanvasJSChart
      options={{
        axisY: {
          // Minimum value is 10% less than the lowest price in the dataset
          minimum: Math.min(...props.stockDatas.map((data) => data.Low)) / 1.1,
          // Minimum value is 10% more than the highest price in the dataset
          maximum: Math.max(...props.stockDatas.map((data) => data.High)) * 1.1,
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
          },
        },
        data: [
          {
            type: "candlestick",
            dataPoints: props.chartDatas.map((chartData) => ({
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
