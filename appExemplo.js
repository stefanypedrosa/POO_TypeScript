"use strict";
exports.__esModule = true;
var exemploHeranca_1 = require("./exemploHeranca");
var alunoExemplo_1 = require("./alunoExemplo");
var professorExemplo_1 = require("./professorExemplo");
var p;
p = new exemploHeranca_1.Pessoa();
p.setCod(10);
p.setNome("Maria");
p.setEmail("maria@gmail.com");
p.setTelefone(598743265);
var a;
a = new alunoExemplo_1.Aluno();
a.setCod(11);
a.setNome("Alice");
a.setEmail("alice@gmail.com");
a.setTelefone(986531472);
a.setCurso("Java Jr");
a.setAnoMat(2019);
var prof;
prof = new professorExemplo_1.Professor();
prof.setCod(12);
prof.setNome("Isidro");
prof.setEmail("isi@isidro.com");
prof.setTelefone(325794586);
prof.setHAula(200);
prof.setQHoras(5);
prof.setFormacao("tecnologia");
console.log(p);
console.log(a);
console.log(prof);