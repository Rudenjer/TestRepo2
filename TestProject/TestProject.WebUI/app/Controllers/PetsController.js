(function () {
    var PetsController = function ($scope, $http, $routeParams, $window) {
        var ownerId = $routeParams.id;
        var createFilteredTodos = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredTodos = $scope.Owners.slice(begin, end);
        }

        var getOwner = function () {
            $http.get("http://localhost:57113/api/Owner" + "/" + ownerId)
                .then(function (response) {
                    $scope.Owner = response.data;
                })
                .then(function () {
                    $scope.totalItems = $scope.Owner.Pets.length * 10 / $scope.numPerPage;
                    createFilteredTodos();
                });
        };
        getOwner();

        $scope.pageChanged = function () {
            createFilteredTodos();
        };

        $scope.filteredTodos = []
            , $scope.currentPage = 1
            , $scope.numPerPage = 3
            , $scope.totalItems = 1;

        $scope.createPet = function () {
            var pet = {
                Name: $scope.Name,
                OwnerId: $scope.Owner.Id
        };

            $http.post('http://localhost:57113/api/Pet', pet)
                .then(function () {
                    getOwner();
                });
        };

        $scope.deletePet = function (petId) {
            $http.delete('http://localhost:57113/api/Pet' + "/" + petId)
                .then(function () {
                    getOwner();
                });
        };

        $scope.back = function () {
            $window.history.back();
        };
    };

    animalStoreApp.controller("PetsController", ["$scope", "$http", "$routeParams", "$window", PetsController]);
}());