FROM node

WORKDIR /app/shopping

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8003

CMD ["npm","start"]