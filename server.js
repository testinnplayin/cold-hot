const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const {DATABASE_URL, PORT} = require('./config');

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('common'));
app.use(express.static('build'));

mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, err => {
	if (err) {
		return console.error('Internal server error');
	}

	console.log(`Server listening on port ${PORT}`);
})