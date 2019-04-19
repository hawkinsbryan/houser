require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env
const controller = require('./controller');
// const treasureController = require('./controllers/treasureController');
// const authMiddleware = require('./middleware/authMiddleware');


const app = express()

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
});

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
    })
);

app.get('/api/houses', controller.getHouses);
app.post('/api/house', controller.putHouse);
app.delete('api/house/:id', controller.deleteHouse)



app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
