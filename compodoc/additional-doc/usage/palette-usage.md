# Palette usage
  
Import it in your main style file (like app.scss, global.scss...):
```css
@import '~@okode/ngx-custom-palette/styles/style.scss';
```
  
And then import it all Components/Pages' Module that you want to use it (or SharedModule to use it):  
```ts
import { OkodeNgxCustomPaletteModule } from '@okode/ngx-custom-palette';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, IonicModule, // Required
    OkodeNgxCustomPaletteModule
  ],
  exports: [
    CommonModule, FormsModule, IonicModule, // Required just in SharedModule
    OkodeNgxCustomPaletteModule
  ]
...
```
