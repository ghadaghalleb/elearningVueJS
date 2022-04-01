const router = require('express').Router();
const matieresController = require('../../controllers/matieres-controller');
const auth = require('../../middleware/auth');

// @route   GET api/matieres
// @desc    Get all matieres
// @access  Public
router.get('/',matieresController.get)

// @route   GET api/matieres
// @desc    Add post
// @access  Private
router.post('/',auth,matieresController.post)

// @route   GET api/matieres
// @desc    Update post
// @access  Private
router.put('/:id',auth,matieresController.put)

// @route   GET api/matieres
// @desc    Delete post
// @access  Private
router.delete('/:id',auth,matieresController.delete)

module.exports = router;