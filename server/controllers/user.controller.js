
import userService from '../services/user.service';

/**
 * 
 * Create New user
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function createNewUser(req, res, next) {

    userService.createNewUserService(req)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}


/**
 * 
 * Create New user
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function updateUser(req, res, next) {
    
    userService.updateUserService(req)
        .then(user => user? res.json({message:'User updated with success'}) : res.status(400).json({ message: 'invalid data' }))
        
        .catch(err => next(err));
}




/**
 * 
 *Get Subbreddit List of a user
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function getNewsletterUsers(req, res, next) {
    console.log('get sub controller')
    userService.getListUsersService(req)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => res.json(err));
}

/**
 * 
 *Unsubscribe from channel
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function unsubscribeFromChannel(req, res, next) {
   console.log('unsubscribe from channel');
    userService.unsubscibeFromChannelService(req)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => res.json(err));
}


/**
 * 
 *subscribe from channel
 * @param {object} req
 * @param {object} res
 * @returns {*}
 */
export function subscribeToChannel(req, res, next) {
 
     userService.subscibeToChannelService(req)
         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
         .catch(err => res.json(err));
 }


 /**
  * subscribe to newsletter
  */

 export function subscribeToNewsletter(req, res, next) {
   
     userService.subscribeToNewsletterService(req)
         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
         .catch(err => res.json(err));
 }

 /**
  * unSubscribe to newsletter
  */

 export function unsubscribeFromNewsletter(req, res, next) {
  console.log('unsubscribe');
     userService.unsubscribeFromNewsletterService(req)
         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
         .catch(err => res.json(err));
 }
