FROM node:14 AS ui-build
WORKDIR /usr/src/app
COPY bstest/ ./bstest/
RUN cd my-app && npm install @angular/cli && npm install && npm run build

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/bstest/dist ./bstest/dist
COPY package*.json ./
RUN npm install
COPY server.js .

EXPOSE 80

CMD ["node", "server.js"]