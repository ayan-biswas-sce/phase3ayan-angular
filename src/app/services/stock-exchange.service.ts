import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/Company';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StockExchange } from '../models/StockExchange';

const BACKEND_URL = environment.apiUrl + 'stockexchanges/';

@Injectable({providedIn: 'root'})
export class StockExchangeService {

  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = BACKEND_URL;
  }

  getStockExchanges(): Observable<StockExchange[]> {
    console.log("Hello");
    console.log(this.http.get<StockExchange[]>(this.url));
    return this.http.get<StockExchange[]>(this.url);
  }

  getStockExchange(id: string): Observable<StockExchange> {
    return this.http.get<StockExchange>(this.url + id);
  }

  getStockExchangeCompanies(id: string): Observable<Company[]> {
    return this.http.get<Company[]>(this.url + id + "/companies");
  }

  addStockExchange(stockExchange: StockExchange) {
    this.http.post<StockExchange>(this.url, stockExchange)
      .subscribe((responseData) => {
        this.router.navigate(['/stockexchanges']);
      });
  }

  updateStockExchange(stockExchange: StockExchange) {
    this.http.put(this.url, stockExchange)
      .subscribe(response => {
        this.router.navigate(['/stockexchanges']);
      });
  }

  deleteStockExchange(id: string) {
    this.http.delete(this.url + id)
      .subscribe(response => {
        this.router.navigate(['/stockexchanges']);
      });
  }
}

