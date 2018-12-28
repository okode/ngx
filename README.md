# ngx-okode-common

Okode Common for Ionic 4+ projects

#### Build and publish

- Bump version `projects/ngx-okode-common/package.json`
- Make sure you're logged in as `okode`:
   - `npm whoami` / `npm logout`
   - `npm adduser` (username: okode, email: developers@okode.com)
- Build and publish
```
npm run build -- NgxOkodeCommon && cd dist/ngx-okode-common && npm publish
```
- Commit changes

#### Install package

```
npm i ngx-okode-common
```
<br><br><br>

# Services

## Environment
This service allows the selection of environment config before starting the app.

It requires that the file  `src/assets/environments.json` exists in the project: 

```
{
  "default": {
    "version": "0.1.100",
    "versionCode": "1100"
  },
  "dev": {
    "envName": "dev",
    ...
  },
  "pre": {
    "envName": "pre",
    ...
  },
  "pro": {
    "envName": "pro",
    ...
  },
  ...
}
```
* If only `default` and other environment exist, the selector will not appear.

### Usage

In app/core module:
```
import { NgModule } from '@angular/core';
import { NgxOkodeCommonModule } from 'ngx-okode-common';

@NgModule({
  imports: [
    NgxOkodeCommonModule.forRoot(),
```
Access to environment config value:
```
import { Environment } from 'ngx-okode-common';
console.log('Selected environment', Environment.config().envName);
```
