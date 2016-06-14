module.exports = (req, res) => {
    req.model.find((err, photos) => {
        if (err) {
            res.send(err);
        }
        else {
            res.status(200).json({ photos });
        }
    });
};