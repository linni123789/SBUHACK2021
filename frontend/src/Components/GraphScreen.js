import React, { useEffect, useState } from "react";
import Chart from "./Chart.js";
import Header from "./Header.js";
const GraphScreen = (props) => {
  // console.log("money"+props.money)
  // console.log("share"+props.share)

  const handleBuy = () => {
    if (document.getElementById("buy").value != ""){
      var amount = parseFloat(document.getElementById("buy").value);
      var last = props.chartDatas[props.chartDatas.length-1]
      var price = (last["High"] + last["Low"]) /2
      props.buy(amount, price, last)
    }
    else{
      alert("NO AMOUNT ENTERED");
    }
  }

  const handleSell = () => {
    if (document.getElementById("sell").value != ""){
      var amount = parseFloat(document.getElementById("sell").value);
      var last = props.chartDatas[props.chartDatas.length-1]
      var price = (last["High"] + last["Low"]) /2
      props.sell(amount, price, last)
    }
    else{
      alert("NO AMOUNT ENTERED");
    }
  }

  const handleSkip= () =>{
    var last = props.chartDatas[props.chartDatas.length-1]
    props.skip(last)
  }

  return (
    <div      className="background"
    style={{
      backgroundImage: `url("https://wallpaperaccess.com/full/1219598.jpg")`,
    }}>
      <Header 
        stock={props.stock}
        start_date={props.start_date}
        share={props.share}
        money={props.money}
        last={props.last}
        begin={props.begin}
        fetchStockData={props.fetchStockData}
        chartDatas={props.chartDatas}
        stockDatas={props.stockDatas}
      />
      <Chart
        stock={props.stock}
        start_date={props.start_date}
        share={props.share}
        fetchStockData={props.fetchStockData}
        chartDatas={props.chartDatas}
        stockDatas={props.stockDatas}
      />
      <div className="w-full max-w-md">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="buy"
            type="text"
            placeholder="Enter Amount to Buy"
          ></input>
          <button
            onClick={handleBuy}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full "
          >
            BUY
          </button>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sell"
            type="text"
            placeholder="Enter Amount to Sell"
          ></input>
          <button
            onClick={handleSell}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full "
          >
            SELL
          </button>
        </div>
        <button
          onClick={handleSkip}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
        >
          SKIP
        </button>
      </div>
    </div>
  );
};
export default GraphScreen;
