import {Pessoa} from "./exemploHeranca"

export class Aluno extends Pessoa{
    private curso:string;
    private anoMatricula:number;

    public setCurso(curso:string):void{
        this.curso=curso;
    }
    public getCurso():string{
        return this.curso;
    }

    public setAnoMat(ano:number):void{
        this.anoMatricula = ano;
    }
    public getAnoMat():number{
        return this.anoMatricula;
    }
}