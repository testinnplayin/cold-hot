const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const {DATABASE_URL, PORT} = require('./config');
const {Guess} = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('common'));
app.use(express.static('build'));

mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

let server;

function runServer(databaseUrl= DATABASE_URL, port=PORT) {
	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, function(err) {
			if (err) {
				return reject(err);
			}

			app.listen(port, function() {
				console.log(`Your app is listening on port ${port}`);
				resolve();
			})
			.on('error', function(err) {
				mongoose.disconnect();
				reject(err);
			});
		});
	});
}

function closeServer() {
	return mongoose.disconnect()
		.then(() => {
			return new Promise(function(resolve, reject) {
				console.log('Closing server');
				server.close(function(err) {
					if (err) {
						return reject(err);
					}

					resolve();
				});
			});
		});
}

if (require.main === module) {
	runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};