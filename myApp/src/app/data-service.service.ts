import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
    dataUrl = 'assets/data.json';
    public products = [

    ];
  constructor(private http: HttpClient ) { }

  load() {
      // return this.http.get(this.dataUrl);

  }

}
