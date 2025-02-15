FROM node

WORKDIR /app/customer

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 8001

CMD ["npm","start"]