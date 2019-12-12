export class Pessoa{
    private codigo:number;
    private nome:string;
    private email: string;
    private telefone: number;

    public setCod(cod:number):void{
        this.codigo = cod;
    }
    public getCod():number{
        return this.codigo;
    }
    
    public setNome(nome:string):void{
        this.nome = nome;
    }
    public getNome():string{
        return this.nome;
    }

    public setEmail(email:string):void{
        this.email = email;
    }
    public getEmail():string{
        return this.email;
    }

    public setTelefone(tel:number):void{
        this.telefone = tel;
    }
    public getTelefone():number{
        return this.telefone;
    }
}