#!/bin/bash

# PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm i npm -g
npm install -g serve
npm install
npm run build
pm2 start "npm run start" --name=KAKAO-NEXT
