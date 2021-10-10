//const Jeans = require('../models/jeans');
const JeansRepository = require('../repository/jeansRepository');
const jeansRepo = new JeansRepository();
//const ErrorResponse = require('../utils/errorResponse');

module.exports = {
    getJeans: async (req, res) => {
        
        let jeans = await jeansRepo.getAll();
        console.log(jeans);

        res.json(jeans);
    },
    getJeansById: async (req, res) => {

        let jeans = await jeansRepo.getById(req.params.jeansId);

        res.json(jeans);
    },
    createJeans: async (req, res, next) => {
        console.log(req.body);
        let { brand, color, size } = req.body;
        let response = await jeansRepo.createJeans({ brand, color, size });

        res.json(response);
    },
    deleteJeans: async (req, res, next) => {

        // get jeans id from req.params
        const jeansId = req.params.jeansId;
        let response = await jeansRepo.deleteJeans(jeansId);

        res.json(response);
    },
    updateJeans: async (req, res) => {

        const { brand, color, size } = req.body;
        const jeansId = req.params.jeansId;
        let response = await jeansRepo.updateJeans(
            jeansId,
            {
                brand, color, size
            });

        res.json(response);
    }
};