import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AduanasService {

  markerId = new BehaviorSubject<any>(null);



  idFromMap: any;
  
  constructor() { }

  getId(id: string) {
    this.markerId.next(id);
  }




  

  


  




  



  
  



  

  

  

  
}
