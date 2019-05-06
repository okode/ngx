# @okode/ngx-components

Okode custom functional components for Ionic 4+ projects.

#### Local build

npm run build -- components

#### Build and publish

- Make sure you're logged in as `okode`:
   - `npm whoami` / `npm logout`
   - `npm adduser` (username: okode, email: developers@okode.com)
- Bump version `projects/components/package.json`
- Build and publish
```
npm run build -- components && cd dist/components && npm publish --access=public && cd ../..
```
- Commit changes

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
