import { symbol } from "prop-types";
import React, { useState, useEffect } from "react";
import {
  WNavItem,
  WInput,
  WModal,
  WMHeader,
  WMFooter,
  WButton,
} from "wt-frontend";

const InfoScreen = (props) => {
  const saveData = () => {
    var ticker = document.getElementById("ticker");
    var start_date = document.getElementById("start_date");
    var shares = document.getElementById("share");
    props.saveDataCallBack(ticker.value, start_date.value, shares.value);
  };

  useEffect(() => {
    let timer,
      timeoutVal = 0;
    const input = document.getElementById("ticker");
    //console.log(input);
    input.addEventListener("keyup", handleKeyUp);
    function handleKeyUp(e) {
      if (e.target.value.length > 0) {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          const tickerInput = document.getElementById("ticker");
          const currentSearch = e.target.value;
          fetch(
            `https://ticker-2e1ica8b9.now.sh/keyword/${currentSearch}`
          ).then((response) => {
            response
              .json()
              .then((data) => {
                //console.log(data);
                let dl = document.createElement("datalist");
                dl.id = "tickers";

                data.forEach((d) => {
                  const tickerSymbol = d["symbol"];
                  const tickerName = d["name"];
                  //console.log(tickerSymbol + "\t" + tickerName);
                  let option = document.createElement("option");
                  option.value = tickerSymbol;
                  option.label = tickerName;
                  dl.appendChild(option);
                });

                tickerInput.innerHTML = "";
                tickerInput.appendChild(dl);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }, timeoutVal);
      }
    }
  });

  const [isVisible, setVisible] = useState(false);

  <WButton onClick={() => setVisible(true)} color="primary">
    Show
  </WButton>;
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/1219598.jpg")`,
      }}
    >
      <div className="title">Stock Simulation</div>
      <div className="w-full max-w-xs">
        {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Ticker
          </label>
          <input
            list="tickers"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ticker"
            type="text"
            placeholder="Enter Ticker"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-white  text-sm font-bold mb-2">
            Start_Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start_date"
            type="date"
            placeholder="Enter Ticker"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-white  text-sm font-bold mb-2">
            Shares
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="share"
            type="text"
            placeholder="Enter Amount Of Shares"
          ></input>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full buy"
          onClick={saveData}
        >
          BUY
        </button>
      </div>
      <WModal className="modal" visible={isVisible}>
        <WMHeader>Start Date is after End Date</WMHeader>
        <WMFooter>
          <WButton
            className="hover:bg-blue-200"
            onClick={() => setVisible(false)}
          >
            Close
          </WButton>
        </WMFooter>
      </WModal>
    </div>
  );
};
export default InfoScreen;
