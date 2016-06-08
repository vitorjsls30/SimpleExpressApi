const categories = require('express').Router();
const categoryModel = require('../../models/category');
const all = require('./all');
const single = require('./single');
const photos = require('./photos');
const texts = require('./texts');
const findObject = require('../../utils/findObject');
const hasModel = require('../../utils/modelVerifyer');

categories.use(function (req, res, next) {
    next();
});

categories.route('/')
    .get(hasModel(categoryModel), all)

    .post((req, res) => {
        var category = new categoryModel();
        category.id = req.body.id;
        category.name = req.body.name;

        category.save(function (err) {
            if (err) {
                res.send(err);
            }

            res.json('Category Created!');
        });
    });

categories.use('/:categoryId/texts', texts);

categories.use('/:categoryId/photos', photos);

categories.route('/:categoryId')
    .get(hasModel(categoryModel), single)

    .put((req, res) => {
        categoryModel.find({ id: req.params.categoryId }, (err, categories) => {
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
    })

    .delete((req, res) => {
        categoryModel.remove({ id: req.params.categoryId }, (err, categories) => {
            if (err) {
                res.send(err);
            }

            res.send('Category removed!');
        });
    });

module.exports = categories;