import { Injectable } from '@angular/core';
import { AduanasService } from './aduanas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

   getInfoAduanas(){
    return this.http.get(`${this.url}${this.id.value}`)
    .subscribe ( res =>{
      console.log(res);
    });
  }
}
