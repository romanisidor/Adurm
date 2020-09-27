import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GUERRERO, CDMX, COAHUILA, NUEVO_LEON, TAMAULIPAS, QUINTANA_ROO, BAJA_CALIFORNIA, BAJA_CALIFORNIA_SUR, MEXICO, QUERETARO, AGUASCALIENTES, OAXACA, VERACRUZ, SONORA, MICHOACAN, YUCATAN, JALISCO, GUANAJUATO, TABASCO, COLIMA, CAMPECHE, PUEBLA, CHIHUAHUA, CHIAPAS, SINALOA, Aduanas } from '../models/aduanas.model';

@Injectable({
  providedIn: 'root'
})
export class AduanasService {

  aduanas: Aduanas[]

  url: string = 'http://localhost/aduanas/'
  constructor(private http: HttpClient) { }

  
  GetGuerrero():Observable<GUERRERO> {
    return this.http.get<GUERRERO>(`${this.url}/GUERRERO`);
  }

  getInfoAduanas(){
    return this.http.get(`${this.url}`);
  }

  



  




  



  
  



  

  

  

  // getAduanas(){

  //   this.http.get('http://localhost:3000/aduanas')
  //   .subscribe ( res =>{
  //     // console.log(res);
  //   });
  // }
}
