import { Component, OnInit } from '@angular/core';
import { MarketService} from '../services/market.service';
import { BitcoinService} from '../services/bitcoin.service';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  constructor(public marketService:MarketService, public bitcoinService:BitcoinService) { }

  ngOnInit(): void {
  }

}
