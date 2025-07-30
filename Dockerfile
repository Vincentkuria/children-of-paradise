FROM node:20-slim

WORKDIR /app

COPY .output ./

EXPOSE 3000

CMD ["node", "server/index.mjs"]