describe("FizzBuzz", function() {
		var fizzBuzz;

	beforeEach(function() {
		fizzBuzz = new FizzBuzz();
	});

	it('returns 1 when given 1 as an argument', function() {
		expect(fizzBuzz.play(1)).toEqual(1);
	});

	// it('returns the input number when not a multiple of 3 and/or 5', function() {
	// 	expect(fizzBuzz.play(num)).toEqual(num);
	// });
	
	it("should return Fizz for multiples of 3", function() {
		expect(fizzBuzz.play(3)).toEqual("Fizz");
	});
	
	it("should return Buzz for multiples of 5", function() {
		expect(fizzBuzz.play(5)).toEqual("Buzz");
	});

	it("should return FizzBuzz for multiples of 3 and 5", function() {
		expect(fizzBuzz.play(15)).toEqual("FIZZBUZZ");
	});
})
