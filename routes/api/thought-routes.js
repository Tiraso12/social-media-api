const router = require('express').Router();

const {
    createThought, deleteThought, getAllThought,

} = require('../../controllers/thought-controller');


router
.route('/')
.get(getAllThought)
.post(createThought)

router
.route('/:id')
.delete(deleteThought);

module.exports = router;