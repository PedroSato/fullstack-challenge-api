const express = require('express')
const EmployeeController = require('./controllers/EmployeeController')
const routes = new express.Router()

routes.get('/employees', EmployeeController.index)
routes.post('/employees', EmployeeController.store)



module.exports = routes