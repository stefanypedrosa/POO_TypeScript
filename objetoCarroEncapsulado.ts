export class Carro{         //tornar public
    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private ligado: boolean;
    
//placa    
    public getPlaca():string{
        return this.placa;
    }
    public setPlaca(_placa:string):void{
        if(_placa.length != 7){
            console.log("Placa inválida");
        }
        else{
        this.placa = _placa;
        }
    }
//cor
    public getCor():string{
        return this.cor;
    }
    public setCor(_cor:string):void{
        this.cor = _cor;
    }
//modelo
    public getModelo():string{
        return this.modelo;
    }
    public setModelo(_modelo:string):void{
        this.modelo = _modelo;
    }
//ano
    public setAno(_ano:number):void{
        if(_ano<1850 || _ano>2020){
            console.log("Ano inválido");
        }
        else{
        this.ano = _ano;
        }
    }
    public getAno():number{
        return this.ano;
    }
//ligado
    public getLigado():boolean{
        return this.ligado;
    }

    public andar(): void{
        if(this.ligado != true){
            console.log("O carro está desligado, precisa ser ligado antes");
            this.ligar();
        }
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} está ligado.`)
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} está andando...`);
    }

    public parar(): void{
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} parou, agora precisa desligar.`);
        this.desligar();
    }

    public ligar():void{
        this.ligado = true;
    }

    public desligar():void{
        if(this.ligado == true){
            this.ligado = false;
        }
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} está desligado.\n`)
    }

    public getInfo():string{
        var info: string;
        info = `Carro: ${this.modelo} | ${this.ano} | ${this.placa} | ${this.cor} \n`;
        return info;
    }
}