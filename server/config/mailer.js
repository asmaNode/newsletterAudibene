'use strict';

import sgMail from '@sendgrid/mail';
import newsletterService from '..//services/newsletter.service';
import userService from '..//services/user.service';

var Promise = require('bluebird');


async function getDataFromReddit(listNewsletterUsers) {
  return Promise.all(
    listNewsletterUsers.map(async user => {
      let result = await newsletterService.generalFunction(user.favoriteSubbreddit);

      let obj = { result: result, user: user };

      return obj

    })



  )

}
async function getAll() {
  const listNewsletterUsers = await userService.getListUsersService();
  getDataFromReddit(listNewsletterUsers).then(result => {
   
    result.map(item => {
     
      const msg = {
        to: item.user.email,
        from: 'asma1ayari@gmail.com',
        subject: 'Newsletter audibene',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>Newsletter audibene</strong>',
        templateId: process.env.TEMPLATE_SENDGRID_ID,
        dynamic_template_data: {
          name: item.user.name,
          listChannel: item.result

        }


      };
      sgMail.send(msg).then(sent => {console.log("Email sent") ;
    
    
    });
    })

  });
}
var newsletterMailer = function () {

  /**** Just test send mail */

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  getAll();



};

module.exports = newsletterMailer;
