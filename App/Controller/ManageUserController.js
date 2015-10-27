app.controller('manageuserscontroller', function ($scope, $location, translationService, Customerservice) {
    //Run translation if selected language changes
    $scope.translate = function (dropdown) {
        debugger;
        if (constants.selectLanguage == '') {
            $scope.selectedLanguage = 'en';
        }
        if (dropdown)
            constants.selectLanguage = $scope.selectedLanguage;
        else
            $scope.selectedLanguage = constants.selectLanguage;
        translationService.getTranslation($scope, constants.selectLanguage);
        
    };
    //Init
    $scope.translate(false);

    if ($location.search().Id != undefined)
    {       
        Customerservice.GetUserByUserId($location.search().Id).success(function (result) {
            $scope.user = result;
        }).error(function (error) {
            console.log(error);
        });
    }        
    $scope.EditUsers = function (users) {
        Customerservice.EditUsers(users);
    };
    $scope.AddEditUser = function (users) {
        if ($location.search().Id == undefined) {
            Customerservice.AddUser(users);
        }
        else{
            Customerservice.EditUser(users);
        }
        $location.path("/UserListing.html");
    };
});