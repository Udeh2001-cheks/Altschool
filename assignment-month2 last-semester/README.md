MuchToDo API
A RESTful ToDo API built with Go, containerized with Docker and deployed on Kubernetes with JWT authentication and MongoDB storage.
Features
User registration & login
JWT authentication
Create, read, update, delete ToDos
Docker containerization
Kubernetes deployment
NodePort & Ingress access
Environment Variables
Copy code

MONGO_URI=mongodb://mongodb:27017
JWT_SECRET_KEY=your_secret_key
PORT=9090
Run Locally
Copy code
Bash
go mod tidy
go run ./cmd/api/main.go
Test:
Copy code
Bash
curl http://localhost:9090/health
Docker
Build Image
Copy code
Bash
./scripts/docker-build.sh
Run with Docker Compose
Copy code
Bash
./scripts/docker-run.sh
Kubernetes Deployment
Deploy to Cluster
Copy code
Bash
./scripts/k8s-deploy.sh
Check Status
Copy code
Bash
kubectl get pods -n muchtodo
kubectl get svc -n muchtodo
kubectl get ingress -n muchtodo
Access
NodePort: http://<NODE_IP>:30080
Ingress: http://muchtodo.local
API Endpoints
Auth
POST /auth/register – create user
POST /auth/login – get JWT token
ToDos (Protected)
POST /todos/ – create
GET /todos/ – list
PUT /todos/{id} – update
DELETE /todos/{id} – delete
Header required:
Copy code

Authorization: Bearer <TOKEN>
Cleanup
Copy code
Bash
./scripts/k8s-cleanup.sh
Summary
API working with JWT
Docker image built
Kubernetes deployment successful
CRUD operations tested
NodePort & Ingress validated
Author: Agatha Udeh
