const router = require('express').Router();
const coursController = require('../../controllers/cours-controller');
const auth = require('../../middleware/auth');

// @route   GET api/matieres
// @desc    Get all matieres
// @access  Public
router.get('/',coursController.get)

// @route   GET api/matieres
// @desc    Add post
// @access  Private
router.post('/',auth,coursController.post)

// @route   GET api/matieres
// @desc    Update post
// @access  Private
router.put('/:id',auth,coursController.put)

// @route   GET api/matieres
// @desc    Delete post
// @access  Private
router.delete('/:id',auth,coursController.delete)

module.exports = router;