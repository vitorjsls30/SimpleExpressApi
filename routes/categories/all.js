module.exports = (req, res) => {
    req.model.find((err, categories) => {
        if (err) {
            res.send(err);
        }
        res.status(200).json({ categories })
    });
};