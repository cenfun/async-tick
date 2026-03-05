
export default class Microtask {

    start(callback) {
        this.callback = callback;
        if (this.started) {
            return;
        }
        this.started = true;
        this.create();
    }

    create() {
        if (typeof queueMicrotask === 'function') {
            queueMicrotask(() => {
                this.execute();
            });
            return;
        }

        if (typeof Promise === 'function') {
            Promise.resolve().then(() => {
                this.execute();
            });
            return;
        }

        setTimeout(() => {
            console.warn('queueMicrotask and Promise are not supported, fallback to setTimeout');
            this.execute();
        }, 0);
    }

    execute() {
        if (!this.started) {
            return;
        }
        this.started = false;
        const callback = this.callback;
        // must be removed first
        this.callback = null;
        // then execute
        // because it could start another callback in executing, do not remove next callback
        if (typeof callback === 'function') {
            callback.call(this);
        }
    }

    cancel() {
        this.started = false;
        this.callback = null;
    }
}
