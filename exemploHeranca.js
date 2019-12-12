"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.setCod = function (cod) {
        this.codigo = cod;
    };
    Pessoa.prototype.getCod = function () {
        return this.codigo;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setEmail = function (email) {
        this.email = email;
    };
    Pessoa.prototype.getEmail = function () {
        return this.email;
    };
    Pessoa.prototype.setTelefone = function (tel) {
        this.telefone = tel;
    };
    Pessoa.prototype.getTelefone = function () {
        return this.telefone;
    };
    Pessoa.prototype.getInfo = function () {
        var info;
        info = "\nCodigo: " + this.codigo + "\nNome: " + this.nome + " \nEmail: " + this.email + " \nTelefone: " + this.telefone;
        return info;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
