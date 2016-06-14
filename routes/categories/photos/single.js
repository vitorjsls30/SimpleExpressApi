module.exports = (req, res) => {
    req.model.find({ id: req.params.photoId, categoryId: req.params.categoryId }, (err, photo) => {
        if (err) {
            res.json(err);
        }
        else {
            res.status(200).json({ photo });
        }
    });
};