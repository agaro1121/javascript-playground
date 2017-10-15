/*
 * No access restrictions
 * WeakMaps can be used to privatize properties
 */

class Vehicle {
	constructor() {
		this.passengers = [];
		console.log("Vehicle created");
	}
}


class Car extends Vehicle {

	// static method just like Java :-)
	static getNextVin() {
		return Car.nextVin++;
	}

	constructor(make, model){
		super(); // required !!!
		this.make = make;
		this.model = model;
		// by convention, this property is private
		this._userGears = ['P','N','R','D'];
		// sometimes called "Dynamic Properties"
		this._userGear = this._userGears[0];
	}

	get userGear(){ return this._userGear; }
	set userGear(value) {
		this._userGear = value;
	}

	//overrriding since the instance will be checked before the prototype
	toString() {
		return `${this.make} ${this.model}`;
	}
}

const car1 = new Car();

/**
 * Mixins
 *
 * function makeInsurable(o){} is the mixin
 */
class InsurancePolicy{}
function makeInsurable(o) {
	o.addInsurancePolicy = function(p) { this.insurancePolicy = p; };
	o.getInsurancePolicy = function() { return this.insurancePolicy; };
	o.isInsured = function() { return !!this.insurancePolicy; };
}

// how to use
// mixin for specific instances
makeInsurable(car1);
// mixin for ALL Cars
makeInsurable(Car.prototype);
car1.addInsurancePolicy(new InsurancePolicy());
// PLEASE NOTE: instanceOf(...) will not help determine this is insurable
// You can use symbols to make sure there are no collisions with methods (page 161)

console.log(car1 instanceof Car);
console.log(typeof(car1));

/**
 * class methods get set on the prototype
 *
 * during invocation, class instance gets checked before prototype
 */