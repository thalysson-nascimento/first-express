const express = require('express');

const server = express();

server.get('/', (req, res) => {
    return res.json({ message: "API 1.0" });
})

server.listen("Rodando na porta 5000", 5000)