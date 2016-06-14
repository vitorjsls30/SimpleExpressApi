module.exports = (req, res) => {
    req.model.find({ id: req.params.id }, (err, photo) => {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json({ photo });
        }
    });
};