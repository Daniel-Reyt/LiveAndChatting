#!/bin/bash

case "$1" in

init)
    echo "init :"
    cd client
    npm install
    cd ..
    cd server
    npm install
    cd ..
;;

dev)
    echo "dev :"
    docker-compose -f docker-compose-dev.yaml up --build
;;

*)

echo "Erreur $1 non reconnu"
exit 1

;;

esac
exit 0