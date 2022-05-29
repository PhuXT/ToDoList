require('dotenv').config();

const express = require('express');
const app = express();
const conectDB = require('./config/db');
const initialWebRouter = require('./routes/index.routes');
const morgan = require('morgan');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('combined'));

conectDB();

initialWebRouter(app);
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server start on port: ' + port);
});
