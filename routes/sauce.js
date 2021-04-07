const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/Sauce')
const auth = require('../middleware/auth');

router.post('/', auth, sauceCtrl.createSauce);
router.put('/:id', auth, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getUneSauce);
router.get('/', auth, sauceCtrl.getToutesSauce);

module.exports = router;
