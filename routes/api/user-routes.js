const router = require('express').Router();
const {
    createUser,
    getAllUser,
    updateUser,
    getUserById,
    deleteUser
} = require('../../controllers/user-controller');


//api/user
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//api/user/:id

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;