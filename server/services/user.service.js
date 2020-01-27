import User from '../models/user.model';
import _ from 'underscore';

module.exports = {
    createNewUserService,
    updateUserService,
    getListUsersService,
    subscibeToChannelService,
    unsubscibeFromChannelService,
    unsubscribeFromNewsletterService,
    subscribeToNewsletterService

};
/***
 * Create new user service
 */
async function createNewUserService(data) {

    const user = new User({
        name: data.body.name,
        email: data.body.email,
        favoriteSubbreddit: data.body.favoriteSubbreddit,
        isSubscribed: true
    })


    try {

        const newUser = await user.save()

        return (newUser)
    } catch (err) {

        return (err)
    }
}

/**
 * Update user service
 */
async function updateUserService(data) {


    try {
        const userUpdated = await User.findOne({ email: data.params.email }, function (err, user) {
            if (user == null) {
                return ({ message: 'Cant find user' })
            }

            user.name = data.body.name;
            user.email = data.body.email;

            user.save();

            return user
        })
        return userUpdated


    } catch (err) {

        return (err)
    }
}


/**
 * Get list users subscribed on newsletter Service
 */

async function getListUsersService() {
    try {

        const user = await User.find({ isSubscribed: true })

        if (user == null) {
            return res.status(404).json({ message: 'Cant find user' })
        }
        return user
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }



    next()
}

/**
 * UnSubscribe to new subreddit channel
 */
async function unsubscibeFromChannelService(data) {
    try {

        const user = await User.findOne({ email: data.body.email });
        if (user == null) {
            return res.status(404).json({ message: 'Cant find user' })
        }


        const valuesToRemove = data.body.unsubscribedList;

        const myArray = _.difference(user.favoriteSubbreddit, valuesToRemove);

        myArray.length != 0 ? user.favoriteSubbreddit = myArray : user.favoriteSubbreddit;
        user.save();

        return user.favoriteSubbreddit
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }




}

/**
 * Subscribe to new subreddit channel
 */
async function subscibeToChannelService(data) {
    try {

        const user = await User.findOne({ email: data.body.email });
        if (user == null) {
            return res.status(404).json({ message: 'Cant find user' })
        }

        const channelToAdd = data.body.subscribedList;

        const items = user.favoriteSubbreddit.concat(channelToAdd)

        const newArray = _.uniq(items)

        user.favoriteSubbreddit = newArray;
        user.save();

        return user.favoriteSubbreddit
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }



}

/**
 * wsubscribe from newsletter
 */
async function unsubscribeFromNewsletterService(data) {
    try {

        const user = await User.findOne({ email: data.params.email });
        if (user == null) {
            return res.status(404).json({ message: 'Cant find user' })
        }

        user.isSubscribed = false;

        user.save();

        return user
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }



}

/**
 * Unsubscribe from newsletter
 */
async function subscribeToNewsletterService(data) {
    try {

        const user = await User.findOne({ email: data.params.email });
        if (user == null) {
            return res.status(404).json({ message: 'Cant find user' })
        }

        user.isSubscribed = true;
        user.save();

        return user
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }



}



