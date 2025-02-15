FROM node

WORKDIR /app/products

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8002

CMD ["npm","start"]