const data = require('../../data.json');

module.exports = (req, res) => {
    const photoId = req.params.photoId * 1;
    const photo = data.photos.find(p => p.id === photoId);
    
    res.status(200).json({photo});
};