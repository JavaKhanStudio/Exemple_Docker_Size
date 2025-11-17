import http from 'node:http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello depuis une image minimale !");
});

server.listen(3000, () => {
    console.log("Serveur en cours d'exécution sur http://localhost:3000");
});
