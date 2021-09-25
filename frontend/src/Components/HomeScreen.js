import React, { useState } from "react";
import InfoScreen from "./InfoScreen";
import GraphScreen from "./GraphScreen";
const Homescreen = (props) => {
  const [Graph, setGraph] = useState(false);
  const [Stock, setStock] = useState("");
  const [Start_Date, setStart_Date] = useState("");
  const [End_Date, setEnd_Date] = useState("");
  const saveData = (ticker, start_date, end_date) => {
    setStock(ticker);
    setStart_Date(start_date);
    setEnd_Date(end_date);
    setGraph(true);
  };
  const returnToInfo = () => {
    setGraph(false);
  };
  return !Graph ? (
    <InfoScreen saveDataCallBack={saveData} />
  ) : (
    <GraphScreen
      returnToInfoCallBack={returnToInfo}
      stock={Stock}
      start_date={Start_Date}
      end_date={End_Date}
    />
  );
};
export default Homescreen;
