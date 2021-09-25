import React, { useState, useEffect } 	from 'react';

const {StringStream} = require("scramjet");
const request = require("request");

const HomeScreen = (props) => {
    useEffect(() => {
        fetchStock();
    });

    const fetchStock = async () =>{
        fetch('/', {
            method: 'POST',
            body: JSON.stringify({
                content:"1234"
            }),
            headers:{ 'Content-Type' : 'application/json'}
        }).then(response => response.json())
          .then(message => {
            console.log(message['404']);
        })
        // console.log("use")
        // const KEY = "6TWJBADNR5BDHC8I"
        // let api = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=15min&slice=year1month1&apikey=${KEY}`
        // request.get(api).then(() => console.log("success"));
            // .pipe(new StringStream())
            // .CSVParse()                                   // parse CSV output into row objects
            


        // const KEY = "6TWJBADNR5BDHC8I"
        // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=15min&slice=year1month1&apikey=${KEY}`
        // fetch(API_Call)
        //     .then(response => response.json())
        //     .then(message => console.log(message))
    }

    return(
        <div>
            Okay
        </div>
    )
}
export default HomeScreen;