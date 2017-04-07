angular.module('services').service('NomService', function($http) {
	this.userId = (id) => {
		return $http.get('http://127.0.0.1:3000/users/' + id);
	};
});