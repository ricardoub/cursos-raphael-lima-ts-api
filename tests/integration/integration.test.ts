import * as HTTPStatus from 'http-status';
import { app, request, expect } from './config/helpers';

describe('Testes de Integração', () => {

  'use strict';
  const config = require('../../server/config/env/config')();
  const model  = require('../../server/models');

  let id;

  const userTest = {
    id: 100,
    name: 'Usuário Teste',
    email: 'teste@email.com',
    password: 'teste'
  };

  const userDefault = {
    id: 1,
    name: 'Default User',
    email: 'default@email.com',
    password: 'default'
  };

  beforeEach((done) => {
    model.User.destroy({
      where: {}
    })
    .then(() => {
      return model.User.create(userDefault);
    })
    .then(user => {
      model.User
        .create(userTest)
        .then(() => {
          done();
        })
    })
  });

  describe('GET /api/users/all', () => {
    it('Deve retornar um JSON com todos os usuários', done => {
      request(app)
        .get('/api/users/all')
        .end((error,res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          done(error);
        });
    });
  });

  describe('GET /api/users/:id', () => {
    it('Deve retornar um JSON apenas um usuário', done => {
      request(app)
        .get(`/api/users/${userDefault.id}`)
        .end((error,res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.payload.id).to.equal(userDefault.id);
          expect(res.body.payload).to.have.all.keys([
            'id', 'name', 'email', 'password'
          ]);
          id = res.body.payload.id;
          done(error);
        })
    });
  });

  describe('POST /api/users/create', () => {
    it('Deve criar um novo usuário', done => {
      const user = {
        id: 2,
        name: 'Usuario Teste',
        email: 'usuario@email.com',
        password: 'novouser'
      }
      request(app)
        .post('/api/users/create')
        .send(user)
        .end((error,res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.payload.id).to.eql(user.id);
          expect(res.body.payload.name).to.eql(user.name);
          expect(res.body.payload.email).to.eql(user.email);
          done(error);
        })
    });
  });

  describe('PUT /api/users/:id/update', () => {
    it('Deve atualizar um usuário', done => {
      const user = {
        id: 2,
        name: 'TesteUpdate',
        email: 'update@email.com'
      }
      request(app)
        .put(`/api/users/${userTest.id}/update`)
        .send(user)
        .end((error,res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.payload.id).to.eql(user.id);
          expect(res.body.payload.name).to.eql(user.name);
          expect(res.body.payload.email).to.eql(user.email);
          done(error);
        })
    });
  });

  describe('DELETE /api/users/:id/destroy', () => {
    it('Deve deletar um usuário', done => {
      request(app)
        .delete(`/api/users/${1}/destroy`)
        .end((error,res) => {
          expect(res.status).to.equal(HTTPStatus.OK);
          expect(res.body.payload).to.eql(1);
          done(error);
        })
    });
  });

});
