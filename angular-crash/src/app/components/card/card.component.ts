import { Component, Input, OnInit } from '@angular/core';
import { Transactions } from 'src/app/transactions';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() transactions!: Transactions[]; 
  types: string[] = ["Income", "Investment", "Outcome", "Loan"];
  constructor() { }

  ngOnInit(): void {
  }

}
