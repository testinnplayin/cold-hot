const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('common'));
app.use(express.static('build'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, err => {
	if (err) {
		return console.error('Internal server error');
	}

	console.log(`Server listening on port ${PORT}`);
})