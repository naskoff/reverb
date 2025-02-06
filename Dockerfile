FROM serversideup/php:8.4-fpm-nginx-alpine AS base

ENV COMPOSER_HOME /tmp

USER root

WORKDIR /var/www/html

RUN apk add --no-cache git curl make && \
    install-php-extensions intl uv

USER www-data

FROM base AS development

USER root

ARG UID
ARG GID

COPY --chmod=0755 entrypoint-php.sh /etc/entrypoint.d/20-php-entrypoint.sh

RUN docker-php-serversideup-set-id www-data $UID:$GID && \
    docker-php-serversideup-set-file-permissions --owner $UID:$GID --service nginx && \
    install-php-extensions pcov xdebug

USER www-data

FROM base AS production

COPY --chown=www-data:www-data . /var/www/html
