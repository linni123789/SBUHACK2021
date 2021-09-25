import React from "react";

const InfoScreen = (props) => {
  const saveData = () => {
    var ticker =document.getElementById("ticker");
    var start_date = document.getElementById("start_date");
    var end_date = document.getElementById("end_date");
    // this.props.saveData(ticker,start_date,end_date);
  
  }
  return (
    <div class="background" style={{ 
      backgroundImage: `url("https://wallpaperaccess.com/full/1219598.jpg")`
    }}>
      <div class = "title">
        Stock Simulation
      </div>
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2">
            Ticker
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ticker"
            type="text"
            placeholder="Enter Ticker"
          ></input>
        </div>
        <div class="mb-4">
          <label class="block text-white  text-sm font-bold mb-2">
            Start_Date
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start_date"
            type="date"
            placeholder="Enter Ticker"
          ></input>
        </div>
        <div class="mb-4">
          <label class="block text-white  text-sm font-bold mb-2">
            End_Date
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="end_date"
            type="date"
            placeholder="Enter Ticker"
          ></input>
        </div>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full buy" onClick = {saveData}>
          BUY
        </button>
      </form>
    </div>
    </div>
  );
};
export default InfoScreen;
