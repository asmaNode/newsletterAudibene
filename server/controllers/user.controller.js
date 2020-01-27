
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
    console.log('req.params',req.params.email);

    userService.updateUserService(req)
        .then(user => user? res.json(user) : res.status(400).json({ message: 'invalid data' }))
        
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
    console.log('subscribe from channel');
     userService.subscibeToChannelService(req)
         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
         .catch(err => res.json(err));
 }


