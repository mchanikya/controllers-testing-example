(function () {
	'use strict';

	angular.module('ControllerTestingDemoApp',[])
	.controller('testController',testController);

	function testController() {
		var $ctrl=this;
		$ctrl.Number='';
		$ctrl.NumberType='';
		$ctrl.checkNumber=function(){
			$ctrl.flag=0;
			$ctrl.NumberType='';
			for (var i = 2; i <= $ctrl.Number / 2 ; i++) {
				// console.log("i: "+i);
				if ($ctrl.Number%i==0) {
					$ctrl.flag=1;
					break;
				}
				// console.log("i: "+i+" Flag: "+$ctrl.flag);
			}
			console.log("Number Type "+$ctrl.NumberType+" Flag: "+$ctrl.flag);
			if ($ctrl.flag == 0) {
				$ctrl.NumberType='Prime number';
			}else{
				$ctrl.NumberType='non prime number';
			}
		};
	}

})();