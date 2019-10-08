const fooMethod = require('./foo');

test('One should return one', () => {
	expect(fooMethod(1)).toBe(1);
});

test('A multiple of three should return Foo', () => {
	expect(fooMethod(3)).toBe('Foo');
});

test('A multiple of five should return Bar', () => {
	expect(fooMethod(5)).toBe('Bar');
});

test('A multiple of three and five should return FooBar', () => {
	expect(fooMethod(15)).toBe('FooBar');
});

test('A multiple of seven should return Qix', () => {
	expect(fooMethod(7)).toBe('Qix');
});

test('A multiple of three and seven should return FooQix', () => {
	expect(fooMethod(21)).toBe('FooQix');
});

test('A multiple of five and seven should return BarQix', () => {
	expect(fooMethod(35)).toBe('BarQix');
});

test('A multiple of three, five and seven should return FooBarQix', () => {
	expect(fooMethod(105)).toBe('FooBarQix');
});
