describe('#isBalanced', function() {
	it('returns true if string is balanced', function(){
		let str = '([])[{}]{(())}'
		expect(isBalanced(str)).toEqual(true)
	})
});

describe('#isBalanced', function() {
	it('returns false if string is not balanced', function(){
		let str = '([])[{}]{(([))}'
		expect(isBalanced(str)).toEqual(false)
	})
});

describe('#isBalanced', function() {
	it('returns false even if string has all brackets matched', function(){
		let str = '([])[{}]{([)]}'
		expect(isBalanced(str)).toEqual(false)
	})
});
