Construire le projet
npm install

Construire ton image
docker build -t minimal-node .

Voir la taille de l’image
docker image ls minimal-node

Lancer la container
docker run -p 3000:3000 minimal-node

Effacer Image
docker rmi -f minimal-node