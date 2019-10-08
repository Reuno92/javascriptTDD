/**
 *  Test Driven Development
 *  with JEST
 */

function isDivideByDivider(int, divider) {
	return int % divider === 0;
}

const theTruthArray = [
	{ divider: 3, result: 'Foo' },
	{ divider: 5, result: 'Bar' },
	{ divider: 7, result: 'Qix' }
];


const fooMethods = function fooMethods(int) {

	let string = '';

	theTruthArray.map( (x) => {
		if (isDivideByDivider(int, x.divider))
			string += x.result;
	});

	if (string.length === 0)
		string = int;

	return string;
};

module.exports = fooMethods;
