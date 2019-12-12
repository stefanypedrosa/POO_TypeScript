export class Veiculo{
    private placa:string;
    private modelo:string;

    public setPlaca(placa:string):void{
        this.placa = placa;
    }
    public getPlaca():string{
        return this.placa;
    }

    public setModelo(modelo: string):void{
        this.modelo = modelo;
    }
    public getModelo():string{
        return this.modelo;
    }
}