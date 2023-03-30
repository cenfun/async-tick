# async-tick

## Preview
[https://cenfun.github.io/async-tick/](https://cenfun.github.io/async-tick/)

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
```js
import { throttle } from "async-tick";

const throttleCallbackSync = (arg) => {
    console.log(arg);
};

const throttleCallback = throttle(throttleCallbackSync, 100);
throttleCallback(1);

```

- debounce
```js
import { debounce } from "async-tick";

const debounceCallbackSync = (arg) => {
    console.log(arg);
};

const debounceCallback = debounce(debounceCallbackSync, 100);
debounceCallback(1);

```
