const router = require('express').Router();
const postsController = require('../../controllers/posts-controller');
const auth = require('../../middleware/auth');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/',postsController.get)

// @route   GET api/posts
// @desc    Get post by id
// @access  Public
router.get('/:id',postsController.getById)

// @route   GET api/posts
// @desc    Add post
// @access  Private
router.post('/',auth,postsController.post)

// @route   GET api/posts
// @desc    Update post
// @access  Private
router.put('/:id',auth,postsController.put)

// @route   GET api/posts
// @desc    Delete post
// @access  Private
router.delete('/:id',auth,postsController.delete)

module.exports = router;