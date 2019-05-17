# @okode/ngx-components

Okode custom functional components for Ionic 4+ projects.

#### Local build

ng build components

#### Publish all projects

```
./release.sh CURRENT_VERSION NEXT_VERSION
```

#### Install package

```
npm i @okode/ngx-components
```

#### Usage

In app/core module:
```typescript
import { NgModule } from '@angular/core';
import { MapfreCalendarModule } from '@okode/ngx-components';

@NgModule({
  imports: [
    MapfreCalendarModule,
```
