const express = require('express');
const jeansController = require('../controllers/jeansController');
const router = express.Router();

router.get('/', jeansController.getJeans);
router.post('/', jeansController.createJeans);
router.get('/:jeansId', jeansController.getJeansById);
router.delete('/:jeansId', jeansController.deleteJeans);
router.put('/:jeansId', jeansController.updateJeans);

module.exports = router;