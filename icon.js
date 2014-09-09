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

    exports.init = init;
    exports.show = show;
});
