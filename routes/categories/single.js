module.exports = (req, res) => {
    req.model.find({id: req.params.categoryId}, (err, category) => {
        if (category.length == 0) {
            res.status(200).send('Category not found');
        }
        else {
            res.status(200).json({ category });
        }
           
    });
};