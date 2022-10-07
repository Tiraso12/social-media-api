const { User } = require('../models');

const userController = {

    //creates user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err =>res.json(err));
     }
};

module.exports = userController;