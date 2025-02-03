FROM serversideup/php:8.4-fpm-nginx-alpine AS base

WORKDIR /var/www/html

USER root

RUN install-php-extensions bcmath intl opcache

USER www-data

FROM base AS development

USER root

ARG UID
ARG GID

RUN docker-php-serversideup-set-id www-data $UID:$GID && \
    docker-php-serversideup-set-file-permissions --owner $UID:$GID --service nginx && \
    install-php-extensions pcov

USER www-data

FROM base AS production

COPY --chown=www-data:www-data . /var/www/html
