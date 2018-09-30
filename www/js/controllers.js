angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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

.controller('LocationCtrl', function($scope, $http) {
  $http.get("/js/data.json")
    .then(function(response) {
        $scope.routes = response.data;
    });

    var busstops =  $http.get("/js/bus.json")
    .then(function(response) {
        $scope.bus = response.data;
    });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MyCtrl', function($scope, dataService) {
  $scope.myTitle = 'Cascading Select';
  
  // Our model/item
/*  $scope.item = {
    manufacturer: '',
    size: '',
    model: ''
  };*/
  $scope.item = {
    route: '',
    busstop: '',
    model: ''
  };
  
  // Our hierarchical object of manufacturers, car sizes and model names
 /* $scope.routes = {

    "Estacao Central - Costa do Sol": {
      "Ministerio da Justica": ["1"],
      "Polana Shopping": ["2"],
      "Barclays": ["3"],
      "Cinema Xenon": ["4"],
      "Bombas Total": ["5"],
      "Destacamento Femenino": ["6"],
      "Centro de Conferencias": ["7"],
      "Maritimo": ["8"],
      "Baia Mall": ["9"],
      "Mercado do Peixe": ["10"],
      "Baia Mall": ["11"],
      "Triunfo": ["12"]

    },

    "Estacao Central - Expresso C do Sol": {
      "Naval": ["1"],
      "Southern Su": ["2"],
      "Maritimo": ["3"],
      "Baia Mall": ["4"],
      "Mercado do Peixe": ["5"],
      "Triunfo": ["6"]
    },

    "Estacao central - Museu": {
      "Pandora": ["1"],
      "HCM": ["2"],
      "Oftalmologia": ["3"],
      "Milano": ["4"],
      "Cemiterio": ["5"]

    },

    "Estacao central - OMM": {
      "Muncipio": ["1"],
      "Ministerio do Trabalho": ["2"],
      "Ronil": ["3"],
      "Banco Unico": ["4"],
      "Marien Ngouabi": ["5"],
      "Capuchinho": ["6"],
      "PH7 Coop": ["7"],
      "OMM": ["8"],
      "Icor": ["9"],
      "TDM": ["10"]

    },
  }
;*/
  // dataService.getData(function(response) {
  //   // body...
  //   // console.log(response.data);
  //   $scope.routes = response.data;
  //   console.log($scope.routes);
  // });
 $scope.routes = dataService.getData(function(response) {
    // body...
    console.log(response.data);
    return response.data;
    // console.log($scope.routes);
  });
    console.log($scope);

  $scope.routeNames = [];
  for(route in $scope.routes)
    $scope.routeNames.push(route);
  
  $scope.busstopNames = [];
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
  // get model names by route and busstop
  $scope.getModelNames = function(route, busstop) {
    var result = [];
    if($scope.routes[route].hasOwnProperty(busstop)) {
      for(model in $scope.routes[route][busstop])
        result.push($scope.routes[route][busstop][model]);
    }
    $scope.modelNames = result;
  };

});
