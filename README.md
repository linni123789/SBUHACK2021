# SpaceApeSimulator

# Requirements To Run Locally

- Have Python
- Have Nodejs

# You have to open up both the backend and the front end for the project to work as intended.

## Backend

```ps1
cd backend/
pip install flask pandas yfinance
$env:FLASK_APP="hello"
$env:FLASK_ENV="development"
python -m flask run
```

## FrontEnd

```ps1
cd ../frontend
npm install
npm run
npm start
```

Visit [localhost:3000/](https://localhost:3000/)
