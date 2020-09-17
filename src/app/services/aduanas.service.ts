import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GUERRERO, CDMX, COAHUILA, NUEVO_LEON, TAMAULIPAS, QUINTANA_ROO, BAJA_CALIFORNIA, BAJA_CALIFORNIA_SUR, MEXICO, QUERETARO, AGUASCALIENTES, OAXACA, VERACRUZ, SONORA, MICHOACAN, YUCATAN, JALISCO, GUANAJUATO, TABASCO, COLIMA, CAMPECHE, PUEBLA, CHIHUAHUA, CHIAPAS, SINALOA, Aduanas } from '../models/aduanas.model';

@Injectable({
  providedIn: 'root'
})
export class AduanasService {

  aduanas: Aduanas[]

  url: string = 'http://192.168.0.93:5000'
  constructor(private http: HttpClient) { }

  
  GetGuerrero():Observable<GUERRERO> {
    return this.http.get<GUERRERO>(`${this.url}/GUERRERO`);
  }

  GetCDMX():Observable<CDMX> {
    return this.http.get<CDMX>(`${this.url}/CDMX`);
  }

  GetCOAHUILA():Observable<COAHUILA> {
    return this.http.get<COAHUILA>(`${this.url}/COAHUILA`);
  }

  GetNL():Observable<NUEVO_LEON> {
    return this.http.get<NUEVO_LEON>(`${this.url}/NUEVO_LEON`);
  }

  GetTAM():Observable<TAMAULIPAS> {
    return this.http.get<TAMAULIPAS>(`${this.url}/TAMAULIPAS`);
  }
  GetQROO():Observable<QUINTANA_ROO> {
    return this.http.get<QUINTANA_ROO>(`${this.url}/QUINTANA_ROO`);
  }
  GetBJ():Observable<BAJA_CALIFORNIA> {
    return this.http.get<BAJA_CALIFORNIA>(`${this.url}/BAJA_CALIFORNIA`);
  }

  GetBJS():Observable<BAJA_CALIFORNIA_SUR> {
    return this.http.get<BAJA_CALIFORNIA_SUR>(`${this.url}/BAJA_CALIFORNIA_SUR`);
  }

  GetMEX():Observable<MEXICO> {
    return this.http.get<MEXICO>(`${this.url}/MEXICO`);
  }

  GetQRO():Observable<QUERETARO> {
    return this.http.get<QUERETARO>(`${this.url}/QUERETARO`);
  }
  GetAGCS():Observable<AGUASCALIENTES> {
    return this.http.get<AGUASCALIENTES>(`${this.url}/AGUASCALIENTES`);
  }
  GetOAX():Observable<OAXACA> {
    return this.http.get<OAXACA>(`${this.url}/OAXACA`);
  }
  GetVER():Observable<VERACRUZ> {
    return this.http.get<VERACRUZ>(`${this.url}/VERACRUZ`);
  }
  GetSON():Observable<SONORA> {
    return this.http.get<SONORA>(`${this.url}/SONORA`);
  }
  GetMICH():Observable<MICHOACAN> {
    return this.http.get<MICHOACAN>(`${this.url}/MICHOACAN`);
  }
  GetYUC():Observable<YUCATAN> {
    return this.http.get<YUCATAN>(`${this.url}/YUCATAN`);
  }
  GetJAL():Observable<JALISCO> {
    return this.http.get<JALISCO>(`${this.url}/JALISCO`);
  }
  GetGUA():Observable<GUANAJUATO> {
    return this.http.get<GUANAJUATO>(`${this.url}/GUANAJUATO`);
  }
  GetTAB():Observable<TABASCO> {
    return this.http.get<TABASCO>(`${this.url}/TABASCO`);
  }
  GetCOL():Observable<COLIMA> {
    return this.http.get<COLIMA>(`${this.url}/COLIMA`);
  }
  GetCAMP():Observable<CAMPECHE> {
    return this.http.get<CAMPECHE>(`${this.url}/CAMPECHE`);
  }
  GetPUE():Observable<PUEBLA> {
    return this.http.get<PUEBLA>(`${this.url}/PUEBLA`);
  }
  GetCHIH():Observable<CHIHUAHUA> {
    return this.http.get<CHIHUAHUA>(`${this.url}/CHIHUAHUA`);
  }
  GetCHIAP():Observable<CHIAPAS> {
    return this.http.get<CHIAPAS>(`${this.url}/CHIAPAS`);
  }
  GetSIN():Observable<SINALOA> {
    return this.http.get<SINALOA>(`${this.url}/SINALOA`);
  }



  




  



  
  



  

  

  

  // getAduanas(){

  //   this.http.get('http://localhost:3000/aduanas')
  //   .subscribe ( res =>{
  //     // console.log(res);
  //   });
  // }
}
