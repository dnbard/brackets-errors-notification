define(function(require, exports, module){
    var iconService = require('./icon');

    function ErrorService(){
        var self = this;

        this.gOldOnError = window.onerror;

        this.errors = [];

        //https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onerror
        window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
            if (this.gOldOnError){
                return this.gOldOnError(errorMsg, url, lineNumber);
            }
            self.pushError(errorMsg, url, lineNumber);

        return false;
        }

        this.pushError = function(errorMsg, url, lineNumber){
            this.errors.unshift({
                message: errorMsg,
                url: url,
                line: lineNumber,
                timestamp: new Date()
            });

            iconService.show(this.errors.length);
        }
    }

    module.exports = new ErrorService();
});
