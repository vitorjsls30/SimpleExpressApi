const routes = require('express').Router();
const categories = require('./categories');

routes.get('/', (req, res) => {
    res.status(200).json({message : 'Connected!'});
});

routes.use('/categories', categories);

module.exports = routes;