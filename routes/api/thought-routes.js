const router = require('express').Router();

const {
    createThought, deleteThought, getAllThought, getThoughtById, updateTought, addReaction, deleteReaction,

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

router
.route('/:thoughtId/reactions')
.post(addReaction)
.delete(deleteReaction);

module.exports = router;