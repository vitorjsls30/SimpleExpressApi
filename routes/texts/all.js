const data = require('../../data.json');

module.exports = (req, res) => {
    const texts = data.texts;

    res.status(200).json({texts});
};