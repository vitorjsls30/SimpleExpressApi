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

categories.use(function(req, res, next) {
    next();
});

categories.get('/', all);

categories.post('/', (req, res) => {
    var category = new categoryModel();
    category.id = req.body.id;
    category.name = req.body.name;
    
    category.save(function(err) {
       if(err) {
           res.send(err);
       }
       
       res.json('Category Created!');
    }); 
});

categories.use('/:categoryId/texts', texts);

categories.use('/:categoryId/photos', photos);

categories.get('/:categoryId', hasModel(categoryModel), single)
    .put('/:categoryId', (req, res) => {
        var categoryId = req.params.categoryId * 1;
        categoryModel.find({ id: categoryId }, (err, categories) => {
            if (err) {
                res.send(err);
            }

            var category = categories[0];
            category.name = req.body.name;

            category.save(function (err) {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Category updated!' });
            });
        });
    });




module.exports = categories;