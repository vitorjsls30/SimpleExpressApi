module.exports = (req, res) => {
    req.model.find({ id: req.params.textId, categoryId: req.params.categoryId }, (err, text) => {
        if (err) {
            res.json(err);
        }
        else {
            res.status(200).json({ text });
        }
    });
};