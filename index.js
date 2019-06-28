const express = require('express');

const server = express();

const users = ['Thalysson Nascimento', 'Julio Morais', 'Carlos Barbosa'];

server.get('/', (req, res) => {
    return res.json({ message: "API 1.0" });
})

server.get('/user', (req, res) => {
    return res.json({ users });
})

server.listen("Rodando na porta 5000", 5000)