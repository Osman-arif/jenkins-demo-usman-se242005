FROM node:18-alpine
WORKDIR /app
copy . .
EXPOSE 3000
CMD ["node","app.js"]
