import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-pages',
  templateUrl: './dashboard-pages.component.html',
  styleUrls: ['./dashboard-pages.component.css']
})
export class DashboardPagesComponent implements OnInit {

  stocks: Stock [] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void>{
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);
  }
}
