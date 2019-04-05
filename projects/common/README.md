# @okode/ngx-common

Okode Common for Ionic 4+ projects.

#### Build and publish

- Make sure you're logged in as `okode`:
   - `npm whoami` / `npm logout`
   - `npm adduser` (username: okode, email: developers@okode.com)
- Bump version `projects/common/package.json`
- Build and publish
```
npm run build -- common && cd dist/common && npm publish --access=public && cd ../..
```
- Commit changes

#### Install package

```
npm i @okode/ngx-common
```

#### Usage

In app/core module:
```typescript
import { NgModule } from '@angular/core';
import { OkodeNgxCommonModule } from '@okode/ngx-common';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  imports: [
    IonicStorageModule.forRoot(), // Required
    OkodeNgxCommonModule.forRoot(),
```


# Services

### Environment
This service allows the selection of environment config before starting the app.

It requires that the file  `src/assets/environments.json` exists in the project: 

```
{
  "default": {
    "version": "0.1.100",
    "versionCode": "1100"
  },
  "dev": { "envName": "dev", [...] },
  "pre": { "envName": "pre", [...] },
  "pro": { "envName": "pro", [...] },
  ...
}
```
> If only `default` and other environment exist, the selector will not appear.

##### Usage

Access to environment config value:
```typescript
import { Environment } from '@okode/ngx-common';
console.log('Selected environment', Environment.config().envName);
```

### Navigator
Ionic NavController wrapper with custom transitions

##### Functions
```typescript
push(url: string, params?: {}, animation: 'default' | 'push' | 'modal' | 'fade' | 'safepush' = 'default', startNavFlow = false): Promise<boolean>
pop(url?: string, params?: {}): Promise<boolean>
popToRoot(): Promise<boolean>
setRoot(url: string, params?: {}): Promise<boolean>
closeCurrentNavFlow(params?: {}) 
getParams(): any
getViews(): RouteView[] // RouteView: @ionic/angular interface
```
> `default` animation in iOS performs `push`, and `modal` in Android (default native behavior)

> `safepush` is a simple `push` animation alternative for custom designs where the original can give bugs

> It is possible to open a new navigation flow `startNavFlow` as` true` in  `push()`, this allows to return to previous page at any moment calling `closeCurrentNavFlow()`


##### Usage
```typescript
import { Navigator } from '@okode/ngx-common';
constructor(private nav: Navigator) {}
ngOnInit() {
  console.log('Nav params:', this.nav.getParams());
}
navToDetail(id: number) {
  this.nav.push(`/foo/detail/${id}`);
}
```

### HardwareBackButton
This service allows you to control the behavior of the Android physical button. If is enabled will try to `pop()` current view via `Navigator` if no Ionic overlay presented (alert, action-sheet, loading).

##### Functions
```typescript
enable(condition?:() => boolean)
disable()
```
> `condition` (optional) is a filter function that allows to customize behavior and determine (with boolean return value) if continue with the default behavior or not.

> It's possible to customize behavior of hardware back on a particular page implementing `OnHardwareBackButton` inferface.


##### Usage
```typescript
import { HardwareBackButton } from '@okode/ngx-common';
constructor(private hardwareBackButton: HardwareBackButton) {}
this.hardwareBackButton.disable();
```
`OnHardwareBackButton` inferface:
```typescript
import { OnHardwareBackButton } from '@okode/ngx-common';
export class MyPage implements OnHardwareBackButton {
kdOnHardwareBackButton() { /* overwrite back button behavior () on this page */ }
```

