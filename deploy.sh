#!/bin/bash

# PRODUCTION
git reset --hard
git pull origin master

npm i npm -g
npm global add serve
npm
npm run build
pm2 start "npm run start" --name=kakao
