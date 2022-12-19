const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const { PORT, MONGO_URI } = process.env

connectDB = async app => {
	try {
		conn = await mongoose.connect(MONGO_URI)
		console.log(`\nMongoDB Connected: ${conn.connection.host}`)
		await app.listen(PORT, (req, res) =>
			console.log(
				`Connected to DB & Listening on Port ${PORT} http://localhost:${PORT}`
			)
		)
	} catch (error) {
		console.log(`Error: ${error.message}`)
		process.exit(1)
	}
}

module.exports = connectDB
