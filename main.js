define(function(require, exports, module){
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        iconService = require('./icon'),
        modalService = require('./modal'),
        errorService = require('./errors');

    ExtensionUtils.loadStyleSheet(module, 'main.css');
    iconService.init();
    iconService.click(modalService.showHandler);
});
