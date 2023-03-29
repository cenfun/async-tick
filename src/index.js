
import Microtask from './microtask.js';

export const debounce = function(callback, delay = 100) {
    let timeout;
    const handler = function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback.apply(this, arguments);
        }, delay);
    };
    handler.cancel = () => {
        clearTimeout(timeout);
    };
    return handler;
};


export const throttle = function(callback, delay = 100) {
    let last = 0;
    let timeout;
    const handler = function() {
        const now = Date.now();
        if (now > last + delay) {
            clearTimeout(timeout);
            last = now;
            callback.apply(this, arguments);
            return;
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            last = now;
            callback.apply(this, arguments);
        }, delay);

    };
    handler.cancel = () => {
        clearTimeout(timeout);
        last = 0;
    };
    return handler;
};


export const microtask = function(callback) {
    const mt = new Microtask();
    const handler = function() {
        mt.start(() => {
            callback.apply(this, arguments);
        });
    };
    handler.cancel = () => {
        mt.cancel();
    };
    return handler;
};
