define(function(require, exports, module){
    var gOldOnError = window.onerror,
        errorsCount = 0,
        errors = [],
        iconService = require('./icon'),
        ExtensionUtils = brackets.getModule('utils/ExtensionUtils');

    ExtensionUtils.loadStyleSheet(module, 'main.css');
    iconService.init();

    //https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onerror
    window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
        if (gOldOnError){
            return gOldOnError(errorMsg, url, lineNumber);
        }
        pushError(errorMsg, url, lineNumber);

    return false;
    }

    function pushError(errorMsg, url, lineNumber){
        errors.push({
            message: errorMsg,
            url: url,
            line: lineNumber
        });

        iconService.show(++errorsCount);
    }

    setInterval(function(){
        throw new Error('Lalala');
    }, 2000);
});
