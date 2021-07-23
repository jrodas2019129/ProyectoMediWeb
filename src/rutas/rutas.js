'use strict'

var express = require("express");
var md_autorizacion = require("../middlewares/authenticated.js");
var api = express.Router();
var usuarioControlador = require("../controlador/usuario.controlador");

// Funciones Controlador Usuarios
api.post("/login", usuarioControlador.login);
api.post('/registrarUsuario', usuarioControlador.registrarUsuario)
api.put('/editarUsuario/:id', usuarioControlador.editarUsuario)
api.delete('/eliminarUsuario/:id', usuarioControlador.eliminarUsuario)

module.exports = api;