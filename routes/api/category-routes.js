const router = require('express').Router();
const { Category, Product } = require('../../models');



// GET ALL CATEGORIES
// http://localhost:3001/api/categories
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    include:[
      Product
    ]
  }).then(returnCategories => res.json(returnCategories))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});




// GET CATEGORY BY ID
// http://localhost:3001/api/categories/<id>
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where:{
      id: req.params.id
    },
    include: [
      Product
    ]
  }).then(returnCategories => res.json(returnCategories))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});




//CREATE A NEW CATEGORY
// http://localhost:3001/api/categories
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(returnCategories => res.json(returnCategories))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});



// UPDATE CATEGORY BY ID
// http://localhost:3001/api/categories/<id>
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where:{
      id: req.params.id
    }
  }).then(returnCategories => res.json(returnCategories))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});



//DELETE CATEGORY BY ID
// http://localhost:3001/api/categories/<id>
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body,{
    where: {
      id: req.params.id
    }
  }).then(returnCategories => res.json(returnCategories))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

module.exports = router;
