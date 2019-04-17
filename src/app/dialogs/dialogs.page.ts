import { Component } from '@angular/core';
import { AlertController, ActionSheetController, LoadingController, ToastController } from '@ionic/angular';

/**
 * <example-url>../../assets/playground?componentPath=dialogs</example-url>
 */
@Component({
  selector: 'dialogs-page',
  templateUrl: 'dialogs.page.html',
  styleUrls: ['dialogs.page.scss'],
})
export class DialogsPage {

  constructor(
    private alertController: AlertController,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      translucent: true,
      buttons: ['Ok']
    });
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      translucent: true,
      backdropDismiss: false,
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
    const title = 'Lorem ipsum dolor sit amet, consectetur';
    const description = 'Praesent maximus sagittis urna ut volutpat. Donec id eros ac elit ' +
                        'vulputate vehicula. Donec vel imperdiet.';
    const alert = await this.alertController.create({
      message: `
        <img class="image" *ngIf="${image}" src="${image}">
        <p class="desc" *ngIf="${description}">${description}</p>
        <p class="title" *ngIf="${title}">${title}</p>
      `,
      mode: 'md',
      backdropDismiss: false,
      cssClass: 'custom-alert-message',
      buttons: [{
        text: 'Confirm',
        handler: () => { console.log('Confirm Okay'); }
      }, {
        text: 'Cancel',
        cssClass: 'secondary',
        handler: () => { console.log('Confirm Cancel'); }
      }]
    });
    await alert.present();
  }

  async presentCustomAlertModalInfo() {
    const header = `Information`;
    const content = `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus sagittis urna ut
      volutpat. Donec <b>id eros ac elit vulputate vehicula</b>. Donec vel imperdiet mauris, vel
      gravida metus. Vestibulum euismod, lorem a gravida commodo, sem orci pellentesque sem, at
      hendrerit justo dui at ligula. Nunc ultricies id ullamcorper tempus. Nulla at auctor mi.</p>
      <p>Cras condimentum faucibus leo, et <b>faucibus massa finibus eget</b>. Donec congue ornare
      cursus. Vestibulum gravida convallis tellus, ut congue tortor sollicitudin in. Curabitur
      sollicitudin neque augue, vel tempor lectus aliquam in.</p>
      <p>Vestibulum fringilla dapibus tellus sit amet fermentum. Praesent blandit augue vitae dui
      semper, et rhoncus elit fringilla. Fusce sodales hendrerit neque, quis malesuada urna
      vestibulum at. Sed mauris ex, tempor ut sapien id, venenatis ornare massa. Nulla condimentum
      finibus bibendum. Etiam justo lectus, condimentum turpis eget, tincidunt aliquet ligula.</p>
      <p>Maecenas eu mauris eu velit venenatis fermentum. Vivamus eu quam lacus. Etiam bibendum
      sagittis nulla eu ullamcorper. Ut euismod consectetur dolor, ut tincidunt felis auctor quis.
      Curabitur a nisi sed magna consectetur scelerisque nec a lorem. Nulla sed magna diam. Nulla
      quis dolor quis leo sodales tempus sed nec leo. Maecenas blandit, ligula eget efficitur
      feugiat, diam nisi faucibus metus, a luctus lectus nisl vel nibh.</p>
      <p>Maecenas eu mauris eu velit venenatis fermentum. Vivamus eu quam lacus. Etiam bibendum
      sagittis nulla eu ullamcorper. Ut euismod consectetur dolor, ut tincidunt felis auctor quis.
      Curabitur a nisi sed magna consectetur scelerisque nec a lorem. Nulla sed magna diam. Nulla
      quis dolor quis leo sodales tempus sed nec leo. Maecenas blandit, ligula eget efficitur
      feugiat, diam nisi faucibus metus, a luctus lectus nisl vel nibh.</p>
      <p>Maecenas eu mauris eu velit venenatis fermentum. Vivamus eu quam lacus. Etiam bibendum
      sagittis nulla eu ullamcorper. Ut euismod consectetur dolor, ut tincidunt felis auctor quis.
      Curabitur a nisi sed magna consectetur scelerisque nec a lorem. Nulla sed magna diam. Nulla
      quis dolor quis leo sodales tempus sed nec leo. Maecenas blandit, ligula eget efficitur
      feugiat, diam nisi faucibus metus, a luctus lectus nisl vel nibh.</p>
    `;
    const alert = await this.alertController.create({
      header: header,
      message: `
        <p class="content" *ngIf="${content}">${content}</p>
      `,
      mode: 'md',
      backdropDismiss: false,
      cssClass: 'custom-alert-modal-full-screen',
      buttons: [{
        text: 'Close',
        handler: () => { console.log('Confirm Okay'); }
      }]
    });
    await alert.present();
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      translucent: true,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 2000,
      message: 'Loading...',
      translucent: true
    });
    return await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'top',
      color: 'dark',
      closeButtonText: 'Done'
    });
    toast.present();
  }

}
