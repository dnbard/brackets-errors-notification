define(function(require, exports, module){
    var icon = null;

    function init(){
        icon = $('<a id="errorHandler_icon"></a>');

        icon.hide();
        icon.appendTo($("#main-toolbar .buttons"));
    }

    function show(errorCount){
        icon.text(errorCount);
        icon.show();
    }

    function click(handler){
        if (icon === null){
            throw new Error('Icon is not initialized');
        }

        icon.on('click', handler);
    }

    exports.init = init;
    exports.show = show;
    exports.click = click;
});
