const mongoose = require('mongoose');
const responseHelper = require('../libs/response')
const indexServices = require('../services/index');


class IndexController {

    welcomeResponse(req, res) {
        return res.json({
            message: "Welcome. How are you doing?"
        })
    }
}

module.exports = new IndexController()