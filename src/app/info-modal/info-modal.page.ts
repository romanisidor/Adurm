import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AduanasService } from '../services/aduanas.service';
import { ApiService } from '../services/api.service';
import { Aduanas } from '../models/aduanas.model';


@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {
  

  customList: Aduanas;
  id = this.aduanas.markerId;
  constructor(private modalController: ModalController, public aduanas: AduanasService, public api: ApiService) { }

  ngOnInit() {

    this.api.getInfoAduanas().subscribe( data => {
    
      this.customList = data;

      
      console.log(this.customList);
    });
  }
  async closeModal () {
    await this.modalController.dismiss();
  }

}
