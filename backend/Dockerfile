# packages/backend/Dockerfile  
FROM node:alpine

WORKDIR /usr/src/app  

RUN yarn global add typescript  
RUN yarn global add db-migrate  

COPY package*.json ./  
COPY tsconfig*.json ./

RUN yarn install

COPY . .  

RUN yarn build  

CMD yarn db:migrate && yarn start