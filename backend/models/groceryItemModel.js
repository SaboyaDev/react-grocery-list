const mongoose = require('mongoose')

const Schema = mongoose.Schema

const groceryItemSchema = new Schema(
	{
		item: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('GroceryItem', groceryItemSchema)
