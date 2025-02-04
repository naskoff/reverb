.PHONY: help
# Show this help
help:
	@cat $(MAKEFILE_LIST) | docker run --rm -i xanders/make-help

.PHONY: build
# Build docker images
build:
	@docker compose build --no-cache

.PHONY: start
# Start docker containers
start:
	@docker compose up -d

.PHONY: stop
# Stop and remove docker containers
stop:
	@docker compose down

.PHONY: terminal
# Open PHP terminal
terminal:
	docker compose exec php sh
