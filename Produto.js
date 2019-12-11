"use strict";
/*
    cod:number
    nome:string
    detalhes:string
    preco:number
    qtdeEstoque:number
    linkFoto:string
    freteGratis:boolean
*/
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(_cod, _nome, _det, _preco, _qtde, _foto) {
        this.cod = _cod;
        this.nome = _nome;
        this.detalhes = _det;
        this.preco = _preco;
        this.qtdeEstoque = _qtde;
        this.linkFoto = _foto;
        this.freteGratis = true;
    }
    Produto.prototype.getCod = function () {
        return this.cod;
    };
    Produto.prototype.setCod = function (_cod) {
        this.cod = _cod;
    };
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.setNome = function (_nome) {
        this.nome = _nome;
    };
    Produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    Produto.prototype.setDetalhes = function (_detalhes) {
        this.detalhes = _detalhes;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    Produto.prototype.setPreco = function (_preco) {
        this.preco = _preco;
    };
    Produto.prototype.getEstoque = function () {
        return this.qtdeEstoque;
    };
    Produto.prototype.setEstoque = function (_qtde) {
        this.qtdeEstoque = _qtde;
    };
    Produto.prototype.getFoto = function () {
        return this.linkFoto;
    };
    Produto.prototype.setFoto = function (_foto) {
        this.linkFoto = _foto;
    };
    Produto.prototype.getFrete = function () {
        return this.freteGratis;
    };
    Produto.prototype.frete = function (preco) {
        var frete;
        if (preco >= 20) {
            this.freteGratis = true;
        }
        if (this.freteGratis) {
            frete = "Ebbbaaaa, tem Frete Grátis";
        }
        else {
            frete = "Que pena, não tem Frete Grátis";
        }
        return frete;
    };
    Produto.prototype.getInfo = function () {
        var info = " Cod: " + this.cod + " \n Produto: " + this.nome + " \n Detalhes: " + this.detalhes + " \n Pre\u00E7o: R$" + this.preco + " \n Quantos? " + this.qtdeEstoque + " \n " + this.frete(this.preco) + " \n";
        return info;
    };
    return Produto;
}());
exports.Produto = Produto;
