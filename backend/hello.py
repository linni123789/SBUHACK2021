# pip install flask
# $env:FLASK_APP = "hello"
# $env:FLASK_ENV="development" 
# python -m flask run
from flask import Flask, request, jsonify
import io
import requests
import pandas as pd
import yfinance as yf
app = Flask(__name__)
KEY = "6TWJBADNR5BDHC8I"

@app.route('/api/history', methods=['POST'])
def get_history():
    request_data = request.json
    ticker = yf.Ticker(request_data['ticker'])
    hist = ticker.history(period="max")
    return hist.to_json(orient = 'records')


@app.route('/api/ticker', methods=['POST'])
def get_ticker():
    request_data = request.json
    ticker = yf.Ticker(request_data['ticker'])
    CSV_URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol={ticker}&interval=15min&slice=year1month1&apikey={KEY}"
    hist = ticker.history(period="max")
    return hist.to_json(orient = 'records')

if __name__ == "__main__":
    print("okay")
    app.run(debug=True)