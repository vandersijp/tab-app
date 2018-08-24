/* (C) 2016 Ask Learn Share Ltd */
console.log("Text 22");

var alsText = angular.module("alsText", ['ngMaterial', 'ngAnimate', 'ngSanitize']);

alsText.directive('alsTextParagraphs', function() {
    return {
        restrict: 'E',
        scope: {
            section: '='
        },
        templateUrl: window.x.app + 'text/alsTextParagraphs.html'
    }
});

alsText.directive('alsTextHeader', function() {
    return {
        restrict: 'E',
        scope: {
            section: '='
        },
        templateUrl: window.x.app + 'text/alsTextHeader.html'
    }
});

alsText.directive('alsTextSection', function() {
    return {
        restrict: 'E',
        scope: {
            section: '=',
            filter: '='
            /*
            bitmask
            1 = include only titles
            2 = include only paragraphs
            4 = include only sub section or sections
            */
        },
        templateUrl: window.x.app + 'text/alsTextSection.html'
    }
});

alsText.directive('alsTextPlaylist', function() {
    return {
        restrict: 'E',
        scope: {
            playlist: '=',
            cuts: '='
        },
        templateUrl: window.x.app + 'text/alsTextPlaylist.html'
    }
});
