
let f = function(){
	console.log('ffff');
};

let p = new Promise(
	function(resolve, reject){
		setTimeout(f, 1000);
		// resolve(42);
		resolve(setTimeout(function(){return 42; }, 1000));
	});

p.then(function(data){ 
	console.log('done!'); 
	console.log("data="+data); 
});

/**
 * factory methods
 *
 * Your scala Future.successful()/failed()
 */
let resolvedP = Promise.resolve("hello");
let rejectedP = Promise.reject(new Error("some error"));

resolvedP.then(function(data){ console.log(data)});
rejectedP.catch(function(err){ console.log(err.message)});

/**
 * Using `then` as a mapping function
 *
 * Last one is a fat arrow function
 */
Promise.resolve('ta-da!').then( 
	function step2(result) {
		console.log('Step 2 received ' + result);
		return 'Greetings from step 2';
	}
).then(
	function step3(result) {
		console.log('Step 3 received ' + result);
	} 
).then(
	function step4(result) {
		console.log('Step 4 received ' + result);
		return Promise.resolve('fulfilled value');
	} 
).then(
	function step5(result) {
		console.log('Step 5 received ' + result);
		return "step 5 results";
	} 
).then( result =>
	console.log('Step 6 received ' + result)
);

/**
 * Execution order
 *
 * Things in the resolver get executed synchronously
 * Everything else...async..simple
 * 
 */
var promise = new Promise(
	function (resolve, reject) {
		console.log('Inside the resolver function'); // 1st statement
		resolve(console.log('truly inside resolver function'));
	}
);

promise.then(function () {
	console.log('Inside the onFulfilled handler'); // LAST Statement
});

console.log('This is the last line of the script'); // 2nd Statement

