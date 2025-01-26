## Type Safety Issue in Latest Tuyau Client Version

### Description
When using the latest version of Tuyau (`@tuyau/client@0.2.4` and `@tuyau/core@0.3.0`), TypeScript type inference is not working correctly for API responses, while it works properly in older versions as shown in the official examples.

### Current Behavior
Using the latest version with the official example code:

```typescript
const result4 = await tuyau.users.$get({ query: { limit: 10, page: 1 } });
const user = result4.data[1];
console.log(user.id, user.name, user.email, user.age, user.xxx, user.yyy);
```

The TypeScript compiler fails to properly infer types for the response data, making type safety features ineffective.

[Place screenshot here showing the type inference issue with the latest version]

### Expected Behavior
The type inference should work as demonstrated in the official examples, providing proper TypeScript type checking and autocompletion for response data properties.

### Environment
- `@tuyau/client`: 0.2.4
- `@tuyau/core`: 0.3.0
- TypeScript: 5.7.3
- Node.js: 20.18.2

### Additional Context
This is a regression from previous versions where type inference worked correctly. The same code works properly with older versions as shown in the official documentation.

### Links
- Official example: [link to be added]

### Solution Found
The type safety issue occurs because the `node ace add @tuyau/core` command only installs `@tuyau/core`, but proper type inference requires `@tuyau/utils` as a dev dependency. To fix the type inference:

```bash
pnpm add -D @tuyau/utils
```

After installing both packages, TypeScript type inference should work as expected. 