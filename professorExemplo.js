"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var exemploHeranca_1 = require("./exemploHeranca");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.setHAula = function (aula) {
        this.horaAula = aula;
    };
    Professor.prototype.getHAula = function () {
        return this.horaAula;
    };
    Professor.prototype.setQHoras = function (horas) {
        this.qtdeHoras = horas;
    };
    Professor.prototype.getQHoras = function () {
        return this.qtdeHoras;
    };
    Professor.prototype.setFormacao = function (formacao) {
        this.formacao = formacao;
    };
    Professor.prototype.getFormacao = function () {
        return this.formacao;
    };
    Professor.prototype.getInfoProf = function () {
        var info;
        info = "HoraAula: R$" + this.horaAula + " \nQuantidade de horas: " + this.qtdeHoras + "h \nArea de formacao: " + this.formacao + " \nValor a receber: R$ " + this.horaAula * this.qtdeHoras;
        return info;
    };
    return Professor;
}(exemploHeranca_1.Pessoa));
exports.Professor = Professor;
