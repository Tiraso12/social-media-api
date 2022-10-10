const { User } = require('../models');

const userController = {

    //get all users
    getAllUser({ }, res) {
        User.find({})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err =>{
            console.log(err);
            res.sendStatus(400);
        })
    },

    //creates user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    updateUser({ para, body}, res){
        User.findOneAndUpdate({_id : params._id}, body, {new: true,})
        .then(dbUserData =>{
            if(!dbUserData){
                res.status(404).json({message: 'No user found with this id!'})
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
};

module.exports = userController;