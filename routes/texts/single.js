const data = require('../../data.json');

module.exports = (req, res) => {
    const text = req.text;

    res.status(200).json({text});
};