const texts = require('express').Router();
const textModel = require('../../models/text');
const all = require('./all');
const single = require('./single');
const hasModel = require('../../utils/modelVerifyer');

texts.use(function (req, res, next) {
    next();
});

texts.route('/')
    .get(hasModel(textModel), all)

    .post((req, res) => {
        var text = new textModel();
        text.id = req.body.id;
        text.categoryId = req.body.categoryId;
        text.text = req.body.text;

        text.save((err) => {
            if(err) {
                res.send(err);
            }
            res.json('Text Created!!');
        });
    })

    .delete((req, res) => {
        textModel.remove((err, texts) => {
            if(err) {
                res.send(err);
            }
            res.json('Texts removed sucessfully!');
        });
    });

texts.route('/:textId')
    .get(hasModel(textModel), single)

    .put((req, res) => {
        textModel.find({id: req.params.textId}, (err, texts) => {

            if(err) {
                res.send(err);
            }

            var text = texts[0];
            text.categoryId = req.body.categoryId;
            text.text = req.body.text;

            text.save((err) => {
                if(err) {
                    res.send(err);
                }
                res.json('Text Updated!');
            });
        });
    })

    .delete((req, res) => {
        textModel.remove({id: req.params.textId}, (err, texts) => {
            if(err) {
                res.send(err);
            }
            res.json('Text Deleted!');
        });
    });

module.exports = texts;