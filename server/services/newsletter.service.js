
import request from 'request';

module.exports = {

    getBestPosts,
    getMyListOfSubbreddit,
    generalFunction

};


/**
 * Get Best Posts
 * 
 */
function getBestPosts() {

    this.getMyListOfSubbreddit()
        .then((listSubbreddit) => {

            listSubbreddit.data.children.map(subReddit => {

            }

            )



        })
        .catch(err => console.log(err));



}

/**
 * Get posts of given subbreddit (the 3 top)
 * 
 * @param {*} subredditName 
 */
async function getMyListOfSubbreddit(subredditName) {

    return new Promise(function (resolve, reject) {
        const options = {
            url: 'https://www.reddit.com/r/' + subredditName + '/top.json?limit=3',
            json: true,

        };

        request.get(options, (err, res, body) => {
            if (err) {
            
                reject(err)
            }
            else if (body.data) {
                getDataBySubreddit(body.data.children).then((result, err) => {

                    resolve(result);

                });

            } else {
                reject('data is not valid')
            }


        });
    })

}
/**
 * getDataBySubreddit
 * @param {*} subbredditData 
 */
function getDataBySubreddit(subbredditData) {
    let list = [];
    return new Promise(function (resolve, reject) {
        let array = subbredditData;

        let returnedObj = array.map((subredditItem) => {

            let score = parseInt((subredditItem.data.score) / 1000);

        
            let obj = {
                title: subredditItem.data.title,
                channel: subredditItem.data.subreddit,
                thumbnail: subredditItem.data.thumbnail,
                subreddit_name_prefixed: subredditItem.data.subreddit_name_prefixed,
              
                score: subredditItem.data.score,
                selftext: subredditItem.data.selftext,
                isText: true ? subredditItem.data.selftext != "" : false,
                isImage: true ? subredditItem.data.thumbnail != "" : false
            };


            return (obj)


        })


        resolve({ 'obj': returnedObj })


    })

}
/**
 * General function to get data from reddit of given list subreddit 
 * 
 * @param {*} listChannel 
 */
function generalFunction(listChannel) {
    return Promise.all(
        listChannel.map(async (channel) => {
            const children = await getMyListOfSubbreddit(channel);

            return children;
        })
    );
}