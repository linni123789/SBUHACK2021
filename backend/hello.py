# pip install flask
# $env:FLASK_APP = "hello"
# $env:FLASK_ENV="development" 
# python -m flask run
from flask import Flask, request, jsonify
import io
import requests
import pandas as pd

app = Flask(__name__)
KEY = "6TWJBADNR5BDHC8I"

@app.route('/', methods=['POST'])
def hello_world():
    request_data = request.json
    # print(request_data['content'])
    ticker = request.json['ticker']
    CSV_URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol={ticker}&interval=15min&slice=year1month1&apikey={KEY}"

    with requests.Session() as s:
        download = s.get(CSV_URL).content
        df = pd.read_csv(io.StringIO(download.decode('utf-8')))
        print(df)

    return df.to_json(orient = 'records')

if __name__ == "__main__":
    print("okay")
    app.run(debug=True)