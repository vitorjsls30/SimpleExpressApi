const data = require('../../data.json');

module.exports = (req, res) => {
    const textId = req.params.textId * 1;
    const text = data.texts.find(t => t.id === textId);

    res.status(200).json({text});
};