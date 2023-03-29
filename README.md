# async-tick

## Preview


## Install
```
npm i async-tick
```
## API
- microtask
```js
import { microtask } from "async-tick";

const microtaskCallbackSync = (arg) => {
    console.log(arg);
};

const microtaskCallback = microtask(microtaskCallbackSync);

console.log('microtaskCallback1');
microtaskCallback(1);
console.log('microtaskCallback2');
microtaskCallback(2);

// microtaskCallback1
// microtaskCallback2
// 2

```


- throttle
- debounce
