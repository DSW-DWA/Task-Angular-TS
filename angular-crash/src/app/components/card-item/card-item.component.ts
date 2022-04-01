import { Component, OnInit, Input } from '@angular/core';
import { Transactions } from 'src/app/transactions';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() transactions!: Transactions[];
  @Input() type!: string;
  Counting = ():number =>{
    let k:number = this.transactions.length;
    for (let i = 0; i<this.transactions.length; i++){
      if (this.transactions[i].type == this.type.toLocaleLowerCase()) k++;
    }
    return k;
  }
  constructor() { 
  }
  ngOnInit(): void {
  }

}