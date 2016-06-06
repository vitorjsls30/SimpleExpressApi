const categories = require('express').Router();
const categoryModel = require('../../models/category');
const all = require('./all');
const single = require('./single');
const photos = require('./photos');
const texts = require('./texts');
const findObject = require('../../utils/findObject');


function hasModel(model) {
    return function (req, res, next) {
        if (model) {
            req['model'] = model;
            next();
        }
        else {
            res.status(404).send('model category undefined...');
        }
    }
}

//categories.param('categoryId', findObject('category'));

categories.use(function(req, res, next) {
    next();
});

categories.get('/', all);

categories.use('/:categoryId/texts', texts);

categories.use('/:categoryId/photos', photos);

categories.get('/:categoryId', hasModel(categoryModel), single);

categories.post('/', (req, res) => {
    var category = new Category();
    category.id = req.body.id;
    category.name = req.body.name;
    
    category.save(function(err) {
       if(err) {
           res.send(err);
       }
       
       res.json('Category Created!');
    }); 
});

module.exports = categories;