const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/router');
// Vegeta... its OVER 9000!
const port = 9001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`ERROR: ${error}`);

    console.log('The server is up and running... Awaiting connection');
});

module.exports = server; // Export the app for testing