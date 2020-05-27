const express = require('express');
const connectDB = require('./dbconnect/db');


const app = express();

connectDB();
app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
