# @okode/ngx-custom-palette

Okode custom Ionic 4+ components

#### Local build

npm run build -- custom-palette && cp -R projects/custom-palette/theme dist/custom-palette/

#### Build and publish

- Make sure you're logged in as `okode`:
   - `npm whoami` / `npm logout`
   - `npm adduser` (username: okode, email: developers@okode.com)
- Bump version `projects/custom-palette/package.json`
- Build and publish
```
npm run build -- custom-palette && cp -R projects/custom-palette/theme dist/custom-palette/ && cd dist/custom-palette && npm publish --access=public && cd ../..
```
- Commit changes

#### Install package

```
npm i @okode/ngx-custom-palette
```

