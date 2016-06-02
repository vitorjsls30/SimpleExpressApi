const routes = require('express').Router();
const categories = require('./categories');
const photos = require('./photos');

routes.get('/', (req, res) => {
    res.status(200).json({message : 'Connected!'});
});

routes.use('/categories', categories);
routes.use('/photos', photos);

module.exports = routes;