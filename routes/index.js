const routes = require('express').Router();
const categories = require('./categories');
const photos = require('./photos');
const texts = require('./texts');

routes.get('/', (req, res) => {
    res.status(200).json({message : 'Connected!'});
});

routes.use('/categories', categories);
routes.use('/photos', photos);
routes.use('/texts', texts);

module.exports = routes;