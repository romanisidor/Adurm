import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AduanasService } from '../services/aduanas.service';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {

  constructor(private modalController: ModalController, public aduanas: AduanasService) { }

  ngOnInit() {

    

  }

  async closeModal () {
    await this.modalController.dismiss();
  }

}
