"use strict";

var app = angular.module.module("routeRouting", ["ngRoute"]);

app.config(["$routeProvider", 
	function($routeProvider){
		$routeProvider.
		when("/", {
			templateURL: "partials/greeting.html"
			controller: "routeCtrl",
		})
	}])

