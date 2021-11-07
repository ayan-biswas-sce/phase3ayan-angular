import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Companystockmap } from '../models/Companystockmap';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CompstockmapService {
  url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = environment.apiUrl;
  }
  getAllMaps(): Observable<Companystockmap[]> {
    return this.http.get<Companystockmap[]>(this.url + 'getAllMappings');
  }
  addMapping(value: Companystockmap) {
    this.http
      .post<Companystockmap>(this.url + 'mapcompanycode', value)
      .subscribe((responseData) => {
        console.log(responseData);
        this.router.navigate(['/comp-stock-map']);
      });
  }
}
