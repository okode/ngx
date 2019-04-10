import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'dialogs-page',
  templateUrl: 'dialogs.page.html',
  styleUrls: ['dialogs.page.scss'],
})
export class DialogsPage {

  constructor(
    private alertController: AlertController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Ok']
    });
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { console.log('Confirm Cancel'); }
      }, {
        text: 'Okay',
        handler: () => { console.log('Confirm Okay'); }
      }]
    });
    await alert.present();
  }


  async presentCustomAlert() {
    const image = 'https://via.placeholder.com/150x150.png';
    const title = 'a';
    const description = 'b';
    const alert = await this.alertController.create({
      message: `
        <img class="image" *ngIf="${image}" src="${image}">
        <p class="title" *ngIf="${title}">${title}</p>
        <p class="desc" *ngIf="${description}">${description}</p>
      `,
      mode: 'md',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => { console.log('Confirm Cancel'); }
      }, {
        text: 'Okay',
        handler: () => { console.log('Confirm Okay'); }
      }]
    });
    await alert.present();
  }

}
