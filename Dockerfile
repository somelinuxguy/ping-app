# Testing locally?
# Here's a cheat sheet to help you!
# docker buildx build --platform=linux/amd64 -t "12345.dkr.ecr.us-east-1.amazonaws.com/composer:latest" .
# aws ecr get-login-password --region us-east-1 |docker login --username AWS --password-stdin 12345.dkr.ecr.us-east-1.amazonaws.com/ping
# docker push 12345.dkr.ecr.us-east-1.amazonaws.com/composer:latest

# Download base image ubuntu 20.04
FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=noninteractive

# Update Software repository
WORKDIR /opt/api
RUN apt-get update \
&& apt-get install -y nodejs npm git \
&& rm -rf /var/lib/apt/lists/*
COPY . /opt/api/
RUN npm install


# Expose ports because reasons.
# Reminder - K8s overrides this.
EXPOSE 9001
CMD [ "npm", "start" ]
