"use strict";
exports.__esModule = true;
var objetoCarro_1 = require("./objetoCarro");
var c1; //declarar "referencia"
var c2;
c1 = new objetoCarro_1.Carro(); //alocou memoria
c2 = new objetoCarro_1.Carro();
//preencher dados
c1.ano = 1968;
c1.modelo = "Fusca";
c1.placa = "ABC1234";
c1.ligado = false;
c1.cor = "preto";
c2.ano = 2019;
c2.modelo = "Jeep";
c2.placa = "BRA2019";
c2.ligado = true;
c2.cor = "branco";
//manipulação de operações
console.log(c1.getInfo());
c1.andar();
c1.parar();
console.log(c2.getInfo());
c2.andar();
c2.parar();
console.log(c1.getInfo());
console.log(c2.getInfo());
