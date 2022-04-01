import { Component,Input, OnInit } from '@angular/core';
import { Transactions } from 'src/app/transactions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() transactions!: Transactions[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
