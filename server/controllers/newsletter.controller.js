import request from 'request';
import User from '../models/user.model';
import newsletterService from '../services/newsletter.service';



// function just for test with 3 subreddit ['voyage', 'food', 'node']
export async function getMyFavSubbredditPosts(req, res, next) {
    const listChannel = ['voyage', 'food', 'node'];
    const finalResult = await newsletterService.generalFunction(listChannel);
    var obj = { "listChannel": finalResult }

    res.json(obj);

}


