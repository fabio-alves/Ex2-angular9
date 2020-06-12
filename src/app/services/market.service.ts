import { Injectable } from '@angular/core';
import { BitcoinService} from "./bitcoin.service"

@Injectable({
  providedIn: 'root'
})


export class MarketService {

  coin:any = 1;
  portion:number = 0;
  // historicMarket: Array<Historic> = [];
  constructor(public bitcoinService: BitcoinService) { }

  

   simulate(money:any){
    console.log("UPDATELIST:>",this.bitcoinService.updateList);
    const price = this.bitcoinService.updateList[0].USD;
    console.log("money:", money)
    this.portion = money/price; 
    console.log("Porção",this.portion);
  }

  buyCoin(money:any){
   var portion = this.simulate(money);
   var saldo = this.coin = this.coin+portion;
  return  saldo;

  };
 
}
