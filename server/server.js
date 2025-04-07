const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// const config = require('./server.config')

// // Use cors middleware to allow requests from specific origins
const corsOptions = {
    origin: [''], // Replace with your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));


const port = 8040

app.listen(port, () => console.log(`Server running on port ${port}...`));


//middleware for client files


// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({
    extended: true
}));


app.use('/', express.static(path.join(__dirname, '../client/build')));

app.use('/api', require('./routes/api'));



app.use(express.static('public'));