app.controller('customerController', function ($scope, $location, $route, NgTableParams, Customerservice) {
    $scope.SearchText = '';
    //$scope.myData = Customerservice.getAllUsers;
    //Grid settings
    var self = this;
    var datass = Customerservice.getAllUsers
    $scope.tableParams = new NgTableParams(
              { page: 1, count: 10 },
              {
                  total: datass.length,
                  getData: function ($defer, params) {
                      $defer.resolve(datass.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                  }
              });
    //$scope.gridOptions = { data: 'myData' };

    Customerservice.getSomeUsers().success(function (result) {
        $scope.users = result;
        //$scope.gridOptions = { data: result };
    }).error(function (error) {
        console.log(error);
    });
    $scope.RemoveUser = function (PublisherId) {
        var result = confirm("Want to delete?");
        if (result) {
            Customerservice.RemoveUser(PublisherId);
            $route.reload();
            return true
        }
        else {
            return false;
        }
    };
    $scope.SearchUser = function (SearchText) {
        Customerservice.SearchUser(SearchText).success(function (result) {
            $scope.users = result;
        }).error(function (error) {
            console.log(error);
        });
    };
});