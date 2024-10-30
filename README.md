# Rock-Paper-Scissors

This repository contains the implementation of a Rock-Paper-Scissors game, along with a CI/CD pipeline to build, test, and deploy the application using GitHub Actions.

## Table of Contents

- [Description](#description)
- [Setup](#setup)
- [Usage](#usage)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)


## Description

The Rock-Paper-Scissors game is a simple implementation of the classic hand game. This repository includes:
- An Html CSS and JavaScript 
- A Dockerfile to containerize the application.
- deployment on EKS Cluster on AWS include Nginx ingress controller .
- Helm charts for deploying the application to a Kubernetes cluster.
- GitHub Actions workflows for continuous integration and deployment.
- ArgoCD for Continuous Delivery

## Setup

### Prerequisites

- Docker
- Kubernetes
- Helm
- Git

### Clone the Repository

```sh
git clone https://github.com/dormicha/Rock-Paper-Scissors.git
cd Rock-Paper-Scissors
Build the Docker Image
docker build -t your-dockerhub-username/rock-paper-scissors:latest .
Push the Docker Image
docker push your-dockerhub-username/rock-paper-scissors:latest
Deploy to Kubernetes
run aws configure on your cli
eksctl create cluster --name rock-paper-scissors --region us-east-1
Install Nginx Ingress Controller by this command :
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.11.1/deploy/static/provider/aws/deploy.yaml
this is for create an ingress controller for the ingress and creating LB on AWS 
helm install rock-paper-scissors helm/rock-paper-scissors-chart
Usage
To play the Rock-Paper-Scissors game, access the application through the URL provided by your Kubernetes cluster. You can interact with the game via the web interface.

CI/CD Pipeline
This repository uses GitHub Actions for CI/CD. The workflow is defined in the .github/workflows/ci.yaml file and includes the following steps:

Build and push the Docker image to DockerHub.
Lint the Dockerfile to ensure it follows best practices.
Update the tag in the Helm chart with the new Docker image tag.
Triggers
The workflow is triggered on:

Push events to the master branch, excluding changes to helm/**, k8s/**, and README.md.
You can also manually trigger the workflow using the workflow_dispatch event.

Environment Variables and Secrets
The following secrets need to be configured in your GitHub repository:

DOCKERHUB_USERNAME: Your DockerHub username.
DOCKERHUB_TOKEN: Your DockerHub access token.
TOKEN: A GitHub token with permissions to push changes to the repository.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

ArgoCD:
install by those command :
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

then access the ArgoCD UI:
kubectl patch svc argocd-server -n argocd -p '{"spec": {"type": "LoadBalancer"}}'

Get the LB service IP:
kubectl get svc argocd-server -n argocd
the user name is admin , the password located in kubectl get secerts -n argocd --> kubcetl edit argo-cd-initial-admin-secert -n argocd
take the password and decode it by the command --> echo <password> | base64 --decode 

License
This project is licensed under the MIT License - see the LICENSE file for details.


Feel free to customize this README file as needed to better fit the specifics of your project and any additional details you may want to include.
