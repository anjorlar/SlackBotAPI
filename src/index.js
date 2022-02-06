require("dotenv").config()
const app = require('./app');
const config = require('./config/setting')

const PORT = config.PORT

app.listen(PORT, () => {
    console.log(`Service is running on ${PORT}`)
})