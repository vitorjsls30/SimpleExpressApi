//Bring in our dependencies
const app = require('express')();
const routes = require('./routes');
const server = require('./server');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Connect all our routes to aour application
app.use('/', routes);

//Turn on that server
app.listen(3000, () => {
    console.log('App listening on port 3000');
});