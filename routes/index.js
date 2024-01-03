var express = require('express');
var router = express.Router();

/* GET home page. */
var user = require('../controller/usercontroller');
router.post("/insert",user.insert); 
router.get("/",user.select_data); 

router.get('/delete/:id',user.delete_data);

router.post('/update/:id',user.update_data);
router.get('/update/:id',user.update_data);

router.get('/five',user.five);
router.get('/ten',user.ten);

module.exports = router;
