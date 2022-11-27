# Base image
FROM public.ecr.aws/docker/library/node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

ARG POSTRES_HOST_ARG
ENV POSTRES_HOST=$POSTRES_HOST_ARG

ARG QUEUE_ARG
ENV QUEUE=$QUEUE_ARG

ARG QUEUE_URL_ARG
ENV QUEUE_URL=$QUEUE_URL_ARG

ARG AWS_REGION_ARG
ENV AWS_REGION=$AWS_REGION_ARG

ARG ACCESS_KEY_ID_ARG
ENV ACCESS_KEY_ID=$ACCESS_KEY_ID_ARG

ARG SECRET_ACCESS_KEY_ARG
ENV SECRET_ACCESS_KEY=$SECRET_ACCESS_KEY_ARG


ENV PORT=3000

# Creates a "dist" folder with the production build
RUN npm run build:prod

EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]