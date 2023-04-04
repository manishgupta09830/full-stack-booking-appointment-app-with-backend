const path = require('path');

const express = require('express');

const rootDir = require('../util/path');



const userController = require('../Controllers/booking');

const user = require('../models/Booking');

const router = express();

router.get('/', userController.getBooking);

router.post('/', userController.postBooking);



router.get('/get-user',userController.getUser);

router.post('/add-user',userController.postuser);

router.delete('/delete-user/:userId',userController.deleteUserDetails);

router.post('/edit-User/:userId',userController.editUser)
module.exports = router;