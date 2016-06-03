const data = require('../../../data.json');

module.exports = (req, res) => {
    const texts = data.texts;
    const categoryId = req.params.categoryId * 1;
    const textId = req.params.textId * 1;
    const categorizedText = texts.filter(t => t.categoryId === categoryId && t.id === textId);
    
    res.status(200).json({ categorizedText });
};