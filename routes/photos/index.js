const photos = require('express').Router();
const photoModel = require('../../models/photo');
const all = require('./all');
const single = require('./single');
const hasModel = require('../../utils/modelVerifyer');

photos.use(function(req, res, next) {
    next();
});

photos.route('/')
    .get(hasModel(photoModel), all)

    .post((req, res) => {
        var photo = new photoModel();
        photo.id = req.body.id;
        photo.categoryId = req.body.categoryId;
        photo.name = req.body.name;

        photo.save((err) => {
            if (err) {
                res.send(err);
            }
            res.json('Photo saved sucessfully!');
        });
    })

    .delete((req, res) => {
        photoModel.remove((err) => {
            if(err) {
                res.send(err);
            }
            res.json('Photos removed sucessfully!');
        });
    });

photos.route('/:photoId')
    .get(hasModel(photoModel), single)

    .put((req, res) => {
        photoModel.find({id: req.params.photoId}, (err, photos) => {

            if(err) {
                res.send(err);
            }

            var photo = photos[0];
            photo.name = req.body.name;

            photo.save((err) => {
                if(err) {
                    res.send(err);
                }
                res.json('Photo Updated!');
            });
        });
    })

    .delete((req, res) => {
        photoModel.remove({ id: req.params.photoId }, (err, photos) => {
            if (err) {
                res.send(err);
            }
            res.json('Photo removed sucessfully!');
        });
    });

module.exports = photos;