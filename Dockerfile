FROM node:latest

WORKDIR /usr/src/app

RUN npm install

COPY . .

CMD npm run build

FROM node:latest
WORKDIR /usr/src/app

COPY --from=node:latest /usr/src/app/dist/ /usr/src/app/dist/

EXPOSE 8080


COPY package.json .
COPY vite.config.ts .


EXPOSE 8080
CMD ["npm", "run", "preview"]
