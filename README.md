Keystone Demo
=============

This site is an example of a default [Keystone 4](http://keystonejs.com) application.

Try it out at http://demo.keystonejs.com

Pull requests are welcome, and if you'd like to see additional demos just [open a new issue](https://github.com/keystonejs/keystone-demo/issues/new) to let us know.

# TODO

* lock the demo down to vandalism https://github.com/keystonejs/keystone/issues/1126

## Using this as a basis for your own project

We recommend you use our [Yeoman Generator](https://github.com/JedWatson/generator-keystone) as the basis for new projects, as this demo site contains code specific to running a public demo (like user account protection, etc).

If you do want to use this as a starting point however, you are welcome to follow the instructions below to begin.

# Manual Install

*Note: We've implemented a new theme for the demo site; to use the (old) basic bootstrap theme, check out the `bootstrap-simple` branch*

    git clone https://github.com/JedWatson/keystone-demo.git
    cd keystone-demo
    npm install

### Setting up your accounts and environment

First, sign up for free accounts for the following services used by features in the demo site:

*   [Cloudinary](https://cloudinary.com/)
*   [Mandrill](https://www.mandrill.com/)
*   [Embed.ly](https://embed.ly/)

Then, create a `.env` file in the project folder (the one with this readme) and fill in the following values:

    CLOUDINARY_URL={your cloudinary url}
    MANDRILL_APIKEY={your mandrill api key}
    MANDRILL_USERNAME={your mandrill username}
    EMBEDLY_APIKEY={your embedly key}

**This file is ignored by the default .gitignore settings. When you put your project into production, replicate the env variables above, and add settings for the following:**

    NODE_ENV=production
    COOKIE_SECRET={a random string to encrypt cookies}
    MONGO_URI={your mongo connection uri} // can also be MONGOLAB_URI
    GA_DOMAIN={your google analytics domain} // optional
    GA_PROPERTY={your google analytics property} // optional
    PORT={the port to listen on} // defaults to 3000, automatically set by paas (e.g. heroku)


### Installing MongoDB

By default, KeystoneJS will look for a MongoDB server running on localhost on the default port, and connect to it. If you're getting errors related to the MongoDB connection, make sure your MongoDB server is running.

You can find more information on how to install MongoDB and other dependencies in the [generator-keystone](https://github.com/keystonejs/generator-keystone) README.

### Configuring the project defaults

Open **keystone.js** and update the name and brand to your own project.

You can also change the other settings in this file (locals, nav, etc.) as you develop your project.


### Replacing the demo account

Open **./updates/0.0.1-admins.js** and update the array of initial admin users to your own.

Also remove the line that says `newAdmin.isProtected = true;` so you can change your password.

When you run your app in production, it is strongly recommended you change your password immediately from the default in this file.

### Run it!

`node keystone`

You should see in your console:

`{your app name} is ready on port 3000`

### Make it your own

Now you can start modifying the demo site and customising it as your own.

Some places to start:

*   `routes/index.js` - this is the file that binds urls to specific view controllers. Files in `./routes/views/*.js` are automatically imported as `routes.views.{script}` ready to be bound.
*   `./templates` - this is the folder that holds the templates for your views. It would typically match the structure of your `./routes` folder fairly closely.
*   `./public` - all the files in this folder are served as static assets for your site. Customise and add your own css, client-side javascript, images, etc. here. Any `.less` files will be automatically compiled into `.css` files.
*   `./models` - these files are included by `./models/index.js` and each one sets up a different database model in your application. If you add more, be sure to add them to the index file!

Check out the [Keystone 4 documentation](http://keystonejs.netlify.com/) for more information.

### Ask us questions or tell us what you built

We love to hear what people are doing with KeystoneJS, and are always happy to help if you get stuck.

 * For technical questions, ask on [Stack Overflow](https://stackoverflow.com/tags/keystonejs).
 * For bugs or feature suggestions for Keystone Demo, create a [GitHub issue for `keystone-demo`](https://github.com/keystonejs/keystone-demo/issues).
 * For bugs or feature suggestions for the KeystoneJS Framework, create a [GitHub issue for `keystone-demo`](https://github.com/keystonejs/keystone/issues).
 * For general discussion or feedback, join the [KeystoneJS Slack](https oups.google.com/d/forum/keystonejs).
 * For social media shout out, mention [**@keystonejs**](https://twitter.com/keystonejs) on Twitter.

## License

(The MIT License)

Copyright (c) 2015-2018 Jed Watson

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.