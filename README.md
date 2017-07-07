# Project 3 Starter Code

 ## Introduction


 Welcome to our repository for WDI-27's group project! We have created an Angular app, Wabi Sabi, that functions as an e-commerce website that is setup with Stripe payments, ng-cart, custom order, user, and product schemas, and bootstrap.

 ## Installation and Setup

 Installation steps are listed below:

 * Download or clone this repo
 * copy `yarn add` and `bower install` into you terminal to install dependencies
 * run `node db/seeds` in your terminal to seed your
 * run `gulp` in your terminal to compile the source code and open in browser
 * _Enjoy_!

 ### A short description


 Wabi Sabi is an app that allows users to login or register through our website or through instagram oauth. Users can edit their profile, post products to sell, receive orders from other users, and place orders themselves. We utilized Stripe for the payment system, ngCart for storing items to be ordered and checking out, and we created custom order and product schemas for everything else.

 ![Homepage](http://i.imgur.com/8Cyut95.png)

 The app requires registration or logging in to access product and user content. Users can choose to login with Instagram or through our app. Additionally, once a user is verified they can post content and start placing orders.

 ![Profile example](http://imgur.com/qEpXkAM)

 Posting products is easy. Users can upload images through amazon-web-services. Only the owner of a profile our product can edit or delete them..

 ![Posts](http://imgur.com/0SnmGlU)

 ![Posts](http://imgur.com/ShTnFlT)

 ![Stripe](http://imgur.com/eLvghIa)


 ### Technologies used

 These are the languages and softwares used in this game:

 - HTML 5
 - SCSS
 - Bootstrap
 - Angular (ngMessages, ngCart, ui.router, ui.bootstrap, ngAnimate, ngResource, ngMdIcons)
 - Gulp
 - Yarn
 - NPM
 - JWOT
 - Bcrypt
 - Balsamiq
 - Imgur
 - Satellizer
 - Amazon Web Services
 - Oauth: Instagram
 - Stripe API
 - Trello
 - Git & github
 - Heroku

 ![Wireframe](http://imgur.com/Dc9Bl7k)

 Oauth and bcrypt are used for user registration and login and Instagram is available as login options. The Stripe API is installed to process payments.

 ### Challenges faced

The biggest challenges were handling the three major components of our app: ngCart, stripe, and the order schema. Luckily, we split up the work and tackled it within the first half of the week. We also had difficulties with merging as a group due to personal errors and mistakes.

 ### Rounding it off

 For improvements we'd like to:

 -Have the stock quantity decrease through orders and users can increase stock manually
 -Have addresses inputted through Google Maps and ngCart calculate shipping cost with this data
 -Have a wishlist for users that they can add to by liking an item
 -Allow a seller and buyer to directly contact each other
 -Preserve order history on the profile pages
 -Set image sizing manually on website to prevent styling issues

 Interested in following our future projects? Link with us on [Github](https://github.com/alexandriako), https://github.com/jasontrk, https://github.com/mikejdegroot.
