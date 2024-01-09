const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 923,
    name: 'Adn',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137)'
    },
    Image: 'image.jpg'
};

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status:200", async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');
            const props = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image'];
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            });
        });

        it("Si hay un error responde con el status: 500", async () => {
            const response = await request.get('/rickandmorty/character/3000E');
            expect(response.statusCode).toBe(500);
        });
    });


    describe("GET /rickandmorty/login", () => {
        const access = { access: true};

        it("Responde con un objeto con la propiedad acces en true si la informacion del usuario es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=adnmtz1987@gmail.com&password=panda1');
            expect(response.body).toEqual(access);
        });

        it("Responde con un objeto con la propiedad acces en false si la informacion del usuario no es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=adnmtz1987@gmail.com&password=panda123');
            access.access = false
            expect(response.body).toEqual(access);
        });
    });
    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const character = {

            }
            const response = await request.post('/rickandmorty/fav').send()
        })
    })
});