import { Pessoa } from "./exemploHeranca";
import { Aluno } from "./alunoExemplo";
import { Professor } from "./professorExemplo";

var p: Pessoa;
p = new Pessoa();

p.setCod(10);
p.setNome("Maria");
p.setEmail("maria@gmail.com");
p.setTelefone(598743265);

var a:Aluno;
a = new Aluno();

a.setCod(11);
a.setNome("Alice");
a.setEmail("alice@gmail.com");
a.setTelefone(986531472);
a.setCurso("Java Jr");
a.setAnoMat(2019);

var prof:Professor;
prof = new Professor();

prof.setCod(12);
prof.setNome("Isidro");
prof.setEmail("isi@isidro.com");
prof.setTelefone(325794586);
prof.setHAula(200);
prof.setQHoras(5);
prof.setFormacao("tecnologia")


console.log(p);
console.log(a);
console.log(prof);

console.log(p.getInfo());
console.log(a.getInfo());
console.log(a.getInfoAluno());
console.log(prof.getInfo());
console.log(prof.getInfoProf());