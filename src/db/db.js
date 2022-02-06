const mongoose = require('mongoose')
const settings = require('../config/setting')
const connectionUri = settings.MONGODB.MONGOURL;

mongoose.connect(connectionUri, {
})
    .then((res) => {
        console.log(`connected successfully with Database: ${res.connections[0].name}
        `)
    })
    .catch((error => { console.log(`error connecting`, error); process.exit(1); }));

module.exports = mongoose;