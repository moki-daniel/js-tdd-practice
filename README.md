# js-tdd-practice
Test driven development practice using Javascript
Practicing on how to do test driven development step by step

# Jasmine Matchers syntax
Jasmine comes with the following predefined matchers. Check out some of the following, and try to understand what they might do:

expect(fn).toThrow(e);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(array).toContain(member);
expect(string).toContain(substring);
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern);


Jasmine also offers the ability to create custom matchers if you need them, though this probably won't come up until later in your development career. 

The matchers read rather nicely from left to right. For example,  expect(5).toBeLessThan(6);  is exactly how you'd convey the same idea in real (non code) language! You'd say, "I expect 5 to be less than 6."

You can also test the opposite outcome of one of these matchers. To test a negative case, you would write  expect(6).not.toBeLessThan(6); . Just chain a  not in there before calling the matcher.

Like you saw in the last chapter on suites and specs, choosing expectations becomes easier if you already did a good job defining the behaviors you expect during your BDD process.