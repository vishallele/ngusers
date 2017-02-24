(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('loginservice', loginservice);

  loginservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function loginservice($http, $q, exception, logger) {
    var service = {
      login: authentication
    };

    return service;

    function authentication() {
      return $http.post('http://localhost/demo/basic/web/rest/restusers')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
  }
})();
