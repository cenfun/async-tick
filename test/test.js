import { microtask } from '../src/index.js';

const microtaskCallbackSync = (arg) => {
    console.log(arg);
};

const microtaskCallback = microtask(microtaskCallbackSync);

console.log('microtaskCallback1');
microtaskCallback(1);
console.log('microtaskCallback2');
microtaskCallback(2);
