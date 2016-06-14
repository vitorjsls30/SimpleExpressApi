module.exports = (req, res) => {
    req.model.find({ id: req.params.categoryId }, (err, category) => {
        if (err) {
            res.json(err);
        }
        else {
            res.status(200).json({ category });
        }
    });
};