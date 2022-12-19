const express = require('express')

const {
	findGroceryItem,
	createGroceryItem,
	deleteGroceryItem,
	// updateGroceryItem
} = require('../controllers/groceyItemController')

const router = express.Router()

// GET all grocery items
router.get('/', findGroceryItem)

// POST a new grocery item
router.post('/', createGroceryItem)

// DELETE  a grocery item
router.delete('/:id', deleteGroceryItem)

// UPDATE a grocery item
// router.patch('/:id', updateGroceryItem)

module.exports = router
