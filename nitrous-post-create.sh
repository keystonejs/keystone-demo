#!/bin/bash

# let's get mongo ready locally for our keystone.js demo app
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# let's clone our repo and set up the keystone-demo dir
cd code && git clone https://github.com/tmvanetten/keystone-demo.git

# let's get our node dependencies for this project installed
echo "start npm install"
npm install --no-progress
echo "npm install done"

echo "open keystone.js and set your name, brand, admin path, etc"
echo "start the keystone-demo app by entering node keystone"
