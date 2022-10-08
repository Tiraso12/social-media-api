const router = require('express').Router();
const {
    createUser,
    getAllUser
      } = require('../../controllers/user-controller');

      
//user
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

module.exports = router;