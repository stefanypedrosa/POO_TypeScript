export class Carro{         //tornar public
    placa: string;
    cor: string;
    modelo: string;
    ano: number;
    ligado: boolean;
    
    andar(): void{
        if(this.ligado != true){
            console.log("O carro está desligado, precisa ser ligado antes");
            this.ligar();
        }
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} está ligado.`)
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} está andando...`);
    }

    parar(): void{
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} parou, agora precisa desligar.`);
        this.desligar();
    }

    ligar():void{
        this.ligado = true;
    }

    desligar():void{
        if(this.ligado == true){
            this.ligado = false;
        }
        console.log(`O carro ${this.modelo}(placa:${this.placa}) do ano ${this.ano} está desligado.\n`)
    }

    getInfo():string{
        var info: string;
        info = `Carro: ${this.modelo} | ${this.ano} | ${this.placa} | ${this.cor} | ${this.ligado} \n`;
        return info;
    }
}