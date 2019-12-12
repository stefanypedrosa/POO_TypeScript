import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    private lugares: number;

    public setLugares(lug:number):void{
        this.lugares = lug;
    }
    public getLugares():number{
        return this.lugares;
    }
}