const data = require('../../../data.json');

module.exports = (req, res) => {
    const photos = data.photos;
    const categoryId = req.params.categoryId * 1;
    const categorizedPhotos = photos.filter(p => p.categoryId === categoryId);

    res.status(200).json({categorizedPhotos});
};