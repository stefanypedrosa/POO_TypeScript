import {Produto} from "./Produto";

let p1: Produto;
let p2: Produto;

p1 = new Produto(1, "GARRAFA TERMICA", "VERMELHA, 2L, CONSERVA 12h", 50, 2, "garrafa.png");
p2 = new Produto(2, "TUPPERWARE", "ROXA, 0.5L, NÃO CONSERVA", 25, 10, "tupperware.png");

console.log(p1.getInfo());
console.log(p2.getInfo());

console.log(p1);
console.log(p2);