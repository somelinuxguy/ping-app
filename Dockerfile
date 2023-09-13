# Download base image ubuntu 20.04
FROM ubuntu:20.04
 
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