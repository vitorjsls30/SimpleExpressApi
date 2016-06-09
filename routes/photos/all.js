module.exports = (req, res) => {
    req.model.find((err, photos) => {
        if(err) {
            res.send(err);
        }
        res.status(200).json({photos});
    });
};