#!/bin/bash

echo "Building MuchToDo Docker image..."

docker build -t muchtodo-backend:1.0 ..

echo "Loading image into Kind cluster..."

kind load docker-image muchtodo-backend:1.0 --name muchtodo

echo "Build completed successfully"
