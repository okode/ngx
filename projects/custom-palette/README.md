# @okode/ngx-custom-palette

Okode custom Ionic 4+ components

#### Local build

ng build custom-palette && cp -R projects/custom-palette/styles dist/custom-palette/

#### Publish all projects

```
./release.sh CURRENT_VERSION NEXT_VERSION
```

#### Install package

```
npm i @okode/ngx-custom-palette
```


#### Usage

In all Components/Pages (or SharedModule):
```typescript
import { OkodeNgxCustomPaletteModule } from '@okode/ngx-custom-palette';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, IonicModule, // Required
    OkodeNgxCustomPaletteModule
  ]
```
Import main style in `src/global.scss`
```typescript
@import '~@okode/ngx-custom-palette/styles/style.scss';
```