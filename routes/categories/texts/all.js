const data = require('../../../data.json');

module.exports = (req, res) => {
    const texts = data.texts;
    const categoryId = req.params.categoryId * 1;
    const categorizedTexts = texts.filter(t => t.categoryId === categoryId);

    res.status(200).json({categorizedTexts});
};