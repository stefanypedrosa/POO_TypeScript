/*
    cod:number
    nome:string
    detalhes:string
    preco:number
    qtdeEstoque:number
    linkFoto:string
    freteGratis:boolean
*/

export class Produto{
    private cod:number
    private nome:string
    private detalhes:string
    private preco:number
    private qtdeEstoque:number
    private linkFoto:string
    private freteGratis:boolean

    public constructor(_cod:number, _nome:string, _det:string, _preco:number, _qtde:number, _foto:string){
        this.cod = _cod;
        this.nome = _nome;
        this.detalhes = _det;
        this.preco = _preco;
        this.qtdeEstoque = _qtde;
        this.linkFoto = _foto;
        if(this.preco>=20){
            this.freteGratis = true;
        }
        else{
            this.freteGratis = false;
        }
    }

    public getCod():number{
        return this.cod;
    }
    public setCod(_cod:number):void{
        this.cod = _cod;
    }

    public getNome():string{
        return this.nome;
    }
    public setNome(_nome:string){
        this.nome = _nome;
    }

    public getDetalhes():string{
        return this.detalhes;
    }
    public setDetalhes(_detalhes:string){
        this.detalhes = _detalhes;
    }

    public getPreco():number{
        return this.preco;
    }
    public setPreco(_preco:number):void{
        this.preco = _preco;
    }

    public getEstoque():number{
        return this.qtdeEstoque;
    }
    public setEstoque(_qtde:number):void{
        this.qtdeEstoque = _qtde;
    }

    public getFoto():string{
        return this.linkFoto;
    }
    public setFoto(_foto:string){
        this.linkFoto = _foto;
    }

    public getFrete(): boolean{
        return this.freteGratis;
    }

    public frete(preco:number): string{
        var frete;
        if(this.freteGratis){
            frete = "Ebbbaaaa, tem Frete Grátis"
        }
        else{
            frete = "Que pena, não tem Frete Grátis"
        }
        return frete;
    }

    public getInfo(): string{
        var info:string = ` Cod: ${this.cod} \n Produto: ${this.nome} \n Detalhes: ${this.detalhes} \n Preço: R$${this.preco} \n Quantos? ${this.qtdeEstoque} \n ${this.frete(this.preco)} \n`;
        return info;
    }
}