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

  //create Array of type name 
  types: string[] = ["Income", "Investment", "Outcome", "Loan"];

  constructor() { }
  ngOnInit(): void {
  }

}
