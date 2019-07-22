const Employee = require('../models/Employee')


module.exports = {

    async index(req, res) {
        const employees = await Employee.find().sort('-participation')

        return res.json(employees)
    },

    async store(req, res) {

        const { name, surname, participation } = req.body

        if (!name || !surname || !participation) {

            return res.status(400).json({
                message: 'Ocorreu um erro com a validação dos campos'
            })

        } else {

            const employee = await Employee.create({
                name,
                surname,
                participation
            })

            return res.json(employee)
        }
    }


}