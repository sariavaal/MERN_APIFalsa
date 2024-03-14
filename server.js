const express = require("express");
const { faker } = require('@faker-js/faker');
const { simpleFaker } = require('@faker-js/faker');
const app = express();
const port = 8000;

//crear clase usuario
class User {
    constructor() {
        this.id = simpleFaker.string.uuid();
        this.firstName = faker.person.firstName()
        this.lastName = faker.person.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.contrasena = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this.id = faker.string.uuid();
        this.nombre = faker.company.name();
        this.direccion = faker.location.ordinalDirection() 
        this.ciudad = faker.location.city()
        this.estado = faker.location.state()
        this.codigoPostal = faker.location.zipCode() 
        this.pais = faker.location.country()
    }
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.post("/api/users/new", (req, res) => {
    const newUser = new User();
    console.log(newUser);
    res.json({newUser: newUser});
})

app.post("/api/companies/new", (req, res) => {
    const newCompany = new Empresa();
    console.log(newCompany);
    res.json({newCompany: newCompany});
})

//Crea una ruta api "/api/user/company" que devuelva tanto un nuevo usuario como una nueva compañía
app.post("/api/user/company", (req, res) => {
    const newUser = new User();
    const newCompany = new Empresa();
    res.json({ newUser, newCompany});
})

app.listen( port, () => console.log(`Listening on port: (http://localhost:${port})` ))