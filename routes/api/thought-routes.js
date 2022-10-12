const router = require('express').Router();

const {
    createThought, deleteThought, getAllThought, getThoughtById, updateTought,

} = require('../../controllers/thought-controller');


router
.route('/')
.get(getAllThought)
.post(createThought)

router
.route('/:id')
.get(getThoughtById)
.put(updateTought)
.delete(deleteThought);

module.exports = router;