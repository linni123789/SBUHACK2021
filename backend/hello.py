# pip install flask
# $env:FLASK_APP = "hello"
# python -m flask run
from flask import Flask, request, jsonify, render_template, redirect
import csv

import requests

app = Flask(__name__)
KEY = "6TWJBADNR5BDHC8I"

@app.route('/', methods=['GET','POST'])
def hello_world():

    if request.method == "GET":
        return redirect("/home")
    request_data = request.json
    
    CSV_URL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=15min&slice=year1month1&apikey={KEY}"

    with requests.Session() as s:
        download = s.get(CSV_URL)
        decoded_content = download.content.decode('utf-8')
        cr = csv.reader(decoded_content.splitlines(), delimiter=',')
        my_list = list(cr)
        for row in my_list:
            print(row)
            
    # print(request_data['content'])

    # key = "6TWJBADNR5BDHC8I"
    return {'404': "404"}

@app.route('/home')
def home():
    return render_template("index.html")
if __name__ == "__main__":
    print("okay")
    app.run(debug=True)