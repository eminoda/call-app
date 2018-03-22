(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.callApp = factory();
    }
})(this, function (eventName, jsonData) {
    return new Promise(function (resolve, reject) {
        try {
            if (this.navigator && this.navigator.userAgent) {
                if (this.navigator.match(/iPhone|iPod|iPad/) && this.AppEvent && this.AppEvent.fireEvent) {
                    this.AppEvent.fireEvent(eventName, JSON.stringify(jsonData));
                } else if (this.navigator.match(/Android/)) {
                    this.fireEvent(eventName, JSON.stringify(jsonData));
                } else {
                    reject(new Error('is h5'));
                }
            }
        } catch (err) {
            reject(err);
        }
    })
});