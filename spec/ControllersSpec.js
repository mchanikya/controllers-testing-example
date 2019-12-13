describe("Prime",function(){
	
	beforeEach(function(){
		// module(function($provide){
		// 	$provide
		// });

		module('ControllerTestingDemoApp');
	});
	
	var $controller;
	var ctrlTesting;

	beforeEach(inject(function(_$controller_){
		$controller=_$controller_;
		ctrlTesting=$controller('testController');
		ctrlTesting.Number=10;
	}));

	it('It should be No Prime Number',function () {
		ctrlTesting.checkNumber()
		expect(ctrlTesting.NumberType).toBe('non prime number');
	});

	it('It should be Prime Number',function () {
		ctrlTesting.Number=10;
		ctrlTesting.checkNumber()
		expect(ctrlTesting.NumberType).toBe('Prime number');
	});

});