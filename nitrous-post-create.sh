#!/bin/bash
# KeystoneJS Demo App - Nitrous QuiskStart post create script by @tmvanetten

#KeystoneJS Demo App is used IAW https://github.com/keystonejs/keystone-demo#license
#+ and with thanks to https://github.com/JedWatson and all contributors.

#  Note:
#  -------
#  This script uses Nitrous.io QuickStart to spin up an Ubuntu instance with Node and Mongo.  It will pull the
#+ Keystone-Demo repo, install the node dependencies, configure port 3000 to open/public, and launch the Nitrous.io IDE.
#  You can customize the demo app by editing the name and brand in keystone.js and modify the rest
#+ to fit your project needs.
# When your ready to check out the demo app type node keystone in the terminal and then click preview on 3000 in the Nitrous.io IDE.

# Based on the repo url included in our QuickStart button, Nitrous will automatically clone the repo for us and place it
#+ into ~/code/{$GIT_REPO_NAME} .

# let's get mongo ready locally for our keystone.js demo app
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Remember Nitrous automatically cloned the repo into ~/code/{$GIT_REPO_NAME} so at this point all we need to do is cd into our
#+ project, install our node dependencies, and we are ready to laucnch the demo app.
echo "installing node modules and opening the Nitrous.io IDE...."
cd ~/code/keystone-demo && npm install --no-progress
