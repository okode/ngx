import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';


/**
 * <example-url>../../assets/playground.html?componentPath=forms</example-url>
 */
@Component({
  selector: 'forms-page',
  templateUrl: 'forms.page.html',
  styleUrls: ['forms.page.scss'],
})
export class FormsPage {

  constructor(public platform: Platform) {}

}
