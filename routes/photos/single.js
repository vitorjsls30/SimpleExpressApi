const data = require('../../data.json');

module.exports = (req, res) => {
    const photo = req.photo;

    res.status(200).json({photo});
};