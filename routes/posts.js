var express = require('express');
var router = express.Router();
const controller = require('../controllers/postController');
 
router.get('/listar', (req, res, next) => {
  controller.show(req, res);

});

router.post('/create', (req, res, next) => {
  controller.create(req, res);
});

router.post('/update/:id', (req, res, next) => {
  controller.update(req, res);
});

router.post('/remove/:id', (req, res, next) => {
  controller.delete(req, res);
});  
module.exports = router;
