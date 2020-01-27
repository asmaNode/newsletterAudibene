FROM devops.sofia.local:18083/node:12.9.1
# Create app directory
WORKDIR /home/node/app
COPY package.json /home/node/app
RUN npm install
COPY . /home/node/app
#RUN npm install pm2 -g
RUN npm run build
EXPOSE 3000
CMD [ "node" ]
