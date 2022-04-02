import { Component, Input, OnInit } from '@angular/core';
import { Transactions } from 'src/app/transactions';
import { TRANSACTIONS } from 'src/app/mock-transactions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  transactions: Transactions[] = TRANSACTIONS;
  types: string[] = ["Income", "Investment", "Outcome", "Loan"];

  Checking = (type: string):boolean =>{
    if (type == "Investment") return true; else return false;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
