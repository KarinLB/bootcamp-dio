import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPagesComponent } from './dashboard-pages/dashboard-pages.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    DashboardPagesComponent,
    StockCardComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class DashboardModule { }
