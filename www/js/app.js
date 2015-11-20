// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform, $ionicPopup, $http, $cordovaNetwork) {
	$ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
	if(window.cordova && window.cordova.plugins.Keyboard) {
		cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	}
	if(window.StatusBar) {
		StatusBar.styleDefault();
	}

	if(navigator.onLine == true){
		if(ionic.Platform.platform() == 'ios'){
			window.location.href = "isIos.html";
			return false;
		}else{
			ionic.Platform.platform() == 'android'
			window.location.href = "isAndroid.html";
			return false;
		}		
	}else{
		window.location.href = "noConnection.html";
	}
});


})