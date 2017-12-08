"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
describe('Testes Unitários do Controller', function () {
    // describe('Método Create', () => {
    //   it('Deve criar um novo Usuário', () => {
    //     const novoUsuario = {
    //       id: 1,
    //       name: 'Novo Usuario',
    //       email: 'novousuario@email.com',
    //       password: '1234'
    //     };
    //
    //     const user = new User();
    //
    //     return user.create(novoUsuario)
    //               .then(data => {
    //                 expect(data.dataValues).to.have.all.keys(
    //                   ['email','id','name','password','updatedAt','createdAt']
    //                 )
    //               });
    //   });
    // });
    //
    // describe('Método Update', () => {
    //   it('Deve atualizar um Usuário', () => {
    //
    //   })
    // });
    //
    describe('Método Get Users', function () {
        it('Deve retornar uma lista com todos os Usuários', function () {
            var user = new service_1.default();
            return user.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    //
    // describe('Método Delete', () => {
    //   it('Deve deletar um Usuário', () => {
    //
    //   })
    // });
});
