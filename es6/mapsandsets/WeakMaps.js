/**
 * Same as a Map except:
 * - keys must be objects
 * - keys can be garbage collected
 * - CAN NOT be iterated (could expose keys in the process of being GCed)
 */

// can be used to store private properties in object instances

const SecretHolder = (function(){
	const secrets = new WeakMap();
	return class {
		setSecret(secret) {
			secrets.set(this, secret);
		}

		getSecret() {
			return secrets.get(this);
		}
	}
})();

const a = new SecretHolder();
a.setSecret("secret A");

console.log(`${a.getSecret()}`);

/**
 * Previous example of this:
 */

const Car2 = (function() {

	const carProps = new WeakMap();

	class Car {
		constructor(make, model) {
			this.make = make;
			this.model = model;
			this._userGears = ['P','N','R','D'];
			// sets `this` as key
			carProps.set(this, { userGear: this._userGears[0]} );
		}

		// this is purely syntax???
		get userGear(){ return carProps.get(this).userGear; }
		set userGear(value) {
			if(this._userGears.indexOf(value) < 0)
				throw new Error(`Invalid gear values: ${value}`);
			carProps.get(this).userGear = value;		
		}

		shift(gear) { this.userGear = gear; }
	}

	return Car;
})();

let car2 = new Car2('hyundai', 'santafe');
console.log(car2.userGear);
car2.shift('D');
console.log(car2.userGear);