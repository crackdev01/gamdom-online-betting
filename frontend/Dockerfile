# packages/backend/Dockerfile  
FROM node:alpine

WORKDIR /usr/src/app  

RUN yarn global add typescript  
RUN yarn global add vite  

COPY package*.json ./  
COPY tsconfig*.json ./

RUN yarn install  

COPY . .  

RUN yarn build  

CMD ["yarn", "preview"]  