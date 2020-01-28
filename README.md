# twsn

Check if screen name is already used

## Installation

```bash
$ npm install dqn/twsn
```

## Usage

```js
const twsn = require('twsn');

twsn.isUsed('github').then(console.log);
```

### API

#### twsn.isUsed(screenName)

- `screenName`: `string`
- Returns: `Promise<boolean>`

## License

MIT
