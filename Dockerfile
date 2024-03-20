FROM node:12.22.12 as build-stage

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --output-path=./dist/out

FROM nginx:alpine

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

EXPOSE 80

