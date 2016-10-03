describe('gameController', function () {

    var $controller,
        gameController;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
        gameController = $controller('gameController', { });

    }));

    it('should be defined', function () {
        expect(gameController).toBeDefined();
    });

});