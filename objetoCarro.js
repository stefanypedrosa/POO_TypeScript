"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
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
        info = "Carro: " + this.modelo + " | " + this.ano + " | " + this.placa + " | " + this.cor + " | " + this.ligado + " \n";
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
