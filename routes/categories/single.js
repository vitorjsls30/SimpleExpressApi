const data = require('../../data.json');

module.exports = (req, res) => {
    const categoryId = req.params.categoryId * 1;
    const category = data.categories.find(c => c.id === categoryId);
    
    res.status(200).json({category});
};