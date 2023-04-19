#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/test/deploy.log

echo 'cd /home/ec2-user/test' >> /home/ec2-user/test/deploy.log
cd /home/ec2-user/test >> /home/ec2-user/test/deploy.log
echo 'starting NPM install...' >> /home/ec2-user/test/deploy.log
npm install >> /home/ec2-user/test/deploy.log
echo 'starting build...' >> /home/ec2-user/test/deploy.log
npm run build >> /home/ec2-user/test/deploy.log
echo 'restarting PM2 services' >> /home/ec2-user/test/deploy.log
# pm2 restart all >> /home/ec2-user/test/deploy.log

# echo 'npm install' >> /home/ec2-user/test/deploy.log 
# npm install >> /home/ec2-user/test/deploy.log