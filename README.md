# @okode/ngx

Okode Angular components.

## @okode/ngx-common

Okode Common for Ionic 4+ projects.

#### Build and publish

- Bump version `projects/common/package.json`
- Make sure you're logged in as `okode`:
   - `npm whoami` / `npm logout`
   - `npm adduser` (username: okode, email: developers@okode.com)
- Build and publish
```
npm run build -- common && cd dist/common && npm publish
```
- Commit changes

#### Install package

```
npm i @okode/ngx-common
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
import { OkodeNgxCommonModule } from '@okode/ngx-common';

@NgModule({
  imports: [
    OkodeNgxCommonModule.forRoot(),
```
Access to environment config value:
```
import { Environment } from '@okode/ngx-common';
console.log('Selected environment', Environment.config().envName);
```
