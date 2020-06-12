import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response{
  time: {updated: string;};
  disclaimer: string;
  bpi: {
    USD:{
      code: string;
      rate_float:number;
      description: string;
    };
    BRL:{
      code:string;
      rate_float:number;
      description: string;
    };
};
}

interface PriceUpdate{
  timestamp: Date;
  USD: number;
  BRL: number;
 // BR: number;
}

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  currentPrice: Response;
  lastUpdate: Date;

  updateList: Array<PriceUpdate> = [];

  constructor(public http: HttpClient) { }

  update(){
    this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
    .subscribe(data => {
      this.lastUpdate = new Date();
      this.currentPrice = data;
      this.updateList.push({
        timestamp: this.lastUpdate,
        USD: this.currentPrice.bpi.USD.rate_float,
        BRL: this.currentPrice.bpi.BRL.rate_float
      });
      this.updateList.reverse();
      console.log("DADOS: ", data);
    });
  }
}
