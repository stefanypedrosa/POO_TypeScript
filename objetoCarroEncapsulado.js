"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    //placa    
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        if (_placa.length != 7) {
            console.log("Placa inválida");
        }
        else {
            this.placa = _placa;
        }
    };
    //cor
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
    };
    //modelo
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    //ano
    Carro.prototype.setAno = function (_ano) {
        if (_ano < 1850 || _ano > 2020) {
            console.log("Ano inválido");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    //ligado
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
    Carro.prototype.andar = function () {
        if (this.ligado != true) {
            console.log("O carro está desligado, precisa ser ligado antes");
            this.ligar();
        }
        console.log("O carro " + this.modelo + "(placa:" + this.placa + ") do ano " + this.ano + " est\u00E1 ligado.");
        console.log("O carro " + this.modelo + "(placa:" + this.placa + ") do ano " + this.ano + " est\u00E1 andando...");
    };
    Carro.prototype.parar = function () {
        console.log("O carro " + this.modelo + "(placa:" + this.placa + ") do ano " + this.ano + " parou, agora precisa desligar.");
        this.desligar();
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
    };
    Carro.prototype.desligar = function () {
        if (this.ligado == true) {
            this.ligado = false;
        }
        console.log("O carro " + this.modelo + "(placa:" + this.placa + ") do ano " + this.ano + " est\u00E1 desligado.\n");
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "Carro: " + this.modelo + " | " + this.ano + " | " + this.placa + " | " + this.cor + " \n";
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
