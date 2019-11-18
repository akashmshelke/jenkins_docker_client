#!/bin/bash

# download the node modules
npm install
ng build --prod

# remove the container if exists or running 
if [ $(docker container ls -q -a --filter name=my_client_container) != '' ]; then
    docker container stop my_client_container
    docker container rm my_client_container
fi

# remove the image if exists
if [ $(docker image ls -q --filter reference=my_client) != '' ]; then
    docker image rm my_client
fi

# build the image
docker build -t my_client .

# start the container
docker run -itd -p 8888:80 --name my_client_container my_client
