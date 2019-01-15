## Balanced Parenthesis


### Problem

Given a string consisting only of the characters (, [, {, ), ], and }, write a function ```isBalanced()``` that returns a boolean that determines whether or not every open parentheses or bracket is paired correctly and is balanced.

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

More examples:

```javascript
isBalanced("()[]")
//true
```

```javascript
isBalanced("([])")
//true
```

```javascript
isBalanced("({)}")
//false
```

```javascript
isBalanced("{[}")
//false
```


### Process

Mainly, this is your chance to shine.  This problem is hard, but one of the nice things about it is that it has many different solutions.  

Use it as a mechanism to focus on process, and work with a partner, if you can.  Think about this problem as a practice in breaking down problems, and knowing when to retreat from a potential solution.  Remember from the last lesson to try to derive what was good and what did not work in your previous attempt, before moving onto a new attempt.

A couple small hints to get started: where are some examples where the solution becomes obvious.  What can you learn from it.  Ok that's enough.  

Be self-aware about when your process.  When is your process good, and when it is less successful?  We are trying to be disciplined about developing good habits as much as anything else.
