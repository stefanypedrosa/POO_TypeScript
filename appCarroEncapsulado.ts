import {Carro} from "./objetoCarroEncapsulado";

//declarar "referencia"
let c1:Carro;
let c2:Carro;
//alocou memoria
c1 = new Carro();
c2 = new Carro();
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