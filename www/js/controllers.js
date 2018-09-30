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

.controller('MyCtrl', function($scope, dataService) {
  $scope.myTitle = 'Cascading Select';
  
  // Our model/item
  var vm = this;

  vm.routes = [];

  $scope.item = {
    route: '',
    busstop: '',
    model: ''
  };
  
  // Our hierarchical object of manufacturers, car sizes and model names
  $scope.routes = {
    "Estacao Central - Costa do Sol": {
      "Ministerio da Justica": ["Ministerio da Justica"],
      "Polana Shopping": ["Polana Shopping"],
      "Barclays": ["Barclays"],
      "Cinema Xenon": ["Cinema Xenon"],
      "Bombas Total": ["Bombas Total"],
      "Destacamento Femenino": ["Destacamento Femenino"],
      "Centro de Conferencias": ["Centro de Conferencias"],
      "Maritimo": ["Maritimo"],
      "Baia Mall": ["Baia Mall"],
      "Mercado do Peixe": ["Mercado do Peixe"],
      "Baia Mall": ["Baia Mall"],
      "Triunfo": ["Triunfo"]
    },
    "Estacao Central - Expresso C do Sol": {
      "Naval": ["Naval"],
      "Southern Sun": ["Southern Sun"],
      "Maritimo": ["Maritimo"],
      "Baia Mall": ["Baia Mall"],
      "Mercado do Peixe": ["Mercado do Peixe"],
      "Triunfo": ["Triunfo"]
    },
    "Estacao central - Museu": {
      "Pandora": ["Pandora"],
      "HCM": ["HCM"],
      "Oftalmologia": ["Oftalmologia"],
      "Milano": ["Milano"],
      "Cemiterio": ["Cemiterio"]
    },
    "Estacao central - OMM": {
      "Muncipio": ["Muncipio"],
      "Ministerio do Trabalho": ["Ministerio do Trabalho"],
      "Ronil": ["Ronil"],
      "Banco Unico": ["Banco Unico"],
      "Marien Ngouabi": ["Marien Ngouabi"],
      "Capuchinho": ["Capuchinho"],
      "PH7 Coop": ["PH7 Coop"],
      "OMM": ["OMM"],
      "Icor": ["Icor"],
      "TDM": ["TDM"]
    },
  }
;
  // dataService.getData(function(response) {
  //   // body...
  //   // console.log(response.data);
  //   $scope.routes = response.data;
  //   console.log($scope.routes);
  // });
/*
  activate();

  function activate() {
    return dataService.getData()
                    .then(function(data) {
                      vm.routes = data;
                      console.log(data);   
                      return vm.routes;
                    }).catch(function(error) {
                      console.log(error);
                    });
  }

  
    console.log(vm.routes);
function verifyCLicked() {
  return  $scope.clienRoute;
}*/


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
    /*console.log($scope.getModelNames);*/

  }

   
  };
  
  
  


});
