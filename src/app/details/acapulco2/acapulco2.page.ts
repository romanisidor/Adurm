import { Component, OnInit } from '@angular/core';
// import { GUERRERO } from '../../models/aduanas.model';
import { AduanasService } from '../../services/aduanas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acapulco2',
  templateUrl: './acapulco2.page.html',
  styleUrls: ['./acapulco2.page.scss'],
})
export class Acapulco2Page implements OnInit {
  // customs: GUERRERO;
  constructor(private aduanas: AduanasService, private router: Router) { }

  ngOnInit() {
    // this.aduanas.GetGuerrero().subscribe((data) =>{
    //   this.customs = data;
    // })
  }
  navigate(){
    // this.router.navigate(['guerrero']);
  }
}
