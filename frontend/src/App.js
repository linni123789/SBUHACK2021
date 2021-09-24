import logo from './logo.svg';
import './App.css';

function App() {
  var ticker;
  var start_date;
  var end_date;
  return (
    <div className="App">
      <div> Ticker</div>
      <input id = "ticker">
      </input>
      <div> Start_date</div>
      <input id = "start_date">
      </input>
      <div> End_date </div>
      <input id = "end_date" onClick>
      </input>
      <img id="Img" src="../buy.jpg" />
    </div>
  );
}

export default App;
