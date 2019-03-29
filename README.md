# @okode/ngx

Okode Angular components.

# @okode/ngx-common

Okode Common for Ionic 4+ projects.

#### Build and publish

- Bump version `projects/common/package.json`
- Make sure you're logged in as `okode`:
   - `npm whoami` / `npm logout`
   - `npm adduser` (username: okode, email: developers@okode.com)
- Build and publish
```
npm run build -- common && cd dist/common && npm publish --access=public
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


## Services

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
push(url: string, params?: {}, animation: 'push' | 'modal' | 'fade' = 'push'): Promise<boolean>
pop(url?: string, params?: {}): Promise<boolean>
popToRoot(): Promise<boolean>
setRoot(url: string, params?: {}): Promise<boolean>
getParams(): {}
```

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

