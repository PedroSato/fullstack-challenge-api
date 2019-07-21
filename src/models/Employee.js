const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    surname: String,
    participation: Number,
}, {
        timestamps: true
    })

module.exports = mongoose.model('Employee', EmployeeSchema)