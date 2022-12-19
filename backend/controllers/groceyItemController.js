const GroceryItem = require('../models/groceryItemModel')
const mongoose = require('mongoose')

// GET all grocery items --> Model.find({})
const findGroceryItem = async (req, res) => {
	const groceryItems = await GroceryItem.find({}).sort({
		createdAt: -1,
	})
	res.status(200).json(workouts)
}

// POST a new grocery item --> Model.find({})
const createGroceryItem = async (req, res) => {
	const { item } = req.body

	// Add  doc to DB
	try {
		const groceryItem = await GroceryItem.create({ item })
		res.status(200).json(groceryItem)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// DELETE a grocery item
const deleteGroceryItem = async (req, res) => {
	// ID Validation
	const { id } = req.params
	!mongoose.Types.ObjectId.isValid(id) &&
		res.status(400).json({ error: 'Invalid Document ID' })

	const groceryItem = await GroceryItem.findOneAndDelete({ _id: id })

	// Document ID validation
	!groceryItem
		? res.status(400).json({ error: `Grocery Item Does't Exist` })
		: res.status(200).json(groceryItem)
}

module.exports = {
	findGroceryItem,
	createGroceryItem,
	deleteGroceryItem,
}
