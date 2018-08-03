'use strict';

angular.module('RSSFeedApp')
    .controller('FeedCtrl',function ($scope, FeedService) { 
        console.log("I am working");   
        $scope.loadButonText="Load";
        $scope.loadFeed=function(feedEvent){        
            FeedService.parseFeed($scope.feedSrc).then(function(res){
            $scope.loadButonText=angular.element(feedEvent.target).text();
            console.log(res);
            $scope.feeds = res.data.responseData;
        }, function(statusCode) {
            console.log(statusCode);
        });
    }
});
