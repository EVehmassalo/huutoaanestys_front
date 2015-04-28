'use strict';

/**
 * @ngdoc function
 * @name huutoaanestysFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the huutoaanestysFrontApp
 */
angular.module('huutoaanestysFrontApp')
  .controller('JsonCtrl', function ($scope, $http) {
    // JSON url, only json residing within the same domain is supported, for out of domain json use $http.jsonp
    
	  //$scope.kurssit=('[{"tunnus":"BUS1LH001","nimi":"Yritt�jyys ja yritystoiminta","koulutusohjelma_tunnus":"HELI","laajuus":6,"ajoitus":0,"kuvaus":""},{"tunnus":"BUS1LK003","nimi":"Projektijohtaminen","koulutusohjelma_tunnus":"HELI","laajuus":3,"ajoitus":0,"kuvaus":""},{"tunnus":"ICT2TN007","nimi":"Ohjelmistokehitys","koulutusohjelma_tunnus":"TIKO","laajuus":12,"ajoitus":3,"kuvaus":"Java ohjelmistokehityst� projektiryhm�ss�"},{"tunnus":"ICT2TN009","nimi":"Tietohallinto","koulutusohjelma_tunnus":"TIKO","laajuus":3,"ajoitus":4,"kuvaus":"Tietohallinnon perusteet"},{"tunnus":"SWD4TN004","nimi":"JavaEE","koulutusohjelma_tunnus":"TIKO","laajuus":3,"ajoitus":4,"kuvaus":"Java EE tekniikoiden perusteet"},{"tunnus":"SWD4TN005","nimi":"Softalaprojekti I","koulutusohjelma_tunnus":"TIKO","laajuus":9,"ajoitus":4,"kuvaus":"Softalaprojekti I:n suoritettuaan opiskelija taitaa vaatimusm��rityksen eri vaiheissa k�ytett�vi� menetelmi�. H�n osaa m��ritt�� vaatimukset, laatia testitapaukset ja suorittaa testauksen Softalan tarjoamalle keissille."}]');
	  
	 /* $http.get('http://proto317.haaga-helia.fi:8080/Huutoaanestys/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.kurssit = data; // bind the JS object to $scope
	  */
	  
	  $http.get('json/kurssit.json')
      .success(function(data) { //success returns a JS object
        $scope.kurssit = data; // bind the JS object to $scope
      
      });
});
