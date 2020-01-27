import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import validator from '../utils/validator';
const router = express.Router();


/*** Create New User Api***/
router.route('/')

.post( validator.validate('storeUser'),(req, res) => {
 
    userCtrl.createNewUser(req, res);
});


/*** Update  User Api***/
router.route('/:email')

.put( validator.validate('storeUser'),(req, res) => {
 
    userCtrl.updateUser(req, res);
});

/*** Get Subreddit of user Route***/
router.route('/subreddit')

.get( (req, res) => {
 
    userCtrl.getNewsletterUsers(req, res);
});

/*** subscribe from channel Route***/
router.route('/subscribeFrom')

.post((req, res) => {
 
    userCtrl.subscribeToChannel(req, res);
});


/*** Unsubscribe from channel Route***/
router.route('/unsubscribeFrom')

.post((req, res) => {
 
    userCtrl.unsubscribeFromChannel(req, res);
});










   

export default router;