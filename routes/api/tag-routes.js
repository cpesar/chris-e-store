const router = require('express').Router();
// const { Model } = require('sequelize/types');
const { Tag, Product, ProductTag } = require('../../models');


// GET ROUTE (ALL PRODUCT TAGS)
// http://localhost:3001/api/tags
router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[
      {model: Product, through: ProductTag}
    ]
  }).then(returnTags => res.json(returnTags))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



// FIND TAG BY ID (GET ROUTE)
// http://localhost:3001/api/tags/<id>
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where:{
      id: req.params.id
    },
    include: [
      {model: Product, through: ProductTag}
    ]
  }).then(returnTags => res.json(returnTags))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



// CREATE TAG (POST ROUTE)
// http://localhost:3001/api/tags
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(returnTags => res.json(returnTags))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});




// UPDATE TAG BY ID (PUT ROUTE)
// http://localhost:3001/api/tags/<id>
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where:{
      id: req.params.id
    }
  }).then(returnTags => res.json(returnTags))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



// DELETE TAG BY ID
// http://localhost:3001/api/tags/<id>
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(returnTags => res.json(returnTags))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});



module.exports = router;
