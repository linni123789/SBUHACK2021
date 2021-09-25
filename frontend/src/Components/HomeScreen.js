import React, { useState } from "react";
import InfoScreen from "./InfoScreen";
import GraphScreen from "./GraphScreen";
import EndScreen from "./EndScreen";
const Homescreen = (props) => {
  const [Graph, setGraph] = useState(false);
  const [Stock, setStock] = useState("");
  const [Start_Date, setStart_Date] = useState("");
  const [Shares, setShare] = useState(0);
  const [stockDatas, setStockDatas] = useState([]);
  const [chartDatas, setChartDatas] = useState([]);
  const [End, setEnd] = useState(false);
  const [Info, setInfo] = useState(true);

  const restart = () => {
    setEnd(false);
    setGraph(false);
    setInfo(true);
  };
  const saveData = (ticker, start_date, shares) => {
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
        setShare(shares);
        setGraph(true);
        setInfo(false);
        setChartDatas([message[0]]);
        message.shift();
        setStockDatas(message);
      });
  };

  const skip = () => {
    if (stockDatas.length == 1) {
      setGraph(false);
      setInfo(false);
      setEnd(true);
    } else {
      var array = stockDatas;
      setChartDatas([...chartDatas, array[0]]);
      array.shift();
      setStockDatas(array);
    }
  };
  return (
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
  );
};
export default Homescreen;
