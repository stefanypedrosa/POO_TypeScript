"use strict";
exports.__esModule = true;
var objetoCarroEncapsulado_1 = require("./objetoCarroEncapsulado");
//declarar "referencia"
var c1;
var c2;
//alocou memoria
c1 = new objetoCarroEncapsulado_1.Carro();
c2 = new objetoCarroEncapsulado_1.Carro();
//preencher dados
c1.setAno(1968);
c1.setModelo("Fusca");
c1.setPlaca("ABC1234");
c1.getLigado();
c1.setCor("preto");
c2.setAno(2019);
c2.setModelo("Jeep");
c2.setPlaca("BRA2019");
c2.getLigado();
c2.setCor("branco");
//manipulação de operações
console.log(c1.getInfo());
c1.andar();
c1.parar();
console.log(c2.getInfo());
c2.andar();
c2.parar();
