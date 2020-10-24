import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AduanasService } from '../services/aduanas.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {
  
  id = this.aduanas.markerId;
  constructor(private modalController: ModalController, public aduanas: AduanasService, public api: ApiService) { }

  ngOnInit() {

   
    this.api.getInfoAduanas();
  }

  async closeModal () {
    await this.modalController.dismiss();
  }

}
