describe('#isBalanced', function() {
  it('returns true for simple balanced parens', function() {
    expect(isBalanced('()')).toEqual(true);
  })

  it('returns true for multiple balanced parens', function() {
    expect(isBalanced("()[]")).toEqual(true)
  })

  it('returns true for nested balanced parens and brackets', function() {
    expect(isBalanced("([])")).toEqual(true);
  });


  it('returns false for simple unbalanced parens', function() {
    expect(isBalanced("(")).toEqual(false);
  })

  it('returns false for unbalanced parens inside of balanced parens', function() {
    expect(isBalanced("{[}")).toEqual(false);
  })

  it('returns false for overlapping but otherwise balanced parens', function() {
    expect(isBalanced("({)}")).toEqual(false);
  });

	it('returns true for complex balanced strings', function(){
		let str = '([])[{}]{(())}'
		expect(isBalanced(str)).toEqual(true)
	})

	it('returns false if string is not balanced', function(){
		let str = '([])[{}]{(([))}'
		expect(isBalanced(str)).toEqual(false)
	})

	it('returns false even if string has all brackets matched', function(){
		let str = '([])[{}]{([)]}'
		expect(isBalanced(str)).toEqual(false)
	})
});
