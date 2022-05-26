require('dotenv').config();

const express = require('express')
const conectDB = require('./config/db')
const initialWebRouter = require('./routes/index')
const morgan = require('morgan')

const app = express();
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('combined'))

conectDB()
initialWebRouter(app)
let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server start: ' + port );
});