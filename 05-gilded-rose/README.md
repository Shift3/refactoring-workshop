The Gilded Rose Kata
====================

This is the final refactoring, and a classic code kata (not invented by me)

The Gilded Rose kata is a conditional nightmare, understanding what this
class does by looking at it is almost impossible. Use what you have learned
so far and take your best effort to refactor this class into something
object oriented and maintainable.

The tests will guide you as you progress, at the end you will uncomment the
final tests which will ask you to implement something called **Conjured Mana**

The philosophy we are following here is "Make the change easy (warning: this
may be hard), then make the easy change." Lets make this code maintable, then
implementing the requested changes should be simple.

Instructions
------------

- The first step is going to be creating a seam, look at the tests, the first
  tests test for something called 'Normal Item'. Trap this execution path and
  implement normal item first.
- Move slowly, use the tests to guide your implementation, the tests
  represent your knowledge of the domain, as if you were on a real project.
- Implement as simply as you can at first, once all tests are passing in a
  set, is there anything you can do to improve your code?
- Don't jump for Objects to soon, make small jumps, implement as methods
  first, then make the jump to objects if you see a pattern or abstraction.
- Once you are happy with your abstraction, change `xdescribe` to `describe` in
  the tests for **Conjured Mana** to enable them and implement it.

Good luck! :)


