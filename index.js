const express = require('express')
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({ status: 200, message: 'Service is OK.' })
  res.end()
})

app.use("/", require("./routes"))

server = app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
})