# @okode/ngx-custom-palette

Okode custom palette for Ionic 4+ components

### Tested versions supported:

| @okode/ngx-custom-palette   |      @ionic/angular |
|-----------------------------|---------------------|
| `1.5.0`                     | `4.6.0`             |
| `1.4.1`                     | `4.4.2`             |

#### Install package in client App

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

<hr>

# Aditional directives and components

## kdDatepicker directive
In page module:
```typescript
import { OkodeNgxCustomPaletteModule, OkodeNgxDatepickerModule } from '@okode/ngx-custom-palette';
@NgModule({
  imports: [
    OkodeNgxCustomPaletteModule,
    OkodeNgxDatepickerModule,
    ...
  ],
```
HTML:
```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-input type="date" [(ngModel)]="date"></ion-input>
  <ion-icon name="md-calendar" kdDatepicker [date]="date" (dateChange)="date = $event"></ion-icon>
</ion-item>
```
Inputs and outputs (optionals)
```typescript
@Input() date: string;           // Set selected date 'YYYY-MM-DD'
@Output() dateChange: Event;     // Return selected date 'YYYY-MM-DD'
@Input() maxDate: string;        // Set max date selectable 'YYYY-MM-DD'
@Input() minDate: string;        // Set min date selectable 'YYYY-MM-DD'
```

