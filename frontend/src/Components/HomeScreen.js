import React, { useState } from "react";
import InfoScreen from "./InfoScreen";
import GraphScreen from "./GraphScreen";
import EndScreen from "./EndScreen";
const Homescreen = (props) => {
  const [Graph, setGraph] = useState(false);
  const [Stock, setStock] = useState("");
  const [Start_Date, setStart_Date] = useState("");
  

  const [stockDatas, setStockDatas] = useState([]);
  const [chartDatas, setChartDatas] = useState([]);
  const [End, setEnd] = useState(false);
  const [Info, setInfo] = useState(true);

  const [money, setMoney] = useState(10000);
  const [share, setShare] = useState();

  
  const restart = () => {
    setEnd(false);
    setGraph(false);
    setInfo(true);
  };
  const saveData = (ticker, start_date, share) => {
    fetch("/api/history", {
      method: "POST",
      body: JSON.stringify({
        ticker: ticker,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((message) => {
        for (var i = 0; i < message.length; i++) {
          if (message[i].Date == start_date) {
            message.splice(0, i);
            break;
          }
        }
      setStock(ticker);
      setStart_Date(start_date);
      setShare(share);
      setGraph(true);
      setChartDatas([message[0]])
      message.shift();
      setStockDatas(message)
    });   
  };

  
  const returnToInfo = () => {
    setGraph(false);
  };

  const skip = () =>{
    var array = stockDatas
    setChartDatas([...chartDatas, array[0]])
    array.shift();
    setStockDatas(array);
  }

  const sell = (amount, price) =>{
    setMoney(money+(amount*price))
    var temp = Number(share) - Number(amount)
    setShare(temp)
    skip()
  }

  const buy = (amount, price) =>{
    setMoney(money-(amount*price))
    var temp = Number(amount) + Number(share)
    setShare(temp)
    skip()
  }

  return !Graph ? (
    <div>
      {Info && <InfoScreen saveDataCallBack={saveData} />}
      {Graph && (
        <GraphScreen
          stock={Stock}
          start_date={Start_Date}
          stockDatas={stockDatas}
          chartDatas={chartDatas}
          skip={skip}
        />
      )}
      {End && <EndScreen restart={restart} />}
    </div>
  ) : (
    <GraphScreen
      returnToInfoCallBack = {returnToInfo}
      stock = {Stock}
      start_date = {Start_Date}
      stockDatas = {stockDatas}
      chartDatas = {chartDatas}
      skip = {skip}
      sell = {sell}
      buy = {buy}
      money = {money}
      share = {share}
    />
  );
};
export default Homescreen;
