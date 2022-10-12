const { Thought, User } = require('../models');

const thoughtController = {

    getAllThought(req,res){
        Thought.find({})
        .then(dbThoughtData=> {
            if (!dbThoughtData){
                res.status(404).json({message: 'No tought found!'})
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    createThought({ body, params }, res) {
        Thought.create(body)
            .then(dbThoughtData => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: dbThoughtData } },
                    { new: true }
                );
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought found with this id!' })
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));

    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => res.json(err));
    }


};

module.exports = thoughtController;