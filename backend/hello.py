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
    df = ticker.history(period="max")
    df['Date'] = df.index
    df['Date'] = df['Date'].dt.strftime('%Y-%m-%d')
    return df.to_json(orient='records')


@app.route('/api/sma', methods=['POST'])
def get_sma():
    #curl -d '{"ticker":"AMD"}' -H "Content-Type: application/json" -X POST http://localhost:5000/api/sma
    request_data = request.json
    ticker = yf.Ticker(request_data['ticker'])
    df = ticker.history(period="max")
    df['Date'] = df.index
    df['Date'] = df['Date'].dt.strftime('%Y-%m-%d')

    df = df["Close"]
    pd.set_option("display.max_rows", None, "display.max_columns", None)

    df = df.rolling(window=5).mean().dropna()

    return df.to_json(orient="table")


if __name__ == "__main__":
    print("okay")
    app.run(debug=True)