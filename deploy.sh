# #!/bin/bash

# PRODUCTION
git reset --hard
git pull origin master

npm i
npm run build
pm2 start process.config.js --env

# ESLATMA ---> deploy.sh ni mod ni o'zgartirish kerak. terminalga chmod +x deploy.sh yozish kifoya