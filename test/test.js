import { microtask } from '../src/index.js';

const microtaskCallback = microtask((arg) => {
    console.log(arg);
});


microtaskCallback(1);
microtaskCallback.cancel();
// will not output 1


microtaskCallback(1);
microtaskCallback(2);
// will only output 2
