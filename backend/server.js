const express = require('express')
const groceryItemRoutes = require('./routes/groceryItems')
const connectDB = require('./config/db.js')

const app = express()

// Middlewares
app.use(express.json())

app.use((req, res, next) => {
	console.log({
		Path: req.path,
		Method: req.method,
	})
	next()
})

// Router
app.use('/api/grocery-items', groceryItemRoutes)

connectDB(app)
