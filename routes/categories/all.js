const data = require('../../data.json');

module.exports = (req, res) => {
    const categories = data.category;
    
    res.status(200).json({categories});
};