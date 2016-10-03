/*
(C) 2016 Ask Learn Share Ltd
*/
var alsFigure = angular.module("alsFigure", ['ngMaterial', 'ngAnimate']);

alsFigure.directive('alsFigurePhotoMain', function () {
  return {
    scope: {
        image: '=',
        path: '='
    },
    controller: function () {
      // this.name = 'Pascal';
    },
    controllerAs: 'alsFigurePhotoMainCtrl',
//    bindToController: true,
    templateUrl: 'https://rawgit.com/vandersijp/TabApp/master/app/figure/alsFigurePhotoMain.html'
  };
});