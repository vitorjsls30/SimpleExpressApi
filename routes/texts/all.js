module.exports = (req, res) => {
    req.model.find((err, texts) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json(texts);
        }
    });
};