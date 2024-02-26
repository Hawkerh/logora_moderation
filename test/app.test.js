const request = require('supertest');

describe("API server", () => {
    let server;

    beforeAll(() => {
        server = require('../app'); 
    });

    afterAll((done) => {
        console.log("Le serveur de test s'arrête");
        server.close(done);
    });

    // Tests pour /api/moderation/score
    describe("/api/moderation/score route", () => {
        it("retourne un score pour une entrée "
        , async () => {
            const response = await request(server).post('/api/moderation/score').send({
                text: "test",
                language: "fr"
            });
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('score');
        });

    });

    // Tests pour /api/moderation/predict
    describe("/api/moderation/predict route", () => {
        it("retourne une prédiction pour une entrée "
        ,
         async () => {
            const response = await request(server).post('/api/moderation/predict').send({
                text: "test",
                language: "fr"
            });
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('prediction');
        });

    });

});
