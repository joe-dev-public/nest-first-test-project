# Note: using --name allows us to set a container name, so that we can easily
# remove it later :¬)

PROJECT_NAME=nest-first-test-project
CONTAINER_NAME=$(PROJECT_NAME)-container
IMAGE_NAME=$(PROJECT_NAME)-image

build:
	docker build -t $(IMAGE_NAME) .

# Bind mount to watch code files and live-reload (local dev only)
# Todo: use docker-compose instead! ;¬)
up:
	docker run -d -p 127.0.0.1:8000:80 --network some-network --network-alias nest-backend-api --mount type=bind,src=./,target=/code --name $(CONTAINER_NAME) $(IMAGE_NAME)

down:
	docker rm -f $(CONTAINER_NAME)

# Doesn't feel particularly canonical to do "make logs" but whatever.
logs:
	docker logs $(CONTAINER_NAME)

bash:
	docker exec -it $(CONTAINER_NAME) bash
