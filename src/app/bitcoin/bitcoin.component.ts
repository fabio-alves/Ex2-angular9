import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../services/bitcoin.service'

interface Response{
  time: {updated: string;};
  disclaimer: string;
  bpi: {
    USD:{
      symbol: string;
      description: string;
      rate_float:number;
    };
    EUR:{
      symbol:string;
      description; string;
      rate_float:number;
    }
};
};

interface PriceUpdate{
  timestamp: Date;
  USD: number;
  EUR: number;
 // BR: number;
}

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {


  constructor( public bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.update();
  }

  getCurrentPrice(){
    return this.bitcoinService.currentPrice
  }
update(){
 this.bitcoinService.update();
}
}
