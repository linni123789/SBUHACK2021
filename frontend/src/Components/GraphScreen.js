import React, { useEffect } from "react";
import Chart from "./Chart.js";
const GraphScreen = (props) => {
  return (
    <div>
      {props.start_date + "  " + props.share + "  " + props.stock}
      <Chart
        stock={props.stock}
        start_date={props.start_date}
        share={props.share}
        fetchStockData={props.fetchStockData}
        chartDatas={props.chartDatas}
        stockDatas={props.stockDatas}
      />
      <button
        onClick={props.buy}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full "
      >
        BUY
      </button>
      <button
        onClick={props.sell}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full sell"
      >
        SELL
      </button>
      <button
        onClick={props.skip}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
      >
        SKIP
      </button>
    </div>
  );
};
export default GraphScreen;
