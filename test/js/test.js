var app = angular.module('app', []);

app.controller('appController', function ($scope, $window) {
    console.log('appController running ...');

    var test = {
        title: '111',
        desc: '222',
        url: 'http://www.baidu.com',
        transaction: '333'
    }
    $scope.test = function () {
        alert('我被点击了');
        try {
            if (window.AppEvent && window.AppEvent.fireEvent) {
                alert('android');
                window.AppEvent.fireEvent('share', JSON.stringify(test));
            } else if (window.fireEvent) {
                alert('ios');
                window.fireEvent('share', JSON.stringify(test));
            } else {
                alert('my');
            }
        } catch (e) {
            alert('err');
        }

    }
})