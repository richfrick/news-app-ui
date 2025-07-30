# Build app
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

# Serve app
FROM nginx:1.29.0

COPY --from=build /app/dist /usr/share/nginx/html


