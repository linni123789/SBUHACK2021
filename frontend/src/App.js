import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import "./tailwind.css";

function App() {
  var ticker;
  var start_date;
  var end_date;
  return (
    <div className="App">
      <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
      {/* <div> Ticker</div>
      <input id="ticker"></input>
      <div> Start_date</div>
      <input id="start_date"></input>
      <div> End_date </div>
      <input id="end_date" onClick></input>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Button
      </button> */}
    </div>
  );
}

export default App;
