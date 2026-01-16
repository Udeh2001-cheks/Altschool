#!/bin/bash

echo "Removing Kubernetes resources..."

kubectl delete -f ../kubernetes/backend/ --ignore-not-found
kubectl delete -f ../kubernetes/mongodb/ --ignore-not-found
kubectl delete -f ../kubernetes/namespace.yaml --ignore-not-found

echo "Cleanup completed"
