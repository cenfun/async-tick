# async-tick

## Preview
[https://cenfun.github.io/async-tick/](https://cenfun.github.io/async-tick/)

## Install
```
npm i async-tick
```
## microtask
```js
import { microtask } from "async-tick";

const microtaskCallback = microtask((arg) => {
    console.log(arg);
});

microtaskCallback(1);
```
### microtask VS nextTick
- microtask can be canceled
```js
microtaskCallback(1);
microtaskCallback.cancel();
// will not output 1
```
- microtask no repeated calls, only using the most recent callback in an event loop
```js
microtaskCallback(1);
microtaskCallback(2);
// will only output 2
```

## throttle
```js
import { throttle } from "async-tick";

const throttleCallback = throttle((arg) => {
    console.log(arg);
}, 100);

throttleCallback(1);
```

## debounce
```js
import { debounce } from "async-tick";

const debounceCallback = debounce((arg) => {
    console.log(arg);
}, 100);

debounceCallback(1);
```
