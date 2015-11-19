/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailboxController', MailboxController);

    function MailboxController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.folders = [
            {name: 'Entrada',   folder: 'inbox',   alert: 42, icon: 'fa-inbox' },
            {name: 'Enviados',    folder: 'sent',    alert: 0,  icon: 'fa-paper-plane-o' },
            {name: 'Borradores', folder: 'starred', alert: 10, icon: 'fa-edit' },
            {name: 'Plantillas',   folder: 'draft',   alert: 5,  icon: 'fa-star' },
            {name: 'Eliminados',   folder: 'trash',   alert: 0,  icon: 'fa-trash'}
          ];

          vm.mail = {
            cc: false,
            bcc: false
          };
          // Mailbox editr initial content
          vm.content = '<p>Type something..</p>';
        }
    }
})();
