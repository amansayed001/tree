FROM node:22

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm i

CMD ["npm", "run", "start"]
