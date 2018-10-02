angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DashPostCtrl', function($scope, dataService ) {


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MyCtrl', function($scope, $http) {
  $scope.myTitle = 'Cascading Select';

  $scope.item = {
    route: '',
    busstop: '',
    model: ''
  };

  var routes = $http.get('js/bus.json').success(function(response) {     
  });

        routes.then(function (response) {
              // body...
          $scope.routes = response.data;
          console.log($scope.routes);

           $scope.routeNames = [];
        for(route in $scope.routes)
          $scope.routeNames.push(route);
        
        $scope.busstopNames = [];
        $scope.execute = [];
       
        // get busstop names by route
        $scope.getBusstopNames = function(route) {
          $scope.item.busstop = '';
          $scope.item.model = '';
          $scope.modelNames = [];
          var result = [];
          if($scope.routes.hasOwnProperty(route)) {
            for(busstop in $scope.routes[route])
              result.push(busstop);
          }
          $scope.busstopNames = result; 
        };

         $scope.modelNames = [];
        // get model names by manufacturer and size
        $scope.getModelNames = function(route, busstop) {
          var result = [];
          if($scope.routes[route].hasOwnProperty(busstop)) {
            for(model in $scope.routes[route][busstop])
              result.push($scope.routes[route][busstop][model]);
             }

          $scope.modelNames = result;
          $scope.PostTo = function() {
            alert($scope.modelNames);
            console.log($scope.modelNames);
          }
      };
    });
});
