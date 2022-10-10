const router = require('express').Router();
const {
    createUser,
    getAllUser,
    updateUser,
    getUserById,
    deleteUser,
    addFriend,
    removeFriend
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

//api/user/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;