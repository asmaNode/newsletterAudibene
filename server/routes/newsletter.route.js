import express from 'express';
import * as newsletterCtrl from '../controllers/newsletter.controller';


const router = express.Router();





// Get top posts with api
router.route('/bestPosts')
.get( (req, res) => {
   
    newsletterCtrl.getMyFavSubbredditPosts(req, res);
});




   

export default router;