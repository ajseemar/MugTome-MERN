const express = require('express');
const router = express.Router();

const passport = require('passport');

const Post = require('../../models/Post');
const validatePostInput = require('../../validation/post');

router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err));
});

router.get('/user/:user_id', (req, res) => {
    Post.find({ user: req.params.user_id })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
    Post.find({ id: req.params.id })
        .then(post => res.json(post))
        .catch(err => res.status(400).json(err));
})

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validatePostInput(req.body);

        if (!isValid) return res.status(400).json(errors);

        const newPost = new Post({
            user: req.user.id,
            text: req.body.text
        });

        newPost.save().then(post => res.json(post))
    }
);


module.exports = router;