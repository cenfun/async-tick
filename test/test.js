import { microtask } from '../src/index.js';

const microtaskCallback = microtask((arg) => {
    console.log(arg);
});

console.log('use callback directly', microtaskCallback.callback);

microtaskCallback(1);
microtaskCallback.cancel();
console.log('task 1 canceled, will not output 1');


microtaskCallback(1);
microtaskCallback(2);
console.log('two tasks 1 and 2, will only output 2');
