const data = require('../../data.json');

module.exports = (req, res) => {
    const photos = data.photos;
    
    res.status(200).json({photos});
};