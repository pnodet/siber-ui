# Siber-ui

Components library for react and tailwind.

<br />

# Quick Start

###### You can download and install siber-ui as a dependency on your project.

### Using NPM

```bash
npm i siber-ui
```

<br />

### Using Yarn

```bash
yarn add siber-ui
```

<br />

### Using PNPM

```bash
pnpm i siber-ui
```

<br />

## Example

First you will need to add the config in your `tailwind.config.js`

```js
const withSiber = require('siber-ui/dist/utils/with-siber.js')

const config = {
  /* your custom tailwind config */
};

module.exports = withSiber(config);
```

Now you're good to go and use siber-ui in your project.

```jsx
import { Button } from "siber-ui";

export default function Example() {
  return <Button>Button</Button>;
}
```
