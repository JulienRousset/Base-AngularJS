'use strict';

angular.module('components').component("monComposant", {   /// je déclare mon component

	  templateUrl: './mon-composant.html', // 

	  bindings: {

	  	user: '<',
	  	error: '@'

	  },

	  controller: ['NomService', function(NomService) {

	  	this.$onInit = () => {
	  		NomService.userId(1).then((response) => {

	  			this.user = response.data;

	  		}).catch((response)  => {
	  			
	  			this.error = response.statusText || "une erreur s'est produite";
	  		});
	  	};
	  	

	  }]

	});