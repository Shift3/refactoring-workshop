Replace Conditional with Polymorphism
=====================================

When you find yourself passing magic string around like type, over
consistently checking the type of an object or comparing to a string, this is
often a sign of Objects that are begging to get out.

As our client requests changes to this method, this set of conditionals would
continue to grow in complexity, nesting, and reduce in maintainability over
time. In order to prevent this, lets replace this conditional with
polymorphism.

Polymorphism allows us to send the same message to any object (duck typing)
and not care what kind of object it is.

Instructions
------------

- Each conditional in the `cost` method should be represented by a new class.
- Move slowly, create the classes one at a time, what should the method be
  named on the classes we create?
- Once we have created the 3 difference classes how do we remove the
  conditional?


