var express = require('express');
var router = express.Router();
const controller = require('../controllers/commentController');
 
router.get('/listar', (req, res, next) => {
  controller.show(req, res);

});

router.post('/create', (req, res, next) => {
  controller.create(req, res);
});

router.post('/update/:id', (req, res, next) => {
  controller.update(req, res);
}); 

module.exports = router;
