'use strict';

COMPNT.component("maboite", {   /// je déclare mon component

	  templateUrl: './test.html', // 

	  controller: ['nomService', function(nomService) {

	  	var self = this;

	  	var promesse = nomService.userId(1);

	  	promesse.then(
	  		function(user){
	  			self.msg = user.data
	  		},
	  		function(error){
	  			console.log('test')
	  		}
	  		);

	  }]
	});