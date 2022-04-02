import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardComponent } from './components/card/card.component';
import { TabComponent } from './components/tab/tab.component';

const appRoutes: Routes = [
  {path: '', component: CardComponent},
  {path: 'navigator', component: TabComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardItemComponent,
    CardComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
