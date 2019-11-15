Extract Method
==============

One of the simplest kind of refactoring's you can do is called Extract
Method.

If there is a group of statements that you find yourself tempted to write a
comment for, or their intention can be better described be a concise name,
this is often a sign that they can be extracted to a method.

Instructions
------------

- Within the `print()` method of the `OrderPrinter` class, identify and extract
  some methods.
- Give each method a name that represents the concept that you are
  extracting, `print()` at the end should read very clearly to the human eye.
- Refactor in small steps, run the tests to ensure you haven't broken the
  functionality of the class. Tests can be run with the mocha command.

