# Download base image ubuntu 20.04
FROM ubuntu:20.04
 
# Update Software repository
WORKDIR /opt/api
RUN apt-get -y update 
RUN apt-get -y upgrade
RUN apt-get -y install nodejs npm git
RUN git clone https://github.com/somelinuxguy/ping.git .
RUN npm install

# Expose ports because reasons.
# Reminder - K8s overrides this.
EXPOSE 9001
CMD [ "npm", "start" ]