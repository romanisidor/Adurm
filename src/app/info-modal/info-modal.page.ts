import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.page.html',
  styleUrls: ['./info-modal.page.scss'],
})
export class InfoModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal () {
    await this.modalController.dismiss();
  }

}
