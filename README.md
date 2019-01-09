# unly-utils-react

This project is a transversal project, tools to help and improve react development

Install:

npm or yarn

```
    npm install https://github.com/UnlyEd/unly-utils-react.git
```

Use:

```
import { SafeHTML } from 'unly-utils-react';

or

import SafeHTML from 'unly-utils-react/lib';
```

### React Components

SafeHTML:

|   props      | required | default |
|:---------------:| :-----:|  :-----:|
|    html      | yes |  |
|    tag      | no | div |


### Build

```
yarn run build
```

### Test

Run once:
```
yarn run test:once
```

Watch:
```
yarn test
```

Coverage:
```
yarn run test:coverage
```
