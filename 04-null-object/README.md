Null Objects
============

Any time you have something that is checking for null over and over again,
whether it is in an `if` statement, of if you think you've hidden it away in a
`ternary` statement, you are still incurring a cost.

The cost of `null` is that they tend to reproduce themselves across your entire
code base. Soon your whole application will be littered with `if(something)`
and `if(!another_thing)`

A method of dealing with this is to extract a null object, we treat nothing
as if it was a concept of it's own. In this case we will be extracting a
`NullContact` object.

Instructions
------------

- Extract a `NullContact` object, use this object to remove the conditionals
  that have already seeped into our application.
- Think about how might be the best way to set this `NullContact` on the
  `FieldSite` if there is a null passed into the constructor. Where do we
  instantiate it?


