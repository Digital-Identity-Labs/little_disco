FROM node:22-alpine3.19 AS builder

WORKDIR /usr/local/src
COPY . ./
RUN npm install && npm run build --production

##########################################################
FROM httpd:alpine

LABEL description="A small simple SAML discovery service" \
      maintainer="pete@digitalidentitylabs.com" \
      org.opencontainers.image.source="https://github.com/Digital-Identity-Labs/little_disco"

RUN  apk add --update --no-cache \
     apache2 \
     apache2-ssl \
     apache2-http2 \
     apache2-utils \
     apache2-ctl

COPY --from=builder /usr/local/src/dist/ /usr/local/apache2/htdocs
COPY examples/ld_config.default.json /usr/local/apache2/htdocs/ld_config.json

