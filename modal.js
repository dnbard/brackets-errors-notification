define(function(require, exports){
    var Dialogs = brackets.getModule('widgets/Dialogs'),
        template = require('text!./modal.html'),
        errorService = require('./errors');

    function showHandler(){
        var dlg = Dialogs.showModalDialogUsingTemplate(template)._$dlg,
            body = dlg.find('.modal-body');

        errorService.errors.forEach(function(error){
            var urlParts = error.url.split('/'),
                url = urlParts[urlParts.length - 1],
                errorElement =
                '<div class="ext-error">' +
                    '<span class="ext-error_timestamp">' + error.timestamp.toLocaleTimeString() + '</span>' +
                    '<span class="ext-error_url" title="'+ error.url +'">' + url + ' : ' + error.line + '</span>' +
                    '<span class="ext-error_message">'+ error.message + '</span>' +
                '</div>';

            body.append(errorElement);
        });
    }

    exports.showHandler = showHandler;
});
