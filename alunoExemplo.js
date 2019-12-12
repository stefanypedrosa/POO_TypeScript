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
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aluno.prototype.setCurso = function (curso) {
        this.curso = curso;
    };
    Aluno.prototype.getCurso = function () {
        return this.curso;
    };
    Aluno.prototype.setAnoMat = function (ano) {
        this.anoMatricula = ano;
    };
    Aluno.prototype.getAnoMat = function () {
        return this.anoMatricula;
    };
    return Aluno;
}(exemploHeranca_1.Pessoa));
exports.Aluno = Aluno;
