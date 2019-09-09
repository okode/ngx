# @okode/ngx-common

Okode Common for Ionic 4+ projects.

#### Install package in client App

```
npm i @okode/ngx-common
```

#### Usage

In app/core module:
```typescript

import { NgModule } from '@angular/core';
import { OkodeNgxCommonModule } from '@okode/ngx-common';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicStorageModule.forRoot(), // Required
    HttpClientModule, // Required
    OkodeNgxCommonModule.forRoot(),

```

<hr>





# Services

  - [Environment](#Environment)
  - [Navigator](#Navigator)
  - [HardwareBackButton](#HardwareBackButton)
  - [HttpCacheInterceptor](#HttpCacheInterceptor)
  - [SentryErrorHandler](#SentryErrorHandler)
  - [MMobileService](#MMobileService)



## Environment
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




## Navigator
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
setDefaultAnimation(animation: 'default' | 'push' | 'modal' | 'fade' | 'safepush')
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




## HardwareBackButton
This service allows you to control the behavior of the Android physical button. If is enabled will try to `pop()` current view via `Navigator` if no Ionic overlay presented (alert, action-sheet, loading). 
It is not initialized when importing the module, it is necessary to call the `enable()` function when starting if you want to use it.

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
this.hardwareBackButton.enable();
```
`OnHardwareBackButton` inferface:
```typescript
import { OnHardwareBackButton } from '@okode/ngx-common';
export class MyPage implements OnHardwareBackButton {
kdOnHardwareBackButton() { /* overwrite back button behavior () on this page */ }
```




## HttpCacheInterceptor

Allows caching GET responses (temporally in memory)

**Register provider in app @NgModule**
```typescript
  { provide: HTTP_CACHE_INTERCEPTOR_DURATION_MINS, useValue: 5 },
  { provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true },
```
>`HTTP_CACHE_INTERCEPTOR_DURATION_MINS` (minutes number) is optional, default: `null` (temporal cache in memory not expires)

**Add header to services that you want to cache (applies in GETs)**
```typescript
  headers = headers.append('X-NGX-CACHE-INTERCEPTOR', 'cache-response');
````
>`X-NGX-CACHE-INTERCEPTOR` header will not be sent to the server

**Clear all cache responses (applies in all HTTP methods)**
```typescript
  headers = headers.append('X-NGX-CACHE-INTERCEPTOR', 'clear-cache');
````
**Important:** `X-NGX-CACHE-INTERCEPTOR` header will not be sent to the server





## SentryErrorHandler

SentryErrorHandler service for Angular ErrorHandler provide

##### Usage
In app/core module:
```typescript
import { NgModule, ..., ErrorHandler } from '@angular/core';
import { SentryErrorHandler } from '@okode/ngx-common';

@NgModule({
  providers: [
    ...
    { provide: ErrorHandler, useClass: SentryErrorHandler }
```
In app init
```typescript
import { SentryErrorHandler } from '@okode/ngx-common';
...
SentryErrorHandler.init(dsn, release, environment, ignoreErrors?);
```

##### Functions

```typescript
static init(dsn: string, release: string, environment: string, ignoreErrors = [])
static sendServerError(error: HttpErrorResponse) // HTTP ERROR WARNING
static sendServerErrorHandled(error: HttpErrorResponse, errorCode: string) // HTTP ERROR DEBUG
static sendCustomError(title: string, level: Sentry.Severity, transaction: string, error: any)
handleError(error) // base function override
```




## MMobileService

##### Usage

Plugin '@ionic-native/device/ngx' required

```typescript
import { MMobileService } from '@okode/ngx-common';
import { Device } from '@ionic-native/device/ngx';

@NgModule({
  imports: [
  providers: [
    ...
    Device, // Required
    MMobileService
```

##### Functions

```typescript
init(baseUrl: string, appName: string, version: string, jwtConfigName?: string, timeoutMillis?: number)
//
reloadConfig()
getCustomConfig()
getServiceUrl(key: string)
getJwtLoginUrl()
getJwtRefreshUrl()
getVersion()
getTimeout()
isActive() {
getFeatures()
isDeviceLocked()isInitialized()
async getLastUpdatedDate()
```