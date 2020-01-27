import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import validator from '../utils/validator';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: user
 *     description: user operations
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         description: Name of user
 *         example: Asma
 *       email:
 *         type: string
 *         description: Email of user
 *         example: asma1ayari@gmail.com
 *       isSubscribed:
 *         type: boolean
 *         description: is Subscribed to newsletter
 *         example: true
 *       favoriteSubbreddit:
 *         type: array
 *         description: List of my favorite subreddit 
 *         example: ["camping","nature","node"]
 *     
 *   Error:
 *     type: object
 *     properties:
 *        message:
 *           type: string
 *        error:
 *           type: boolean
 *           default: true
 */



/*** Create New User Api***/
router.route('/')
  /**
     * @swagger
     * /user:
     *   post:
     *     tags:
     *       - user
     *     summary: "Create a new user"
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: body
     *         in: body
     *         description: Created user object
     *         required: true
     *         schema:
     *           $ref: "#/definitions/User"
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *           $ref: "#/definitions/User"
     *       403:
     *          description: user not found
     *          schema:
     *             $ref: '#/definitions/Error'
     */

.post( validator.validate('storeUser'),(req, res) => {
 
    userCtrl.createNewUser(req, res);
});


/*** Update  User Api***/
router.route('/:email')
   /**
     * @swagger
     * /user/{email}:
     *   put:
     *     tags:
     *       - user
     *     summary: "Update an existing user by email"
     *     operationId: update
     *     consumes:
     *       - application/json
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: email
     *         in: path
     *         description: email of user 
     *         required: true
     *       - name: email
     *         in: body
     *         description: email that need to be updated
     *         required: true
     *         type: string
     *       - name: name
     *         in: body
     *         description: name that need to be updated 
     *         type: string
     *         required: true
    
     *     responses:
     *       200:
     *         description: OK
     *         schema:
     *           $ref: "#/definitions/Campagne"
     *       400:
     *         description: Invalid user
     */

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


/*** subscribe from channel Route***/
router.route('/subscribeToNewsletter/:email')

.put((req, res) => {
 
    userCtrl.subscribeToNewsletter(req, res);
});

/*** unSubscribe from channel Route***/
router.route('/unSubscribeToNewsletter/:email')

.put((req, res) => {
 
    userCtrl.unsubscribeFromNewsletter(req, res);
});













   

export default router;