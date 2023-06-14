const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
let puerto = 3100;

const URL = "mongodb://root:example@172.20.0.2:27017/"; //url de coneccion a Mongodb

app.use(express.urlencoded({ extended: true }))

app.use(express.json({ type: "*/*" }))

app.use(cors())

const cliente = new MongoClient(URL);

const dbnombre = "users";
const coleccion = "usuarios";
let DB_coleccion = cliente.db(dbnombre).collection(coleccion); //node_prueba.Usuarios

let usuario = {
    "llego":"fasfdsa"
}

app.get('/Crear_Usuario', async function Main(req,res) {
    try {
    
        let insertar_usuario = await DB_coleccion.insertOne(usuario);
        console.log("id del usuario recien creado " + insertar_usuario.insertedId);
        res.send("dfafasd")
    } catch (error) {
        console.log("Ocurrio un error al crear un usuario" + error);
        res.send("error")
    }
    
})

app.listen(puerto, () => {
    console.log("el servidor esta corriendo en el puerto " + puerto);
})