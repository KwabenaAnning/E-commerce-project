const Express = require('express');
const router = Express.Router();
const {createUSER, signInUser} = require('../controllers/user.controller')


router.post('/signup', createUSER )
router.post('/login', signInUser)

module.exports = router;