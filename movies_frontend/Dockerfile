FROM node:14.4.0-alpine3.10 as build
USER root
ARG REACT_APP_SERVER
ARG REACT_APP_ENDPOINT
ARG REACT_APP_ENDPOINT_ACTORS
ARG REACT_APP_ENDPOINT_COMMON_ACTORS_MOVIES

ENV REACT_APP_SERVER $REACT_APP_SERVER
ENV REACT_APP_ENDPOINT $REACT_APP_ENDPOINT
ENV REACT_APP_ENDPOINT_ACTORS $REACT_APP_ENDPOINT_ACTORS
ENV REACT_APP_ENDPOINT_COMMON_ACTORS_MOVIES $REACT_APP_ENDPOINT_COMMON_ACTORS_MOVIES
ENV PATH /movies_frontend/node_modules/.bin:$PATH
WORKDIR /movies_frontend

COPY package.json /movies_frontend
COPY package-lock.json /movies_frontend
RUN npm install
COPY ./public ./public/
COPY ./src ./src/

RUN npm run build
# EXPOSE 3000
# CMD ["npm","start"]

FROM nginx:alpine
COPY --from=build /movies_frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-proxy.conf /etc/nginx/conf.d
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]