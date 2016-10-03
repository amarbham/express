(function() {
    'use strict';

    angular.module('app', []);

})();

(function() {
'use strict';

    angular
        .module('app')
        .controller('gameController', gameController);

    function gameController() {
        var vm = this;
        
        vm.hello = 'Hello World!!!!!!!!!!!!!!!!!'
        activate();

        ////////////////

        function activate() { }
    }
})();
