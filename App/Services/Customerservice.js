app.service('Customerservice', ['$http', '$location', function ($http, $location) {
    this.getAllUsers = [
           { firstName: 'Jane', lastName: 'Doe', age: 29 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'Josdfhn', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'Johasdfn', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'Johasdfn', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'Johna', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'Johnd', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 },
           { firstName: 'John', lastName: 'Doe', age: 32 }
    ];
  
    this.getSomeUsers = function () {
        return $http({
            url: '/api/Custom/Get'
        })
    }
    this.AddUser = function (user) {
        $http.post('/api/Custom/AddUsers', user);        
    }
    this.RemoveUser = function (PublisherId) {
        $http.post('/api/Custom/RemoveUser/' + PublisherId, null);
    }
    this.EditUser = function (users) {
        $http.post('/api/Custom/EditUsers/', users);
    }
    this.GetUserByUserId = function (Id) {
        return $http({ url: '/api/Custom/GetUserByUserId/' + Id });
    }
    this.SearchUser = function (SearchText) {
        return $http({ url: '/api/Custom/GetUserByUserName?SearchText=' + SearchText });
    }
}]);