"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe('Testes de Integração', function () {
    describe('GET /api/users/all', function () {
        it('Deve retornar um JSON com todos os usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retornar um JSON apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('POST /api/users/new', function () {
        it('Deve criar um novo usuário', function (done) {
            var user = {
                nome: 'Teste'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/new')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('put /api/users/:id/edit', function () {
        it('Deve atualizar um usuário', function (done) {
            var user = {
                nome: 'TesteUpdate'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1 + "/edit")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
    describe('DELETE /api/users/:id', function () {
        it('Deve deletar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(200);
            });
        });
    });
});