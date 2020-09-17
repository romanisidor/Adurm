import { Component, OnInit } from '@angular/core';
import { CDMX } from '../../models/aduanas.model';
import { AduanasService } from '../../services/aduanas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cdmx2',
  templateUrl: './cdmx2.page.html',
  styleUrls: ['./cdmx2.page.scss'],
})
export class Cdmx2Page implements OnInit {

  customs: CDMX;
  constructor(private aduanas: AduanasService, private router: Router) { }

  ngOnInit() {
    this.aduanas.GetCDMX().subscribe((data) =>{
      this.customs = data;
    })
  }
  navigate(){
    this.router.navigate(['cdmx']);
  }
}


