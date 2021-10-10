const Jeans = require('../models/jeans');
const GenericResponse = require('../utils/GenericResponse');

class JeansRepository {
    constructor() {
    }

    async getById(id) {
        let jeans = await Jeans.findById(id);
        return jeans;
    }

    async getAll() {
        let jeans = await Jeans.find();
        return jeans;
    }

    async createJeans(jeans) {
        let response = {
            success: false,
            error: {}
        };
        try {
            let newJeans = new Jeans({
                brand: jeans.brand,
                color: jeans.color,
                size: jeans.size

            });
    
            await newJeans.save();
            response.success = true;
        } catch (ex) {
            response.success = false;
            response.error = ex;
        }

        return response;
    }

    async updateJeans(jeansId, jeansData) {
        let response = new GenericResponse();
        try {
            // check if jeans already exists
            const jeans = await newJeans.findById(jeansId);

            // update jeans if exists
            if (jeans) {
                await Jeans.findByIdAndUpdate(jeansId, {
                    brand: jeansData.brand, color: jeansData.color, size: jeansData.color
                },
                    { new: true });
                response.success = true;
            } else {
                response.error = "Jeans not found..."
            }
        } catch (ex) {
            console.log(ex);
            response.error = ex;
        }
        return response;
    }

    async deleteJeans(jeansId) {
        let response = new GenericResponse();
        try {
            const jeans = await Jeans.findById(jeansId);
            if (jeans) {
                await jeans.remove();
                response.success = true;
            }
        } catch (ex) {
            response.error = ex;
        }
        return response;
    }
}

module.exports = JeansRepository;