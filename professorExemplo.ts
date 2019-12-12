import {Pessoa} from "./exemploHeranca"

export class Professor extends Pessoa{
    private horaAula: number;
    private qtdeHoras: number;
    private formacao:string;

    public setHAula(aula:number):void{
        this.horaAula = aula;
    }
    public getHAula():number{
        return this.horaAula
    }

    public setQHoras(horas:number):void{
        this.qtdeHoras = horas;
    }
    public getQHoras():number{
        return this.qtdeHoras;
    }

    public setFormacao(formacao:string):void{
        this.formacao = formacao;
    }
    public getFormacao():string{
        return this.formacao;
    }
}