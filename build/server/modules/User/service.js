"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface");
var model = require('../../models');
var User = (function () {
    function User() {
    }
    User.prototype.create = function (user) {
        return model.User.create(user);
    };
    User.prototype.getAll = function () {
        return model.User.findAll({
            order: ['name']
        })
            .then(interface_1.createUsers);
    };
    User.prototype.getById = function (id) {
        return model.User.findOne({
            where: { id: id }
        })
            .then(interface_1.createUserById);
    };
    User.prototype.getByEmail = function (email) { };
    User.prototype.update = function (id, user) { };
    User.prototype.delete = function (id) { };
    return User;
}());