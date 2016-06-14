module.exports = (req, res) => {
    req.model.find({ categoryId: req.params.categoryId }, (err, photos) => {
        if (err) {
            res.json(err);
        }
        else {
            res.status(200).json({ photos });
        }
    });
};