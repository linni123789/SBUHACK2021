const API = (props) => {
    fetchStock = () =>{
        const KEY = "6TWJBADNR5BDHC8I"
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=15min&slice=year1month1&apikey=${KEY}`
        fetch(API_Call)
            .then(response => response.json())
            .then(message => console.log(message))
    }
}
export default API;
