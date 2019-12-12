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

    public getInfoProf():string{
        var info:string;
        info = `HoraAula: R$${this.horaAula} \nQuantidade de horas: ${this.qtdeHoras}h \nArea de formacao: ${this.formacao}` 
        return info;
    }
}