import { Injectable } from '@angular/core';
import { AduanasService } from './aduanas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Aduanas } from '../models/aduanas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  id = this.aduanas.markerId;
  url: string = 'http://localhost:3000/aduanas/'
  constructor(public aduanas: AduanasService, private http: HttpClient) { }

 
  // getInfo(){
    
  //   console.log();
  // }

   getInfoAduanas():Observable<Aduanas>{
    return this.http.get<Aduanas>(`${this.url}${this.id.value}`)
  }
}
