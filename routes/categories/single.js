module.exports = (req, res) => {
    const categoryId = req.params.categoryId * 1;
    const model = req.model;
    
    const category = model.find({id: categoryId}, (err, category) => {
        if (category.length == 0) {
            res.status(200).send('Category not found');
        }
        else {
            res.status(200).json({ category });
        }
           
    });
};