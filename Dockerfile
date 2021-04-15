FROM alpine:latest

WORKDIR /app/

COPY package*.json ./

RUN apk add python3 py3-pip

RUN apk add nodejs

RUN apk add build-base

RUN apk add npm

COPY . .

RUN npm install --production

EXPOSE 3000
EXPOSE 80

CMD ["npm", "start"]