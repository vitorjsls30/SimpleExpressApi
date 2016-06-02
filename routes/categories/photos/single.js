const data = require('../../../data.json');

module.exports = (req, res) => {
    const photos = data.photos;
    const categoryId = req.params.categoryId * 1;
    const photoId = req.params.photoId * 1;
    const categorizedPhoto = photos.filter(p => p.categoryId === categoryId && p.id === photoId);

    res.status(200).json({categorizedPhoto});
};