Refactoring Workshop
====================

This workshop will focus on the basics of refactoring code. You will gain the
skills to use and apply common refactoring patterns. These will aid you as you
write code, review pull requests and discuss code with others.

The examples in this workshop are simplified to fit within the time limit but
are designed to give you the dialect and tools you need to slot these skills
into your toolbelt.

Also we will be discussing and mentioning SOLID object oriented principles. I
gave a presentation on the topic some time ago, if you need to brush up on the
topic.

Skill Level
-----------

This workshop will be presenting fundamentals.

- [x] Fundamentals
- [ ] Intermediate

Prerequisites
-------------

- Light Javascript Knowledge (ES6), no typescript knowledge required.
- Bare minimum you will need node and npm installed.
- Come prepared to do some coding, only your editor of choice and a terminal
  will be required.

I recommend you install [nvm](https://github.com/nvm-sh/nvm). If you would like
a more complete setup script for you computer that installs a bunch of useful
development tools and makes your environment more productive, I *highly*
recommend using our [Shift3 Laptop setup
scripts](https://github.com/shift3/laptop) which will install nvm as well as
some other helpful tools.

Install
-------

```bash
# Clone the repo then cd to directory
cd /path/to/refactoring-workshop

# install the node version for the repo
nvm install

# install required packages.
npm install

# install test runner globally
npm install -g mocha
```

How to Work on the Exercises
----------------------------

The exercises are numbered, the first one is `01-extract-method`, you will `cd`
into that directory in your terminal and can run the test file at any time.

```bash
# change directory to first exercise
cd 01-extract-method

# run the tests
mocha order-printer.tests.js
```

Now you can open this folder up in your editor and start the exercise.

- A `solution` directory is provided with each exercise if you are stuck and
  need a nudge in the right direction, use this as a last resort. If you are in
  the workshop ask a question instead if you can.
- Run the tests frequently as you change the code, the tests are there to help
  make sure you are working in small steps, and that the code still works as
  intended.

Post Workshop Takeaways
------------------------

No pattern is a panacea, these refactorings are designed to put more tools in
your toolbox and give you a wider set of tools to use in your discussions in
pull requests, your musings about code, and refactorings as your code base
grows.

The important part of each pattern is understanding why and when to apply it,
and what problems you are solving. We will discuss these concept more during the
workshop. No pattern is meant to be used as a bludgeon and no design pattern
solves all problems.

In the real world you should write the simplest code first, don't be afraid of
duplication, and abstract once the correct abstractions become clear, no sooner.

