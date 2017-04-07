'use strict';

const COMPNT = angular.module('components', []); /// Je crée ma boite composant 

angular.module('maboite', []); // je crée ma boite 

const test = angular.module('test', ['components', 'maboite']);  // je déclare test dans mon dossier maboite qui ce trouve dans un components
