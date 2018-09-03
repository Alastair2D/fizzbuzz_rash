function FizzBuzz() {
}

// FizzBuzz.prototype.play = function(num) {
// 	return 1
// 	};

FizzBuzz.prototype.play = function(num) {
	if (num % 15 == 0) {
		return "FIZZBUZZ";
	} else if (num % 3 == 0) {
		return 'Fizz';	
	} 
	else if (num % 5 == 0) {
		return 'Buzz';
	}
	else return (num); 
};
