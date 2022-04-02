import { Component } from '@angular/core';
import { Transactions } from 'src/app/transactions';
import { TRANSACTIONS } from 'src/app/mock-transactions';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-crash';
  transactions: Transactions[] = TRANSACTIONS;
}
