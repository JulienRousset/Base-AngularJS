test.service('nomService', function($http) {
return {
      userId: function(id) {
         return $http.get('http://127.0.0.1:3000/users/' + id);
      }
    }
});