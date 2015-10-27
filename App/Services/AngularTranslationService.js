app.service('translationService', function ($resource) {
    this.getTranslation = function ($scope, language) {
        debugger;
        var languageFilePath = 'App/Translation/translation_' + language + '.json';
        console.log(languageFilePath);
        $resource(languageFilePath).get(function (data) {
            debugger;
            $scope.translation = data;
        });
    };
});