import { Component } from '@angular/core';

/**
 * <example-url>../../assets/playground.html?componentPath=theming</example-url>
 */
@Component({
  selector: 'theming-page',
  templateUrl: 'theming.page.html',
  styleUrls: ['theming.page.scss'],
})
export class ThemingPage {

  selectedTheme: 'theme-mapfre' | 'theme-verti' = 'theme-mapfre';

  onThemeChanged(event) {
    this.selectedTheme = event.detail.value;
    document.getElementsByTagName('body')[0].className = this.selectedTheme;
  }

}
